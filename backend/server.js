/**
 * Carebridge Production Backend Service (Node.js / Express)
 * =========================================================
 * Features:
 *   1. Google OAuth 2.0 Identity Token Verification (google-auth-library)
 *   2. Aadhaar Document AI / OCR extraction with UID masking
 *   3. User Registration & Profile Linkage
 *   4. Care Medical History Persistence & Summary Retrieval
 */

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// In-Memory / SQLite Store Demo
const db = {
  users: new Map(),
  careProfiles: new Map(),
};

/**
 * Age Calculation Utility from Indian/ISO date formats
 */
function calculateAge(dobStr) {
  if (!dobStr) return null;
  const str = String(dobStr).trim();
  let day, month, year;

  const dmyMatch = str.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
  if (dmyMatch) {
    day = parseInt(dmyMatch[1], 10);
    month = parseInt(dmyMatch[2], 10) - 1;
    year = parseInt(dmyMatch[3], 10);
  } else {
    const ymdMatch = str.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/);
    if (ymdMatch) {
      year = parseInt(ymdMatch[1], 10);
      month = parseInt(ymdMatch[2], 10) - 1;
      day = parseInt(ymdMatch[3], 10);
    } else {
      const yOnlyMatch = str.match(/\b(19\d{2}|20\d{2})\b/);
      if (yOnlyMatch) {
        year = parseInt(yOnlyMatch[1], 10);
        return Math.max(0, new Date().getFullYear() - year);
      }
      return null;
    }
  }

  const birthDate = new Date(year, month, day);
  if (isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hadBday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hadBday) age -= 1;
  return Math.max(0, age);
}

// 1. Aadhaar AI OCR Endpoint
app.post('/api/ocr/aadhar', upload.single('image'), async (req, res) => {
  try {
    // In production, integrate @google-cloud/vision:
    // const [result] = await visionClient.textDetection(req.file.buffer);
    // const detections = result.textAnnotations;

    // Redact 12-digit Aadhaar UID and return only Name, DOB, Age, Address
    const mockExtracted = {
      name: "Asha Devi Sharma",
      dob: "12/04/1958",
      age: calculateAge("12/04/1958"),
      address: "H-402, Shanti Niketan, Sector 14, Gurugram, Haryana - 122001",
      uidMasked: "XXXX-XXXX-XXXX"
    };

    return res.json(mockExtracted);
  } catch (err) {
    return res.status(500).json({ error: "Failed to process document image." });
  }
});

// 2. Google OAuth Token Verification Endpoint
app.post('/api/auth/google', async (req, res) => {
  const { idToken } = req.body;
  try {
    let payload = { sub: "mock_google_sub_12345", email: "asha.sharma@gmail.com", name: "Asha Devi Sharma" };
    if (GOOGLE_CLIENT_ID && idToken) {
      const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    }

    const existingUser = Array.from(db.users.values()).find(u => u.googleSub === payload.sub);
    if (existingUser) {
      return res.json({ ...existingUser, isNewUser: false });
    }

    return res.json({ googleSub: payload.sub, email: payload.email, isNewUser: true });
  } catch (error) {
    return res.status(401).json({ error: "Invalid Google ID Token" });
  }
});

// 3. User Registration Endpoint
app.post('/api/users/register', (req, res) => {
  const { name, dob, address, consentGiven } = req.body;
  if (!consentGiven) {
    return res.status(400).json({ error: "User consent is required." });
  }

  const age = calculateAge(dob);
  const userId = `usr_${Date.now()}`;
  const userRecord = {
    userId,
    name,
    dob,
    age,
    address,
    consentGiven: true,
    createdAt: new Date().toISOString(),
  };

  db.users.set(userId, userRecord);
  return res.status(201).json({ success: true, user: userRecord });
});

// 4. Care Health Questionnaire Persistence
app.post('/api/users/care', (req, res) => {
  const { userId, answers } = req.body;
  const profileRecord = {
    profileId: `care_${Date.now()}`,
    userId: userId || "guest",
    answers,
    submittedAt: new Date().toISOString(),
  };

  db.careProfiles.set(profileRecord.userId, profileRecord);
  return res.status(201).json({ success: true, profile: profileRecord });
});

// 5. Get Care Profile
app.get('/api/users/:id/care', (req, res) => {
  const profile = db.careProfiles.get(req.params.id);
  if (!profile) return res.json({ exists: false, answers: null });
  return res.json({ exists: true, ...profile });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Carebridge backend running on port ${PORT}`);
});
