# Klear – Plan anti-acné

> Application iOS de skincare personnalisé par intelligence artificielle

---

## Présentation

**Klear** analyse la peau de l'utilisateur par IA et génère un programme skincare 100 % personnalisé. En quelques minutes, l'app crée une routine matin et soir adaptée au type de peau, aux habitudes de vie et aux objectifs de l'utilisateur.

Disponible sur l'**App Store** — catégorie Forme et santé.

---

## Fonctionnalités principales

### Scan IA de la peau
Analyse du selfie par intelligence artificielle pour détecter le type de peau, les imperfections (acné, points noirs, pores dilatés, rougeurs, taches) et leur sévérité.

### Programme personnalisé
Routine matin et soir générée selon le profil cutané, les habitudes alimentaires, le niveau de stress et le sommeil de l'utilisateur.

### Score cutané
Indicateur de santé cutané sur 100, mis à jour à chaque scan hebdomadaire pour visualiser la progression.

### Suivi de progression
Graphiques d'évolution semaine après semaine avec historique des scores et des métriques (hydratation, sébum, inflammation).

### Coach IA quotidien
Conseils personnalisés basés sur le profil utilisateur, appuyés par des sources scientifiques (PubMed, AAD).

---

## Stack technique

| Domaine | Technologie |
|---|---|
| Langage | Swift 5 |
| Framework UI | SwiftUI |
| Architecture | MVVM + ObservableObject |
| Paiements | StoreKit 2 (natif Apple) |
| Analyse IA | OpenAI Vision API |
| Déploiement | Xcode, TestFlight, App Store Connect |
| Cible | iOS 16+ — iPhone |

---

## Modèle économique

Abonnement auto-renouvelable via Apple IAP :

- **Hebdomadaire** — 3,99 €/semaine
- **Mensuel** — 12,99 €/mois
- **Annuel** — 49,99 €/an *(soit 0,96 €/semaine)*

---

## Onboarding

Parcours d'onboarding en 15+ écrans :
1. Écran d'accueil
2. Questionnaire (type de peau, problèmes, habitudes)
3. Capture photo / analyse IA
4. Résultats avec score cutané
5. Paywall — déblocage du programme complet
6. Home avec routine, progression et coach

---

## Conformité App Store

- Disclaimer médical visible dans l'app et la description
- Sources scientifiques cliquables (PubMed, AAD)
- Liens EULA Apple + politique de confidentialité dans le paywall
- Déclaré non-dispositif médical dans App Store Connect

---

## Liens

- **App Store** : [Klear – Plan anti-acné](https://apps.apple.com/app/id6771456207)
- **Politique de confidentialité** : [stephane100.github.io/Klear_politique_confidentiality](https://stephane100.github.io/Klear_politique_confidentiality/)
