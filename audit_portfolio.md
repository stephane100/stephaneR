# Audit complet du portfolio — Objectif prospection (automatisation & agents IA)

_Date de l'audit : octobre 2026_
_Site : https://stephane100.github.io/stephaneR/_
_Objectif : transformer le portfolio en outil de prospection pour vendre des services d'automatisation et de création d'agents IA._

---

## 1. Vue d'ensemble

| Élément | État | Note |
|---------|------|------|
| Positionnement "automatisation / agents IA" | Présent mais dilué | 🟠 |
| Preuve de compétence (cas d'usage, ROI) | Très bon | 🟢 |
| CTA / lead magnet ("audit gratuit") | Enterré | 🔴 |
| Preuve sociale | Correcte | 🟢 |
| Levée d'objections (FAQ, prix, délais) | Absente | 🔴 |
| Finitions techniques (placeholders, code mort) | À corriger | 🟠 |

**Verdict :** le fond est solide (cas d'usage concrets, ROI chiffré, témoignages). Le problème principal est le **message** : le site parle encore "développeur full stack" alors que la cible de prospection cherche "quelqu'un qui me fait gagner du temps avec l'IA".

---

## 2. Ce qui est déjà bon (à conserver)

### 2.1 Section `#automation` — la meilleure arme de prospection
- 5 cas d'usage concrets : relances clients (cabinet comptable), qualification de prospects (immobilier), assistant IA pour emails, création automatique de devis, synchronisation CRM.
- Chaque cas dispose d'une modale détaillée : problème → avant/après → ROI chiffré (heures/semaine et par mois, % réduction d'erreurs, payback) → technologies.
- Données centralisées dans `automation-cases.js` — facile d'ajouter un cas par prospect rencontré.
- Les cas sont présentés comme des exemples de solutions (honnête — pas de fausses références clients).

### 2.2 Services vedettes
- 2 cartes `service-featured` en haut de la section Services : **Création d'Agents IA** et **Automatisation & Workflows**, avec bénéfices, tags tech et CTA.

### 2.3 Preuve sociale
- 4 témoignages dont 2 directement liés à l'offre : Bourbon Digital (IA & Cloud, La Réunion) et client freelance (automatisation SEO & n8n).

### 2.4 Réassurance
- Section "Mon Processus" en 4 étapes (Échange & Devis → Conception → Développement → Livraison & Support).
- CTA "Demander un audit gratuit" en fin de section automation.
- Valeurs : code propre, communication transparente, délais respectés, expertise IA.

### 2.5 SEO / Partage
- Meta title, description, keywords, Open Graph, Twitter Card orientés "agents IA, automatisation".
- `sitemap.xml` + `robots.txt` présents, site déployé.

### 2.6 Contact multi-canal
- Email (mailto avec objet pré-rempli), WhatsApp (message pré-rempli), CV.

---

## 3. Problèmes qui freinent la conversion

### 🔴 Bloquants

#### 3.1 Hero trop générique — ne vend pas l'automatisation
**Actuel :**
> Badge : "Développeur Full Stack & Spécialiste IA"
> Titre : "Je transforme vos idées en solutions digitales performantes"
> Description : "Applications web sur mesure, apps mobiles iOS/Android, automatisation intelligente et intégration IA…"
> CTA : "Demander un devis gratuit" + "Voir mes réalisations"

**Problème :** un prospect doit comprendre en 3 secondes que *ce prestataire fait gagner du temps à mon entreprise grâce à l'IA*. Le message actuel est orienté "développeur", pas "résultat business". Le CTA secondaire mène vers des projets dominés par les apps mobiles → dilution.

**Proposition de reformulation :**
> Badge : "Spécialiste Automatisation & Agents IA"
> Titre : "Vos tâches répétitives, automatisées par l'IA"
> Description : "Je conçois des agents IA et des workflows sur mesure qui font gagner des heures à vos équipes chaque semaine : relances clients, emails, devis, qualification de prospects, synchronisation d'outils."
> CTA : "Audit gratuit de mes processus" + "Voir les cas concrets" → `#automation`

#### 3.2 Statistiques du hero non alignées avec l'offre
**Actuel :** 7+ ans d'expérience · 15+ projets livrés · 10+ clients · 3 apps sur l'App Store.

**Problème :** "3 apps sur l'App Store" ne parle pas à un dirigeant qui veut automatiser. Garder l'expérience, mais ajouter des métriques de résultat.

**Proposition :**
- 7+ ans d'expérience
- 15+ projets livrés
- **15 h+ économisées / semaine** (par workflow type)
- **ROI en quelques semaines**

#### 3.3 Placeholder visible dans la modale automation
**Problème :** le bloc "Workflow" de `openAutomationModal()` (`script.js` ~lignes 463-478) affiche *"Capture d'écran du workflow n8n à ajouter ici"* avec un bouton désactivé.

**Impact :** devant un prospect, un placeholder visible casse la crédibilité — c'est précisément l'endroit où il se dit "montre-moi".

**Options :**
- (a) Ajouter de vraies captures n8n par cas (le champ `useCase.image` existe déjà dans les données, prêt à être câblé)
- (b) Supprimer le bloc du template tant qu'il n'y a pas de visuels

#### 3.4 Code mort — champ `image` inutilisé
- Chaque cas dans `automation-cases.js` définit `image: "image/automation/xxx.svg"`.
- Le dossier `image/automation/` n'existe pas ; `script.js` ne lit jamais `useCase.image`.
- **Action :** soit câbler ce champ (voir 3.3a), soit le supprimer.

---

### 🟠 Importants

#### 3.5 L'offre "audit gratuit" est enterrée
- Une seule occurrence, tout en bas de la section automation.
- C'est le lead magnet idéal en prospection : gratuit, sans engagement, à forte valeur perçue.
- **Action :** le rendre visible partout :
  - Bouton "Audit gratuit" dans la **navbar** (à droite des liens)
  - CTA principal du **hero**
  - Sur les 2 cartes de services vedettes
  - Message **WhatsApp pré-rempli** dédié : "Bonjour Stephane, je souhaite un audit gratuit de mes processus."

#### 3.6 Aucune FAQ / levée d'objections
Questions qui bloquent un prospect avant le premier contact :
1. Combien coûte une automatisation ?
2. En combien de temps est-elle en place ?
3. Qui la maintient ensuite ? Que se passe-t-il si elle casse ?
4. Mes données sont-elles en sécurité (RGPD) ?
5. Est-ce compatible avec mes outils actuels (Excel, Gmail, mon CRM) ?
6. Que se passe-t-il si l'IA se trompe ?

**Action :** mini-FAQ de 5-6 questions en `<details>` dans la section automation, juste avant le CTA final.

#### 3.7 Pas d'ordre de grandeur / packaging
Un prospect B2B veut situer le budget avant de contacter.

**Proposition — 3 offres :**
| Offre | Contenu | Prix |
|-------|---------|------|
| **Audit gratuit** | Analyse de vos processus automatisables, 30 min d'échange, rapport des gains estimés | Gratuit |
| **Automatisation clé en main** | Un workflow concret livré, testé et documenté + formation de vos équipes | Sur devis (ou "à partir de X €") |
| **Accompagnement mensuel** | Maintenance, supervision, évolutions et nouvelles automatisations | Forfait mensuel |

#### 3.8 Pas de formulaire ni de prise de RDV
- Contact actuel : mailto + WhatsApp + box "Voir mon CV".
- "Voir mon CV" est peu pertinent pour un prospect en prospection — il veut un échange, pas un CV.
- **Actions possibles (au choix) :**
  - WhatsApp pré-rempli contextuel par cas d'usage ("je veux automatiser mes relances clients")
  - Mini-formulaire (Formspree / Netlify Forms — le site est statique)
  - Lien Calendly pour réserver l'audit directement
- Déprioriser ou retirer la box CV de la section Contact.

---

### 🟡 Bonus / finitions

- `data-aos="fade-up"` sur les cartes générées dynamiquement alors que la lib AOS n'est pas chargée → attribut mort, à retirer.
- `og:image` = photo de profil. Pour le partage du lien en prospection (LinkedIn, WhatsApp, email), une image OG dédiée avec la promesse ("J'automatise vos processus avec l'IA — audit gratuit") serait plus percutante.
- Relier les cas d'usage génériques au cas **réel** déjà en production : "Automatisation SEO — en production pour plusieurs clients" (présent dans Projets). Une mention "Déjà déployé en production" crédibilise toute la section.
- Ordre des sections : Services → Automation → Projets → À propos → Processus → Témoignages → Contact. Cohérent. Option : dupliquer les 2 témoignages automation près de la section concernée (bandeau de preuve).

---

## 4. Plan d'action priorisé

| # | Action | Fichiers | Impact | Effort |
|---|--------|----------|--------|--------|
| 1 | Hero : promesse orientée gain + CTA "Audit gratuit" + stats résultats | `index.html`, `style.css` | 🔴 Fort | Moyen |
| 2 | Modale : supprimer le bloc Workflow placeholder (ou câbler de vraies captures) | `script.js` | 🔴 Fort | Faible |
| 3 | "Audit gratuit" dans la nav + WhatsApp pré-rempli + CTA contextuels | `index.html`, `style.css` | 🔴 Fort | Faible |
| 4 | Mini-FAQ (5-6 questions) dans la section automation | `index.html`, `style.css` | 🟠 Moyen | Moyen |
| 5 | Packaging 3 offres (audit / clé en main / accompagnement) | `index.html`, `style.css` | 🟠 Moyen | Moyen |
| 6 | Nettoyage : champ `image` mort, `data-aos`, box CV | `automation-cases.js`, `script.js`, `index.html` | 🟡 Faible | Faible |
| 7 | Image OG dédiée prospection | `index.html` + nouvelle image | 🟡 Faible | Moyen |

---

## 5. Questions à trancher avant implémentation

- [ ] Captures d'écran de workflows n8n réels disponibles ? (sinon on supprime le bloc — action 2)
- [ ] Afficher des prix indicatifs ("à partir de X €") ou rester sur "devis sur mesure" ?
- [ ] CTA principal privilégié : WhatsApp, email/devis, ou prise de RDV (Calendly) ?
- [ ] Cible principale : PME locales, agences/startups, ou généraliste ?
- [ ] Le hero doit-il être 100 % automation, ou garder une mention du dev web/mobile en secondaire ?
