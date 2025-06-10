export const languages = {
  es: { name: "Español", flag: "🇪🇸" },
  en: { name: "English", flag: "🇺🇸" },
  it: { name: "Italiano", flag: "🇮🇹" },
  pt: { name: "Português", flag: "🇵🇹" },
  fr: { name: "Français", flag: "🇫🇷" },
  mt: { name: "Malti", flag: "🇲🇹" },
} as const

export type Language = keyof typeof languages

export const translations = {
  es: {
    // Navigation
    dashboard: "Panel Principal",
    feed: "Muro",
    reels: "Reels",
    chat: "Chat",
    students: "Estudiantes",
    validations: "Validaciones",
    partnerCompanies: "Empresas Asociadas",
    opportunities: "Oportunidades",
    postJobs: "Publicar Roles",
    candidates: "Candidatos",
    universities: "Casas de Estudios",
    validateExperience: "Validar Experiencias",

    // Common
    search: "Buscar",
    filter: "Filtrar",
    save: "Guardar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Eliminar",
    view: "Ver",
    contact: "Contactar",
    loading: "Cargando...",

    // Auth
    login: "Iniciar Sesión",
    register: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    name: "Nombre",
    userType: "Tipo de Usuario",
    student: "Estudiante",
    university: "Casa de Estudios",
    company: "Empresa",

    // Dashboard
    welcome: "Bienvenido a UniLink",
    recentActivity: "Actividad Reciente",
    notifications: "Notificaciones",

    // Students
    studentsManagement: "Gestión de Estudiantes",
    totalStudents: "Total Estudiantes",
    activeStudents: "Estudiantes Activos",
    pendingValidations: "Validaciones Pendientes",

    // Jobs
    jobManagement: "Gestión de Ofertas Laborales",
    newJob: "Nueva Oferta",
    activeJobs: "Ofertas Activas",
    totalCandidates: "Total Candidatos",

    // Validations
    experienceValidation: "Validación de Experiencias",
    pendingRequests: "Solicitudes Pendientes",
    completedValidations: "Validaciones Completadas",

    // Universities
    educationalInstitutions: "Casas de Estudios Asociadas",
    totalInstitutions: "Total Instituciones",
    activePartnerships: "Asociaciones Activas",
    studentsAvailable: "Estudiantes Disponibles",
  },
  en: {
    // Navigation
    dashboard: "Dashboard",
    feed: "Feed",
    reels: "Reels",
    chat: "Chat",
    students: "Students",
    validations: "Validations",
    partnerCompanies: "Partner Companies",
    opportunities: "Opportunities",
    postJobs: "Post Jobs",
    candidates: "Candidates",
    universities: "Educational Institutions",
    validateExperience: "Validate Experience",

    // Common
    search: "Search",
    filter: "Filter",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    contact: "Contact",
    loading: "Loading...",

    // Auth
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    name: "Name",
    userType: "User Type",
    student: "Student",
    university: "Educational Institution",
    company: "Company",

    // Dashboard
    welcome: "Welcome to UniLink",
    recentActivity: "Recent Activity",
    notifications: "Notifications",

    // Students
    studentsManagement: "Students Management",
    totalStudents: "Total Students",
    activeStudents: "Active Students",
    pendingValidations: "Pending Validations",

    // Jobs
    jobManagement: "Job Management",
    newJob: "New Job",
    activeJobs: "Active Jobs",
    totalCandidates: "Total Candidates",

    // Validations
    experienceValidation: "Experience Validation",
    pendingRequests: "Pending Requests",
    completedValidations: "Completed Validations",

    // Universities
    educationalInstitutions: "Educational Institutions",
    totalInstitutions: "Total Institutions",
    activePartnerships: "Active Partnerships",
    studentsAvailable: "Students Available",
  },
  it: {
    // Navigation
    dashboard: "Dashboard",
    feed: "Feed",
    reels: "Reels",
    chat: "Chat",
    students: "Studenti",
    validations: "Validazioni",
    partnerCompanies: "Aziende Partner",
    opportunities: "Opportunità",
    postJobs: "Pubblica Lavori",
    candidates: "Candidati",
    universities: "Istituzioni Educative",
    validateExperience: "Valida Esperienza",

    // Common
    search: "Cerca",
    filter: "Filtra",
    save: "Salva",
    cancel: "Annulla",
    edit: "Modifica",
    delete: "Elimina",
    view: "Visualizza",
    contact: "Contatta",
    loading: "Caricamento...",

    // Auth
    login: "Accedi",
    register: "Registrati",
    email: "Email",
    password: "Password",
    name: "Nome",
    userType: "Tipo Utente",
    student: "Studente",
    university: "Istituzione Educativa",
    company: "Azienda",

    // Dashboard
    welcome: "Benvenuto su UniLink",
    recentActivity: "Attività Recente",
    notifications: "Notifiche",

    // Students
    studentsManagement: "Gestione Studenti",
    totalStudents: "Totale Studenti",
    activeStudents: "Studenti Attivi",
    pendingValidations: "Validazioni in Sospeso",

    // Jobs
    jobManagement: "Gestione Lavori",
    newJob: "Nuovo Lavoro",
    activeJobs: "Lavori Attivi",
    totalCandidates: "Totale Candidati",

    // Validations
    experienceValidation: "Validazione Esperienza",
    pendingRequests: "Richieste in Sospeso",
    completedValidations: "Validazioni Completate",

    // Universities
    educationalInstitutions: "Istituzioni Educative",
    totalInstitutions: "Totale Istituzioni",
    activePartnerships: "Partnership Attive",
    studentsAvailable: "Studenti Disponibili",
  },
  pt: {
    // Navigation
    dashboard: "Painel",
    feed: "Feed",
    reels: "Reels",
    chat: "Chat",
    students: "Estudantes",
    validations: "Validações",
    partnerCompanies: "Empresas Parceiras",
    opportunities: "Oportunidades",
    postJobs: "Publicar Vagas",
    candidates: "Candidatos",
    universities: "Instituições de Ensino",
    validateExperience: "Validar Experiência",

    // Common
    search: "Buscar",
    filter: "Filtrar",
    save: "Salvar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Excluir",
    view: "Ver",
    contact: "Contatar",
    loading: "Carregando...",

    // Auth
    login: "Entrar",
    register: "Registrar",
    email: "Email",
    password: "Senha",
    name: "Nome",
    userType: "Tipo de Usuário",
    student: "Estudante",
    university: "Instituição de Ensino",
    company: "Empresa",

    // Dashboard
    welcome: "Bem-vindo ao UniLink",
    recentActivity: "Atividade Recente",
    notifications: "Notificações",

    // Students
    studentsManagement: "Gestão de Estudantes",
    totalStudents: "Total de Estudantes",
    activeStudents: "Estudantes Ativos",
    pendingValidations: "Validações Pendentes",

    // Jobs
    jobManagement: "Gestão de Vagas",
    newJob: "Nova Vaga",
    activeJobs: "Vagas Ativas",
    totalCandidates: "Total de Candidatos",

    // Validations
    experienceValidation: "Validação de Experiência",
    pendingRequests: "Solicitações Pendentes",
    completedValidations: "Validações Concluídas",

    // Universities
    educationalInstitutions: "Instituições de Ensino",
    totalInstitutions: "Total de Instituições",
    activePartnerships: "Parcerias Ativas",
    studentsAvailable: "Estudantes Disponíveis",
  },
  fr: {
    // Navigation
    dashboard: "Tableau de Bord",
    feed: "Fil d'Actualité",
    reels: "Reels",
    chat: "Chat",
    students: "Étudiants",
    validations: "Validations",
    partnerCompanies: "Entreprises Partenaires",
    opportunities: "Opportunités",
    postJobs: "Publier Emplois",
    candidates: "Candidats",
    universities: "Établissements d'Enseignement",
    validateExperience: "Valider Expérience",

    // Common
    search: "Rechercher",
    filter: "Filtrer",
    save: "Sauvegarder",
    cancel: "Annuler",
    edit: "Modifier",
    delete: "Supprimer",
    view: "Voir",
    contact: "Contacter",
    loading: "Chargement...",

    // Auth
    login: "Se Connecter",
    register: "S'Inscrire",
    email: "Email",
    password: "Mot de Passe",
    name: "Nom",
    userType: "Type d'Utilisateur",
    student: "Étudiant",
    university: "Établissement d'Enseignement",
    company: "Entreprise",

    // Dashboard
    welcome: "Bienvenue sur UniLink",
    recentActivity: "Activité Récente",
    notifications: "Notifications",

    // Students
    studentsManagement: "Gestion des Étudiants",
    totalStudents: "Total Étudiants",
    activeStudents: "Étudiants Actifs",
    pendingValidations: "Validations en Attente",

    // Jobs
    jobManagement: "Gestion des Emplois",
    newJob: "Nouvel Emploi",
    activeJobs: "Emplois Actifs",
    totalCandidates: "Total Candidats",

    // Validations
    experienceValidation: "Validation d'Expérience",
    pendingRequests: "Demandes en Attente",
    completedValidations: "Validations Terminées",

    // Universities
    educationalInstitutions: "Établissements d'Enseignement",
    totalInstitutions: "Total Établissements",
    activePartnerships: "Partenariats Actifs",
    studentsAvailable: "Étudiants Disponibles",
  },
  mt: {
    // Navigation
    dashboard: "Dashboard",
    feed: "Feed",
    reels: "Reels",
    chat: "Chat",
    students: "Studenti",
    validations: "Validazzjonijiet",
    partnerCompanies: "Kumpaniji Sħab",
    opportunities: "Opportunitajiet",
    postJobs: "Ippubblika Xogħol",
    candidates: "Kandidati",
    universities: "Istituzzjonijiet Edukattivi",
    validateExperience: "Valida Esperjenza",

    // Common
    search: "Fittex",
    filter: "Iffiltra",
    save: "Ħażen",
    cancel: "Ikkanċella",
    edit: "Editja",
    delete: "Ħassar",
    view: "Ara",
    contact: "Ikkuntattja",
    loading: "Qed jitgħabba...",

    // Auth
    login: "Idħol",
    register: "Irreġistra",
    email: "Email",
    password: "Password",
    name: "Isem",
    userType: "Tip ta' Utent",
    student: "Student",
    university: "Istituzzjoni Edukattiva",
    company: "Kumpanija",

    // Dashboard
    welcome: "Merħba f'UniLink",
    recentActivity: "Attività Riċenti",
    notifications: "Notifiki",

    // Students
    studentsManagement: "Ġestjoni tal-Istudenti",
    totalStudents: "Total Studenti",
    activeStudents: "Studenti Attivi",
    pendingValidations: "Validazzjonijiet Pendenti",

    // Jobs
    jobManagement: "Ġestjoni tax-Xogħol",
    newJob: "Xogħol Ġdid",
    activeJobs: "Xogħlijiet Attivi",
    totalCandidates: "Total Kandidati",

    // Validations
    experienceValidation: "Validazzjoni tal-Esperjenza",
    pendingRequests: "Talbiet Pendenti",
    completedValidations: "Validazzjonijiet Kompluti",

    // Universities
    educationalInstitutions: "Istituzzjonijiet Edukattivi",
    totalInstitutions: "Total Istituzzjonijiet",
    activePartnerships: "Sħubijiet Attivi",
    studentsAvailable: "Studenti Disponibbli",
  },
}

export function useTranslation(lang: Language = "es") {
  return {
    t: (key: keyof typeof translations.es) => {
      return translations[lang][key] || translations.es[key] || key
    },
    lang,
  }
}
