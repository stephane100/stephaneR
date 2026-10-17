# Audit complet du portfolio — Objectif prospection (automatisation & agents IA)

_Date de l'audit : octobre 2026_
_Objectif : transformer le portfolio en outil de prospection pour vendre des services d'automatisation et de création d'agents IA._

---

## 1. Ce qui est déjà bon (à conserver)

### Section `#automation` — la meilleure arme de prospection
- 5 cas d'usage concrets : relances clients (cabinet comptable), qualification de prospects (immobilier), assistant IA pour emails, création automatique de devis, synchronisation CRM.
- Chaque cas dispose d'une modale détaillée : problème, avant/après, ROI chiffré (heures gagnées/semaine et par mois, % de réduction d'erreurs, délai de retour sur investissement), technologies utilisées.
- Données centralisées dans `automation-cases.js` — facile d'ajouter de nouveaux cas.

### Services vedettes
- 2 cartes "service-featured" en haut de la section Services : **Création d'Agents IA** et **Automatisation & Workflows**, chacune avec liste de bénéfices, tags techniques et CTA.

### Preuve sociale
- 4 témoignages dont 2 directement liés à l'offre : Bourbon Digital (intégration IA & Cloud, La Réunion) et un client freelance (automatisation SEO & workflows n8n).

### Réassurance
- Section "Mon Processus" en 4 étapes (Échange & Devis → Conception → Développement → Livraison & Support).
- CTA "Demander un audit gratuit" en fin de section automation.

### SEO / Partage
- Meta title, description, keywords, Open Graph et Twitter Card déjà orientés "agents IA, automatisation".
- Site déployé : `https://stephane100.github.io/stephaneR/` (sitemap + robots.txt présents).

### Contact multi-canal
- Email (mailto avec objet pré-rempli), WhatsApp (message pré-rempli), CV.

---

## 2. Problèmes qui freinent la conversion

### 🔴 Bloquants

#### 2.1 Hero trop générique
- Badge : "Développeur Full Stack & Spécialiste IA"
- Titre : "Je transforme vos idées en solutions digitales performantes"
- **Problème** : un prospect qui veut automatiser doit comprendre en 3 secondes que *ce prestataire fait gagner du temps à mon entreprise grâce à l'IA*. Le message actuel est orienté "développeur", pas "résultat business".
- Le CTA secondaire "Voir mes réalisations" mène vers une section dominée par les apps mobiles (Evolya, Klear, Looqs) → dilution du message.
- **Recommandation** : reformuler le hero autour du bénéfice ("Automatisez vos tâches répétitives et gagnez des heures chaque semaine"), CTA principal "Audit gratuit", CTA secondaire "Voir les cas d'usage" → `#automation`.

#### 2.2 Statistiques du hero non alignées avec l'offre
- Stats actuelles : 7+ ans d'expérience, 15+ projets livrés, 10+ clients, 3 apps sur l'App Store.
- **Problème** : "3 apps sur l'App Store" ne parle pas à un dirigeant qui veut automatiser ses processus.
- **Recommandation** : remplacer/compléter par des métriques orientées gains : "15 h+ économisées par semaine", "5+ workflows en production", "ROI en quelques semaines".

#### 2.3 Placeholder visible dans la modale automation
- Le bloc "Workflow" affiche : *"Capture d'écran du workflow n8n à ajouter ici"* avec un bouton désactivé.
- **Problème** : devant un prospect, un placeholder fait brouillon et casse la crédibilité.
- **Recommandation** : soit ajouter de vraies captures n8n (`useCase.image` existe déjà dans les données), soit supprimer le bloc de `openAutomationModal()` dans `script.js` (lignes ~463-478).

#### 2.4 Code mort — champ `image` inutilisé
- Chaque cas dans `automation-cases.js` définit `image: "image/automation/xxx.svg"` mais :
  - le dossier `image/automation/` n'existe pas ;
  - `script.js` n'utilise jamais `useCase.image`.
- **Recommandation** : nettoyer le champ, ou l'exploiter pour afficher de vrais visuels dans les cartes/modales.

### 🟠 Importants

#### 2.5 L'offre "audit gratuit" est enterrée
- Une seule occurrence, tout en bas de la section automation.
- **Problème** : c'est le lead magnet idéal pour la prospection — il doit être visible partout.
- **Recommandation** : bouton "Audit gratuit" dans la navbar, dans le hero, sur les cartes de services, et message WhatsApp pré-rempli dédié.

#### 2.6 Aucune FAQ / levée d'objections
- Questions qui bloquent un prospect avant le premier contact :
  - Combien ça coûte ?
  - En combien de temps c'est en place ?
  - Qui maintient l'automatisation ensuite ?
  - Mes données sont-elles en sécurité (RGPD) ?
  - Est-ce compatible avec mes outils actuels (Excel, Gmail, mon CRM) ?
  - Que se passe-t-il si l'IA se trompe ?
- **Recommandation** : ajouter une mini-FAQ (5-6 questions) dans la section automation, juste avant le CTA final.

#### 2.7 Pas d'ordre de grandeur / packaging
- Un prospect B2B veut savoir dans quelle fourchette il se situe avant de contacter.
- **Recommandation** : proposer un packaging en 3 offres sans prix ou "à partir de" :
  1. **Audit gratuit** — analyse des processus automatisables (30 min)
  2. **Automatisation clé en main** — un workflow concret livré et documenté
  3. **Accompagnement mensuel** — maintenance, évolutions, nouvelles automatisations

#### 2.8 Pas de formulaire ni de prise de RDV
- Contact actuel : mailto + WhatsApp + CV uniquement.
- **Problème** : en prospection, plus le premier pas est simple, plus ça convertit. "Voir mon CV" est peu pertinent pour un prospect.
- **Recommandation** : CTA WhatsApp pré-rempli par contexte ("Bonjour Stephane, je veux automatiser…"), ou ajouter un mini-formulaire (Formspree) / un lien Calendly. Déprioriser la box CV dans la section Contact.

### 🟡 Bonus / finitions

- `data-aos="fade-up"` présent sur les cartes générées alors que la lib AOS n'est pas chargée — attribut mort (inoffensif, à nettoyer).
- `og:image` = photo de profil. Pour le partage du lien en prospection (LinkedIn, WhatsApp, email), une image OG dédiée avec la promesse ("J'automatise vos processus avec l'IA") serait plus percutante.
- Les cas d'usage sont présentés honnêtement comme des exemples de solutions — bien. Renforcer en reliant au cas réel déjà en production (automatisation SEO "en production pour plusieurs clients" existe dans les Projets — le mentionner dans la section automation).
- Ordre des sections actuel : Services → Automation → Projets → À propos → Processus → Témoignages → Contact. Cohérent. Option : remonter les témoignages liés à l'automatisation près de la section concernée.

---

## 3. Plan d'action priorisé

| # | Action | Fichiers concernés | Impact |
|---|--------|--------------------|--------|
| 1 | Refaire le hero : promesse orientée gain + CTA "Audit gratuit" + stats orientées résultats | `index.html` (hero), `style.css` | 🔴 Fort |
| 2 | Corriger le bloc Workflow de la modale (supprimer ou vraies captures n8n) | `script.js` | 🔴 Fort |
| 3 | "Audit gratuit" dans la nav + WhatsApp pré-rempli + CTA contextuels | `index.html`, `style.css` | 🔴 Fort |
| 4 | Ajouter une mini-FAQ dans la section automation | `index.html`, `style.css` | 🟠 Moyen |
| 5 | Packaging en 3 offres (audit / clé en main / accompagnement) | `index.html`, `style.css` | 🟠 Moyen |
| 6 | Nettoyer le code mort (`image`, `data-aos`) + ajuster la box CV | `automation-cases.js`, `script.js`, `index.html` | 🟡 Faible |
| 7 | Image OG dédiée à la prospection | `index.html` + nouvelle image | 🟡 Faible |

---

## 4. Questions à trancher avant implémentation

- [ ] Captures d'écran de workflows n8n réels disponibles ? (sinon on supprime le bloc)
- [ ] Afficher des prix indicatifs ("à partir de X €") ou rester sur "devis sur mesure" ?
- [ ] CTA principal privilégié : WhatsApp, email/devis, ou prise de RDV (Calendly) ?
- [ ] Cible principale : PME locales, agences/startups, ou généraliste ?
