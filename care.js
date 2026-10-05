/* =====================================================================
   CAREBRIDGE — CARE.JS
   Dedicated logic for standalone Care Health Profile webpage (care.html)
   ===================================================================== */

const translations = {
  en: {
    nav_home: "Home",
    nav_settings: "Settings",
    nav_care: "Care",
    auth_trigger: "Patient Profile",
    settings_lang_label: "Language",
    skip_to_content: "Skip to main content",
    back_to_home: "Back to Home",
    status_connected: "Carebridge Connected",
    dropdown_switch: "Switch Account",
    dropdown_logout: "Log out",
    care_eyebrow: "Your Care Profile",
    care_title: "Care Assessment & Medical History",
    care_intro: "Before your visit, help our clinical team understand your complete medical history and everyday health. You can pause or edit answers at any time.",
    care_summary_eyebrow: "Official Health Record",
    care_summary_title: "Comprehensive Health Summary",
    btn_prev_step: "Previous",
    btn_next_step: "Next Step →",
    btn_submit_summary: "Submit & Generate Summary ✓",
    btn_print_pdf: "Print / Save PDF",
    btn_edit_answers: "Edit Answers",
    footer_tagline: "Carebridge — no one is forgotten.",
    footer_rights: "© 2026 Carebridge. Built with care.",
    care_guest_title: "Please Sign In or Create an Account",
    care_guest_desc: "To access your personalized Care assessment and medical summary, please log in with your account or verify your Aadhaar card.",
    btn_goto_login: "Go to Log In / Sign Up →",
  },
  es: {
    nav_home: "Inicio",
    nav_settings: "Ajustes",
    nav_care: "Atención",
    auth_trigger: "Perfil del Paciente",
    settings_lang_label: "Idioma",
    skip_to_content: "Saltar al contenido principal",
    back_to_home: "Volver al Inicio",
    status_connected: "Carebridge Conectado",
    dropdown_switch: "Cambiar de cuenta",
    dropdown_logout: "Cerrar sesión",
    care_eyebrow: "Su Perfil de Atención",
    care_title: "Evaluación de Salud e Historial Médico",
    care_intro: "Antes de su consulta, ayude a nuestro equipo médico a comprender su historial médico y su estado de salud general. Puede pausar o editar sus respuestas en cualquier momento.",
    care_summary_eyebrow: "Historial Médico Oficial",
    care_summary_title: "Resumen de Salud Integral",
    btn_prev_step: "Anterior",
    btn_next_step: "Siguiente Paso →",
    btn_submit_summary: "Enviar y Generar Resumen ✓",
    btn_print_pdf: "Imprimir / Guardar PDF",
    btn_edit_answers: "Editar Respuestas",
    footer_tagline: "Carebridge — nadie es olvidado.",
    footer_rights: "© 2026 Carebridge. Hecho con cuidado.",
    care_guest_title: "Por favor, inicie sesión o cree una cuenta",
    care_guest_desc: "Para acceder a su evaluación de atención personalizada y resumen médico, inicie sesión o verifique su tarjeta Aadhaar.",
    btn_goto_login: "Ir a Iniciar Sesión / Registrarse →",
  },
  hi: {
    nav_home: "होम",
    nav_settings: "सेटिंग्स",
    nav_care: "देखभाल",
    auth_trigger: "मरीज़ प्रोफ़ाइल",
    settings_lang_label: "भाषा",
    skip_to_content: "मुख्य सामग्री पर जाएं",
    back_to_home: "होम पर वापस जाएं",
    status_connected: "Carebridge कनेक्टेड",
    dropdown_switch: "खाता बदलें",
    dropdown_logout: "लॉग आउट",
    care_eyebrow: "आपकी देखभाल प्रोफ़ाइल",
    care_title: "स्वास्थ्य मूल्यांकन और मेडिकल इतिहास",
    care_intro: "अपने अस्पताल आने से पहले, हमारी मेडिकल टीम को अपने स्वास्थ्य और इतिहास को समझने में मदद करें। आप कभी भी अपने उत्तर बदल सकते हैं।",
    care_summary_eyebrow: "आधिकारिक स्वास्थ्य रिकॉर्ड",
    care_summary_title: "विस्तृत स्वास्थ्य सारांश",
    btn_prev_step: "पिछला",
    btn_next_step: "अगला कदम →",
    btn_submit_summary: "जमा करें और सारांश बनाएं ✓",
    btn_print_pdf: "प्रिंट करें / PDF सेव करें",
    btn_edit_answers: "उत्तर बदलें",
    footer_tagline: "Carebridge — कोई भी भुलाया नहीं जाता।",
    footer_rights: "© 2026 Carebridge. देखभाल के साथ बनाया गया।",
    care_guest_title: "कृपया लॉग इन करें या खाता बनाएं",
    care_guest_desc: "अपने व्यक्तिगत स्वास्थ्य सारांश और मूल्यांकन तक पहुँचने के लिए कृपया लॉग इन करें या अपना आधार कार्ड सत्यापित करें।",
    btn_goto_login: "लॉग इन / साइन अप पर जाएं →",
  },
  fr: {
    nav_home: "Accueil",
    nav_settings: "Paramètres",
    nav_care: "Soins",
    auth_trigger: "Profil Patient",
    settings_lang_label: "Langue",
    skip_to_content: "Passer au contenu",
    back_to_home: "Retour à l'accueil",
    status_connected: "Carebridge Connecté",
    dropdown_switch: "Changer de compte",
    dropdown_logout: "Se déconnecter",
    care_eyebrow: "Votre Profil de Soins",
    care_title: "Évaluation de Santé et Antécédents Médicaux",
    care_intro: "Avant votre visite, aidez notre équipe médicale à comprendre vos antécédents médicaux et votre santé quotidienne. Vous pouvez mettre en pause ou modifier vos réponses à tout moment.",
    care_summary_eyebrow: "Dossier Médical Officiel",
    care_summary_title: "Résumé Médical Complet",
    btn_prev_step: "Précédent",
    btn_next_step: "Étape Suivante →",
    btn_submit_summary: "Soumettre et Générer le Résumé ✓",
    btn_print_pdf: "Imprimer / Enregistrer PDF",
    btn_edit_answers: "Modifier les réponses",
    footer_tagline: "Carebridge — personne n'est oublié.",
    footer_rights: "© 2026 Carebridge. Conçu avec soin.",
    care_guest_title: "Veuillez vous connecter ou créer un compte",
    care_guest_desc: "Pour accéder à votre évaluation médicale personnalisée et à votre résumé, veuillez vous connecter ou vérifier votre carte Aadhaar.",
    btn_goto_login: "Aller à la connexion / inscription →",
  }
};

/* ---------------------------------------------------------------------
   1. LANGUAGE SWITCHER (PERSISTED)
   --------------------------------------------------------------------- */
(function initLanguage() {
  const select = document.getElementById("lang-select");
  if (!select) return;

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("carebridge_lang", lang);
    select.value = lang;
  }

  select.addEventListener("change", (e) => setLanguage(e.target.value));

  // Load persisted language
  const savedLang = localStorage.getItem("carebridge_lang") || "en";
  setLanguage(savedLang);
})();

/* ---------------------------------------------------------------------
   2. AUTH & USER DROPDOWN LOGIC
   --------------------------------------------------------------------- */
(function auth() {
  const STORAGE_KEY = "carebridge_user";
  const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

  const trigger = document.getElementById("auth-trigger");
  const triggerLabel = document.getElementById("auth-trigger-label");
  const userDropdown = document.getElementById("user-dropdown");
  const dropdownAvatar = document.getElementById("dropdown-avatar");
  const dropdownUserName = document.getElementById("dropdown-user-name");
  const dropdownUserMeta = document.getElementById("dropdown-user-meta");
  const dropdownUserAddr = document.getElementById("dropdown-user-addr");
  const dropdownSwitchBtn = document.getElementById("dropdown-switch-btn");
  const dropdownLogoutBtn = document.getElementById("dropdown-logout-btn");

  const patientBanner = document.getElementById("care-patient-banner");
  const careAvatar = document.getElementById("care-avatar");
  const carePatientName = document.getElementById("care-patient-name");
  const carePatientSub = document.getElementById("care-patient-sub");
  const guestCard = document.getElementById("care-guest-card");
  const questionnaireEl = document.getElementById("care-questionnaire");

  if (user) {
    const initials = user.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "P";
    if (triggerLabel) triggerLabel.textContent = user.name;
    if (dropdownAvatar) dropdownAvatar.textContent = initials;
    if (dropdownUserName) dropdownUserName.textContent = user.name;
    if (dropdownUserMeta) dropdownUserMeta.textContent = `Age: ${user.age || "—"} • Aadhaar Verified`;
    if (dropdownUserAddr) dropdownUserAddr.textContent = user.address || "Address verified";

    if (careAvatar) careAvatar.textContent = initials;
    if (carePatientName) carePatientName.textContent = user.name;
    if (carePatientSub) carePatientSub.textContent = `Age: ${user.age || "—"} | DOB: ${user.dob || "—"} | ${user.address || "Aadhaar Verified"}`;
    if (guestCard) guestCard.hidden = true;
  } else {
    if (triggerLabel) triggerLabel.textContent = "Guest";
    if (patientBanner) patientBanner.hidden = true;
    if (questionnaireEl) questionnaireEl.hidden = true;
    if (guestCard) guestCard.hidden = false;
  }

  // Dropdown toggle
  if (trigger) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!userDropdown) return;
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isExpanded));
      userDropdown.hidden = isExpanded;
    });
  }

  document.addEventListener("click", (e) => {
    if (userDropdown && !userDropdown.hidden && !e.target.closest("#auth-container")) {
      userDropdown.hidden = true;
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }
  });

  // Switch Account: redirect to index.html with action parameter
  if (dropdownSwitchBtn) {
    dropdownSwitchBtn.addEventListener("click", () => {
      window.location.href = "index.html?action=login";
    });
  }

  // Logout
  if (dropdownLogoutBtn) {
    dropdownLogoutBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      window.location.href = "index.html";
    });
  }
})();

/* ---------------------------------------------------------------------
   3. CARE QUESTIONNAIRE & SUMMARY DASHBOARD
   --------------------------------------------------------------------- */
(function careAssessment() {
  const CARE_KEY = "carebridge_care_profile";

  const questionnaireEl = document.getElementById("care-questionnaire");
  const summaryEl = document.getElementById("care-summary");
  const form = document.getElementById("care-form");
  const nextBtn = document.getElementById("care-next-btn");
  const nextLabel = document.getElementById("care-next-label");
  const backBtn = document.getElementById("care-back-btn");
  const progressFill = document.getElementById("care-progress-fill");
  const progressLabel = document.getElementById("care-progress-label");
  const progressCategory = document.getElementById("care-progress-category");
  const editBtn = document.getElementById("care-edit-btn");
  const printBtn = document.getElementById("care-print-btn");

  if (!questionnaireEl || !summaryEl || !form) return;

  const STEPS = [
    {
      category: "Medical History",
      title: "Reason for Visit",
      desc: "Tell us what brought you in and when your symptoms began.",
      fields: [
        { key: "main_complaint", label: "Main complaint — What brought you to the hospital?", type: "textarea", placeholder: "e.g., Severe knee pain, persistent cough, high blood pressure checkup..." },
        { key: "onset", label: "When did this start?", type: "text", placeholder: "e.g., 3 days ago, about two weeks ago, gradual over 6 months..." },
      ],
    },
    {
      category: "Medical History",
      title: "Past Illnesses & Surgeries",
      desc: "Previous health conditions and surgical procedures.",
      fields: [
        {
          key: "previous_illnesses",
          label: "Previous illnesses — Have you been diagnosed with any of these?",
          type: "checkgrid",
          options: ["Diabetes", "Hypertension (High BP)", "Heart disease", "Asthma / Respiratory", "Stroke", "Kidney disease", "Thyroid disorder", "None of these"],
        },
        { key: "previous_illnesses_other", label: "Other diagnosed conditions (optional)", type: "text", placeholder: "e.g., Arthritis, Acid reflux..." },
        { key: "previous_surgeries", label: "Previous surgeries or hospitalizations", type: "textarea", placeholder: "e.g., Knee replacement in 2021, appendectomy in 1998, none..." },
      ],
    },
    {
      category: "Medical History",
      title: "Current Medications & Allergies",
      desc: "Exact medicines you take and any adverse reactions.",
      fields: [
        { key: "current_medications", label: "Current medications — including dosage and frequency", type: "textarea", placeholder: "e.g., Metformin 500mg twice daily after meals, Amlodipine 5mg once in the morning..." },
        { key: "drug_allergies", label: "Drug allergies (medicines that cause rash, swelling, or severe reaction)", type: "textarea", placeholder: "e.g., Penicillin (causes hives), Sulfa drugs, None known..." },
      ],
    },
    {
      category: "Medical History",
      title: "Family Medical History",
      desc: "Important health conditions in your biological parents, siblings, or grandparents.",
      fields: [
        { key: "family_history", label: "Family history of important diseases", type: "textarea", placeholder: "e.g., Father had heart disease at age 60; Mother had Type 2 Diabetes; No known hereditary conditions..." },
      ],
    },
    {
      category: "General Health & Lifestyle",
      title: "Mobility & Fall Assessment",
      desc: "How comfortably you move and recent physical stability.",
      fields: [
        {
          key: "mobility",
          label: "Mobility — Can you walk independently?",
          type: "radio",
          options: ["Yes, fully independently", "With a walking stick or cane", "With a walker / rollator", "With physical help from another person", "Wheelchair bound"],
        },
        {
          key: "falls_recent",
          label: "Falls — Any falls recently?",
          type: "radio",
          options: ["No falls in past year", "Yes, 1 fall in last 6 months", "Yes, multiple falls in last 6 months"],
        },
        { key: "falls_details", label: "Fall details or injuries, if any (optional)", type: "text", placeholder: "e.g., Slipped on bathroom wet floor last month, no fracture..." },
      ],
    },
    {
      category: "General Health & Lifestyle",
      title: "Cognition, Senses & Sleep",
      desc: "Daily mental clarity, sensory abilities, and restful sleep.",
      fields: [
        {
          key: "memory_cognition",
          label: "Memory / Cognition — Any forgetfulness or confusion?",
          type: "radio",
          options: ["No concerns — clear memory", "Occasional mild forgetfulness", "Frequent confusion or difficulty recalling recent events"],
        },
        {
          key: "hearing_vision",
          label: "Hearing and vision problems",
          type: "checkgrid",
          options: ["Hearing difficulty / Uses hearing aid", "Vision difficulty / Uses glasses", "Cataract history", "Neither — normal senses"],
        },
        { key: "sleep", label: "Sleep patterns & quality", type: "textarea", placeholder: "e.g., Sleeps 6-7 hours peacefully, or wakes up frequently with insomnia..." },
      ],
    },
    {
      category: "General Health & Lifestyle",
      title: "Nutrition, Elimination & Daily Activities",
      desc: "Everyday bodily functions and self-care independence.",
      fields: [
        { key: "appetite_diet", label: "Appetite and diet", type: "textarea", placeholder: "e.g., Normal appetite, vegetarian diet, low-salt diet for blood pressure..." },
        { key: "urination_bowel", label: "Urination and bowel movements (any pain, urgency, or irregularities?)", type: "textarea", placeholder: "e.g., Normal regular bowel habits, mild urinary urgency at night..." },
        {
          key: "adls",
          label: "Activities of Daily Living (ADLs) — Do you need assistance with any of these?",
          type: "checkgrid",
          options: ["Bathing", "Dressing", "Eating", "Using the toilet", "Transferring in/out of bed", "None — 100% independent"],
        },
      ],
    },
    {
      category: "General Health & Lifestyle",
      title: "Social Support & Habits",
      desc: "Household assistance and personal lifestyle habits.",
      fields: [
        { key: "social_support", label: "Social support — Who helps you at home?", type: "text", placeholder: "e.g., Lives with spouse and adult daughter, full-time caregiver, lives independently..." },
        {
          key: "smoking",
          label: "Smoking history",
          type: "radio",
          options: ["Never smoked", "Former smoker (quit)", "Current smoker"],
        },
        {
          key: "alcohol",
          label: "Alcohol consumption",
          type: "radio",
          options: ["Never", "Occasional / Social", "Regular"],
        },
        { key: "tobacco_other", label: "Other tobacco / substance use (optional)", type: "text", placeholder: "e.g., Chewing tobacco, None..." },
      ],
    },
  ];

  let currentStep = 0;
  let answers = {};

  function loadProfile() {
    try { return JSON.parse(localStorage.getItem(CARE_KEY) || "null"); }
    catch { return null; }
  }
  function saveProfile(data) {
    const record = { answers: data, submittedAt: new Date().toISOString() };
    localStorage.setItem(CARE_KEY, JSON.stringify(record));
  }

  function fieldHTML(field) {
    const val = answers[field.key];
    if (field.type === "textarea") {
      return `
        <div class="care-field">
          <label for="f-${field.key}">${field.label}</label>
          <textarea id="f-${field.key}" name="${field.key}" placeholder="${field.placeholder || ''}">${val || ""}</textarea>
        </div>`;
    }
    if (field.type === "text") {
      return `
        <div class="care-field">
          <label for="f-${field.key}">${field.label}</label>
          <input type="text" id="f-${field.key}" name="${field.key}" value="${val || ""}" placeholder="${field.placeholder || ''}" />
        </div>`;
    }
    if (field.type === "checkgrid") {
      const selected = Array.isArray(val) ? val : [];
      const boxes = field.options.map((opt) => `
        <label class="care-check">
          <input type="checkbox" name="${field.key}" value="${opt}" ${selected.includes(opt) ? "checked" : ""} />
          <span>${opt}</span>
        </label>`).join("");
      return `
        <fieldset class="care-field">
          <legend>${field.label}</legend>
          <div class="care-checkgrid">${boxes}</div>
        </fieldset>`;
    }
    if (field.type === "radio") {
      const radios = field.options.map((opt) => `
        <label>
          <input type="radio" name="${field.key}" value="${opt}" ${val === opt ? "checked" : ""} />
          <span>${opt}</span>
        </label>`).join("");
      return `
        <fieldset class="care-field">
          <legend>${field.label}</legend>
          <div class="care-radiorow">${radios}</div>
        </fieldset>`;
    }
    return "";
  }

  function renderStep() {
    const step = STEPS[currentStep];
    form.innerHTML = `
      <h3 class="care-step__title">${step.title}</h3>
      <p class="care-step__desc">${step.desc}</p>
      ${step.fields.map(fieldHTML).join("")}
    `;

    progressFill.style.width = `${((currentStep + 1) / STEPS.length) * 100}%`;
    progressLabel.textContent = `Step ${currentStep + 1} of ${STEPS.length}`;
    if (progressCategory) progressCategory.textContent = step.category;

    backBtn.disabled = currentStep === 0;
    if (nextLabel) {
      nextLabel.textContent = currentStep === STEPS.length - 1 ? "Submit & Generate Summary ✓" : "Next Step →";
    }
  }

  function collectStepAnswers() {
    const step = STEPS[currentStep];
    step.fields.forEach((field) => {
      if (field.type === "checkgrid") {
        answers[field.key] = Array.from(form.querySelectorAll(`input[name="${field.key}"]:checked`)).map((el) => el.value);
      } else if (field.type === "radio") {
        const checked = form.querySelector(`input[name="${field.key}"]:checked`);
        answers[field.key] = checked ? checked.value : "";
      } else {
        const el = form.querySelector(`[name="${field.key}"]`);
        answers[field.key] = el ? el.value.trim() : "";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    collectStepAnswers();
    if (currentStep < STEPS.length - 1) {
      currentStep += 1;
      renderStep();
      form.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      saveProfile(answers);
      renderSummary(answers);
      questionnaireEl.hidden = true;
      summaryEl.hidden = false;
      summaryEl.scrollIntoView({ behavior: "smooth" });
    }
  });

  backBtn.addEventListener("click", () => {
    collectStepAnswers();
    if (currentStep > 0) {
      currentStep -= 1;
      renderStep();
      form.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  function fmt(val) {
    if (Array.isArray(val)) return val.length ? val.join(", ") : "None reported";
    return val && String(val).trim() ? val : "None reported";
  }

  function renderSummary(data) {
    const timestampEl = document.getElementById("care-summary-timestamp");
    const profile = loadProfile();
    if (timestampEl) {
      const dateStr = profile && profile.submittedAt ? new Date(profile.submittedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : new Date().toLocaleDateString();
      timestampEl.textContent = `Generated on ${dateStr} • Ready for clinical consultation`;
    }

    const cards = [
      {
        title: "1. Reason for Visit",
        icon: "🩺",
        items: [
          { label: "Main complaint", value: data.main_complaint },
          { label: "Onset / Duration", value: data.onset },
        ],
      },
      {
        title: "2. Medical & Surgical History",
        icon: "📋",
        items: [
          { label: "Previous illnesses", value: [...(data.previous_illnesses || []), data.previous_illnesses_other].filter(Boolean) },
          { label: "Previous surgeries / hospitalizations", value: data.previous_surgeries },
        ],
      },
      {
        title: "3. Medications & Allergies",
        icon: "💊",
        items: [
          { label: "Current medications", value: data.current_medications },
          { label: "Drug allergies", value: data.drug_allergies, isAllergy: true },
        ],
      },
      {
        title: "4. Family History",
        icon: "🧬",
        items: [
          { label: "Hereditary diseases", value: data.family_history },
        ],
      },
      {
        title: "5. Mobility & Fall Safety",
        icon: "🚶",
        items: [
          { label: "Walking ability", value: data.mobility },
          { label: "Recent falls", value: data.falls_recent },
          { label: "Fall details", value: data.falls_details },
        ],
      },
      {
        title: "6. Cognition, Senses & Sleep",
        icon: "🧠",
        items: [
          { label: "Memory / Cognition", value: data.memory_cognition },
          { label: "Hearing & Vision", value: data.hearing_vision },
          { label: "Sleep quality", value: data.sleep },
        ],
      },
      {
        title: "7. Nutrition & Daily Activities (ADLs)",
        icon: "🍽️",
        items: [
          { label: "Appetite & diet", value: data.appetite_diet },
          { label: "Elimination changes", value: data.urination_bowel },
          { label: "Assistance needed with", value: data.adls },
        ],
      },
      {
        title: "8. Support & Social Habits",
        icon: "🏡",
        items: [
          { label: "Care support at home", value: data.social_support },
          { label: "Smoking history", value: data.smoking },
          { label: "Alcohol use", value: data.alcohol },
          { label: "Other tobacco", value: data.tobacco_other },
        ],
      },
    ];

    const container = document.getElementById("care-summary-content");
    if (!container) return;

    container.innerHTML = cards.map((card) => `
      <div class="care-summary-card">
        <h4 class="care-summary-card__title">
          <span>${card.icon}</span> ${card.title}
        </h4>
        <dl>
          ${card.items.map((item) => `
            <div class="care-summary-item ${item.isAllergy && item.value && item.value.toLowerCase() !== 'none known' && item.value.toLowerCase() !== 'none' ? 'allergy-alert' : ''}">
              <dt>${item.label}</dt>
              <dd>${fmt(item.value)}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    `).join("");
  }

  // Edit Answers
  if (editBtn) {
    editBtn.addEventListener("click", () => {
      currentStep = 0;
      const profile = loadProfile();
      answers = profile ? { ...profile.answers } : {};
      renderStep();
      summaryEl.hidden = true;
      questionnaireEl.hidden = false;
      questionnaireEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Print PDF
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Initialize Page State
  const profile = loadProfile();
  if (profile && profile.answers) {
    renderSummary(profile.answers);
    questionnaireEl.hidden = true;
    summaryEl.hidden = false;
  } else {
    answers = {};
    currentStep = 0;
    renderStep();
    questionnaireEl.hidden = false;
    summaryEl.hidden = true;
  }
})();
