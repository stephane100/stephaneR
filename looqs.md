# Looqs — App d'analyse faciale par IA

> Application iOS native qui analyse le visage de l'utilisateur grâce à l'intelligence artificielle (GPT-4o Vision) et fournit des scores détaillés ainsi que des recommandations quotidiennes personnalisées pour s'améliorer.

---

## Informations générales

| | |
|---|---|
| **Nom** | Looqs |
| **Plateforme** | iOS (iPhone & iPad) |
| **Catégorie** | Lifestyle / Beauté & Santé |
| **Statut** | ✅ Publié sur l'App Store |
| **Modèle** | Freemium (App gratuite + abonnement Looqs Pro) |
| **Langue** | Français |
| **Cible** | Hommes & femmes 18-35 ans intéressés par le glow-up, le skincare, et l'auto-amélioration |

---

## Pitch

**Looqs** est ton coach beauté personnel basé sur l'IA. Prends un selfie, et notre intelligence artificielle analyse en détail ton visage (peau, symétrie, mâchoire, yeux, cheveux) pour te donner un score précis sur 100, ainsi que **6 recommandations actionnables chaque jour** adaptées à ton profil et tes objectifs.

**Promesse** : améliore-toi un peu chaque jour grâce à des conseils sur mesure générés par l'IA.

---

## Fonctionnalités clés

### Gratuit
- Onboarding personnalisé (objectifs, profil)
- Capture photo par caméra ou import galerie
- Analyse faciale IA (première analyse)
- Score global

### Premium (Looqs Pro — abonnement requis)
- ✨ **Analyses faciales illimitées**
- 📊 **Scores détaillés par catégorie** : peau, symétrie, mâchoire, yeux, cheveux
- 🎯 **6 recommandations quotidiennes personnalisées** générées par IA
- 📈 **Historique et suivi de progression** dans le temps
- 🔔 **Rappels quotidiens**
- 🎨 **Catégories variées** : skincare, exercices faciaux, nutrition, habitudes, style

### Tarification
- **Hebdomadaire** : 9,99 €/semaine
- **Annuel** : 39,99 €/an (≈ 0,77 €/semaine — économise 92%)

---

## Stack technique

### Frontend
- **Swift 5** + **SwiftUI** (architecture moderne, déclarative)
- **iOS 17+** (deployment target)
- **MVVM** (Model-View-ViewModel)
- **Combine** + `@AppStorage` pour la persistance locale
- Animations natives `.spring()` et transitions custom

### Services externes
- **OpenAI API** — GPT-4o Vision pour l'analyse faciale (image redimensionnée + base64 + prompt structuré)
- **RevenueCat** — Gestion des abonnements et entitlements (Looqs Pro)
- **StoreKit** — Achats in-app Apple natifs

### Architecture & qualité
- Séparation claire : `Views/`, `ViewModels/`, `Models/`, `Services/`
- Project setup via **XcodeGen** (`project.yml`) pour reproductibilité
- Gestion d'état centralisée via `AppState` (ObservableObject)
- Service `OpenAIService` avec retry automatique en cas d'échec
- Service `SubscriptionManager` avec sync RevenueCat

### Conformité & légal
- ✅ **RGPD compliant** (politique de confidentialité dédiée)
- ✅ **Consentement IA explicite** avant chaque envoi à OpenAI (fullscreen sheet détaillant données envoyées/destinataire/conservation)
- ✅ **Apple Guidelines validées** : 5.1.1 (Privacy), 5.1.2 (Data Use), 3.1.1 (In-App Purchase), 2.3.2 (Accurate Metadata)

---

## Parcours utilisateur (UX flow)

```
1. Splash & Welcome (animation)
   ↓
2. Onboarding (10 étapes)
   - Vision / Bénéfices / Trust
   - Prénom
   - Genre (optionnel)
   - Âge
   - Objectifs (multi-sélection)
   - Page Photo + consentement IA
   - Paywall avec essai
   - Résultat
   ↓
3. Home — bouton CTA "Analyser mon visage"
   ↓
4. Consentement IA (fullscreen sheet)
   ↓
5. Capture / Import photo
   ↓
6. Analyse IA (overlay loading)
   ↓
7. Résultats détaillés (scores + 6 recos quotidiennes)
   ↓
8. Historique & profil
```

---

## Identité visuelle

- **Style** : dark mode premium, accent doré/jaune, typographie moderne
- **Palette** : noir profond (#000), card gris foncé, accents `looqsAccent` (or), texte blanc/gris
- **Iconographie** : SF Symbols Apple (cohérence native iOS)
- **Animations** : spring naturelles, fades, scales, transitions fluides

---

## Points forts pour le portfolio

1. **Application réelle publiée sur l'App Store** (pas un side-project)
2. **Intégration IA de pointe** (OpenAI GPT-4o Vision) avec gestion d'erreurs et retry
3. **Monétisation fonctionnelle** via RevenueCat (subscriptions natives Apple)
4. **Conformité RGPD/Apple stricte** (consentement, privacy policy, transparence des données)
5. **Onboarding soigné** (10+ étapes animées) — taux de conversion optimisé
6. **Design system cohérent** (extensions custom, components réutilisables)
7. **Architecture scalable** — facile à étendre (Vision Pro déjà supporté)

---

## Métriques techniques

- **Lignes de code** : ~5 000+ Swift
- **Vues SwiftUI** : 30+
- **Temps de développement** : ~4 semaines (du prototype à l'App Store)
- **Compatibilité** : iPhone, iPad, Apple Vision Pro
- **Taille de l'app** : optimisée (< 20 MB)

---

## Liens

- 🌐 **Politique de confidentialité** : https://stephane100.github.io/looqs_politique_confidentiality/
- 📜 **Conditions d'utilisation** : https://stephane100.github.io/looqs_politique_confidentiality/terms-of-use.html
- 📱 **App Store** : *[Lien à compléter une fois la version finale publiée]*

---

## Captures d'écran à utiliser

À récupérer depuis le dossier App Store Connect ou les ressources design :
- Onboarding (welcome / objectifs / photo)
- Home avec bouton CTA principal
- Écran d'analyse en cours
- Résultats avec scores par catégorie
- Recommandations quotidiennes
- Paywall premium
- Historique / Progression

---

## Rôle

**Développeur iOS — Conception & développement complet**
- Architecture technique et choix de stack
- Développement SwiftUI from scratch
- Intégration API OpenAI + RevenueCat
- Design UI/UX (dark mode premium)
- Soumission App Store et gestion des reviews
- Conformité RGPD / Apple Guidelines
- Privacy policy et conditions d'utilisation

---

## Challenges techniques résolus

### 1. Optimisation des coûts API OpenAI
**Problème** : envoyer une photo 4K à GPT-4o Vision coûte cher et est lent.  
**Solution** : pipeline de pré-traitement custom — redimensionnement à 512px max + compression JPEG (qualité 0.5) avant encodage base64. Résultat : **~80% de réduction de coût et latence divisée par 3** sans perte de qualité d'analyse.

### 2. Réponses IA structurées et fiables
**Problème** : GPT-4o peut renvoyer du texte libre, difficile à parser dans une app native.  
**Solution** : prompt engineering avancé avec format JSON strict + retry automatique (2 tentatives) + validation côté client. Garantit une expérience utilisateur sans crash même si l'IA hallucine.

### 3. Conformité Apple App Store (cycle de reviews)
**Problème** : 4 rejets successifs sur des points de privacy, monétisation et metadata.  
**Solution** : refonte complète du flow de consentement (fullscreen sheet explicite avant chaque envoi à OpenAI), refonte privacy policy détaillée, remplacement du système de codes promo custom par l'API officielle Apple StoreKit. **Validation finale obtenue.**

### 4. Gestion des abonnements multi-tier
**Problème** : synchroniser RevenueCat, StoreKit et l'état UI sans incohérences.  
**Solution** : `SubscriptionManager` centralisé avec state observable + retry sur init si RevenueCat n'est pas encore configuré + entitlement check robuste (specific OR any active).

### 5. Onboarding optimisé conversion
**Problème** : payer après 1 simple analyse = friction trop forte.  
**Solution** : onboarding storytelling en 10 étapes (Welcome → Vision → Bénéfices → Trust → Profil → Photo → Résultat → Paywall) qui crée de l'engagement avant la demande d'achat. Chaque étape est animée et ultra-courte (< 5 secondes).

---

## Process de design

1. **Recherche** : analyse benchmarks (Umax, Looksmax, FaceApp) — identification des codes UX du segment "glow-up"
2. **Wireframes** : flow papier puis itération sur Figma
3. **Mood board** : dark premium + accents dorés (positionnement masculin/premium-mixed)
4. **Prototypage SwiftUI** : composants réutilisables (`GenderCard`, `ScoreCard`, `RecommendationCard`...)
5. **Itération** : tests sur device réel + ajustements micro-animations

---

## Apprentissages clés

- **Prompt engineering** : passer de réponses IA approximatives à des analyses utilisables en production
- **App Store review process** : comprendre les nuances des Guidelines (4.x, 3.1.1, 5.1.1, 5.1.2, 2.3.2)
- **Monétisation iOS** : maîtriser RevenueCat + StoreKit + Apple Offer Codes
- **RGPD by design** : intégrer le consentement utilisateur sans dégrader l'UX
- **Trade-offs perfs/qualité** : compresser intelligemment pour réduire coûts API sans perdre en pertinence

---

## Évolutions possibles (roadmap)

- 🌍 Internationalisation (anglais, espagnol, allemand)
- 📊 Dashboard analytics avancé (graphiques d'évolution sur 30/90 jours)
- 👥 Mode communauté (comparaison anonyme, leaderboard)
- 🏆 Système de gamification (badges, streaks)
- 🎥 Analyse vidéo (vs photo statique)
- 🤝 Partenariats avec marques skincare (recommandations produits)
- 🔔 Push notifications contextuelles (rappels personnalisés)
- ⌚ Companion Apple Watch (rappels recommandations quotidiennes)
