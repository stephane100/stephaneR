/**
 * Cas d'usage d'automatisation IA pour le portfolio
 * Source de données unique pour la section "Solutions d'automatisation IA"
 * Ajoutez ou modifiez un cas directement dans ce tableau.
 */
const AUTOMATION_CASES = [
    {
        id: "relances-clients",
        title: "Automatisation des relances clients",
        sector: "Cabinet comptable",
        shortDescription: "L'IA détecte, classe et relance automatiquement les documents manquants.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        problem: "Les collaborateurs du cabinet passent plusieurs heures par semaine à relancer manuellement les clients pour récupérer les documents comptables. Les emails sont oubliés, les fichiers arrivent désorganisés et les délais de traitement s'allongent.",
        before: [
            "Identification manuelle des dossiers incomplets",
            "Relances par email et téléphone répétées",
            "Classement des documents reçus un par un",
            "Suivi des pièces manquantes dans un fichier Excel"
        ],
        after: [
            "L'IA détecte automatiquement les documents reçus",
            "Classement automatique dans Google Drive",
            "Identification des pièces manquantes",
            "Envoi des relances personnalisées automatiquement"
        ],
        benefits: [
            "jusqu'à 15 h gagnées par semaine",
            "moins d'oublis",
            "traitement plus rapide"
        ],
        technologies: ["n8n", "OpenAI", "Gmail", "Google Drive"],
        roi: {
            timePerWeek: "15 h",
            timePerMonth: "60 h",
            errorReduction: "80 %",
            payback: "Quelques semaines"
        },
        image: "image/automation/relances-clients.svg"
    },
    {
        id: "qualification-prospects",
        title: "Qualification automatique des prospects",
        sector: "Immobilier",
        shortDescription: "Analyse, scoring et relance automatique des demandes en ligne.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
        problem: "Les demandes de prospects affluent par le site internet mais sont traitées manuellement. Les réponses sont tardives, les prospects sont mal qualifiés et les rendez-vous sont difficiles à planifier.",
        before: [
            "Lecture manuelle de chaque demande",
            "Saisie du prospect dans le CRM",
            "Envoi d'email de réponse standard",
            "Appel téléphonique pour fixer un rendez-vous"
        ],
        after: [
            "L'IA détecte le type de bien recherché",
            "Estimation du niveau d'intérêt",
            "Création automatique du prospect dans le CRM",
            "Email personnalisé + proposition de rendez-vous"
        ],
        benefits: [
            "réponse instantanée",
            "plus de prospects qualifiés",
            "moins de temps perdu"
        ],
        technologies: ["n8n", "OpenAI", "Hubspot", "Google Calendar"],
        roi: {
            timePerWeek: "12 h",
            timePerMonth: "48 h",
            errorReduction: "75 %",
            payback: "Quelques semaines"
        },
        image: "image/automation/qualification-prospects.svg"
    },
    {
        id: "assistant-emails",
        title: "Assistant IA pour emails",
        sector: "Tous secteurs",
        shortDescription: "Analyse, résumé et réponses proposées automatiquement pour chaque email.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
        problem: "La boîte mail est submergée de messages, certains importants passent à la trappe, et répondre à chaque demande prend des heures chaque jour.",
        before: [
            "Lecture manuelle de tous les emails",
            "Tri dans des dossiers ou étiquettes",
            "Rédaction de réponses à la main",
            "Oubli des échanges à relancer"
        ],
        after: [
            "Analyse automatique de chaque email",
            "Résumé et catégorisation en temps réel",
            "Proposition de réponse personnalisée",
            "Suivi des emails nécessitant une action"
        ],
        benefits: [
            "boîte mail organisée",
            "réponses plus rapides",
            "gain de temps quotidien"
        ],
        technologies: ["n8n", "OpenAI", "Gmail", "Slack"],
        roi: {
            timePerWeek: "10 h",
            timePerMonth: "40 h",
            errorReduction: "70 %",
            payback: "Quelques semaines"
        },
        image: "image/automation/assistant-emails.svg"
    },
    {
        id: "creation-devis",
        title: "Création automatique de devis",
        sector: "Services / B2B",
        shortDescription: "Génération et envoi de devis depuis un formulaire ou un email.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        problem: "Chaque demande de devis exige de copier les informations, calculer les montants, formater un document PDF et l'envoyer manuellement. Le processus est long et source d'erreurs.",
        before: [
            "Recopie des informations client",
            "Calcul manuel du prix",
            "Création du PDF de devis",
            "Envoi par email et suivi"
        ],
        after: [
            "Extraction automatique des besoins",
            "Calcul du montant selon la grille tarifaire",
            "Génération du PDF de devis",
            "Envoi automatique au client"
        ],
        benefits: [
            "devis générés en secondes",
            "moins d'erreurs de calcul",
            "meilleure réactivité commerciale"
        ],
        technologies: ["n8n", "OpenAI", "Gmail", "Google Drive"],
        roi: {
            timePerWeek: "8 h",
            timePerMonth: "32 h",
            errorReduction: "85 %",
            payback: "Quelques semaines"
        },
        image: "image/automation/creation-devis.svg"
    },
    {
        id: "synchronisation-crm",
        title: "Synchronisation CRM",
        sector: "Tous secteurs",
        shortDescription: "Synchronisation automatique entre CRM, Google Sheets, Notion, Slack et Gmail.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
        problem: "Les données client sont dispersées entre plusieurs outils. Les informations sont dupliquées, désynchronisées et les équipes perdent du temps à vérifier quelle version est la bonne.",
        before: [
            "Saisie des mêmes données dans plusieurs outils",
            "Mise à jour manuelle des fiches clients",
            "Vérification des données entre collègues",
            "Alertes et notifications manuelles"
        ],
        after: [
            "Synchronisation automatique CRM ↔ Sheets/Notion",
            "Mise à jour en temps réel des fiches",
            "Notifications Slack et Gmail automatiques",
            "Tableau de bord unifié et fiable"
        ],
        benefits: [
            "données toujours à jour",
            "moins de saisie répétitive",
            "collaboration fluidifiée"
        ],
        technologies: ["n8n", "Hubspot", "Airtable", "Notion", "Slack", "Gmail"],
        roi: {
            timePerWeek: "6 h",
            timePerMonth: "24 h",
            errorReduction: "90 %",
            payback: "Quelques semaines"
        },
        image: "image/automation/synchronisation-crm.svg"
    }
];

// Logos / labels des technologies utilisées pour l'affichage dans les modals
const AUTOMATION_TECHNOLOGIES = {
    n8n: { name: "n8n", color: "#ff6d5a" },
    OpenAI: { name: "OpenAI", color: "#10a37f" },
    Gmail: { name: "Gmail", color: "#ea4335" },
    "Google Drive": { name: "Google Drive", color: "#4285f4" },
    "Google Calendar": { name: "Google Calendar", color: "#4285f4" },
    Hubspot: { name: "Hubspot", color: "#ff7a59" },
    Slack: { name: "Slack", color: "#4a154b" },
    WhatsApp: { name: "WhatsApp", color: "#25d366" },
    Airtable: { name: "Airtable", color: "#20c9e0" },
    Notion: { name: "Notion", color: "#ffffff" }
};
