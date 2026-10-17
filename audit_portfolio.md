# Audit du portfolio

_Date : 17 octobre 2026_
_Site : https://stephane100.github.io/stephaneR/_
_Objectif : un portfolio complet, crédible et facile à parcourir._

---

## Verdict

Le contenu est riche : 3 apps publiées, des projets web, de l'IA et de l'automatisation, de l'expérience en entreprise. Ce qui limite l'ensemble, ce sont **l'organisation, quelques détails de crédibilité et des finitions techniques**. Rien à ajouter en volume pour l'instant.

---

## 🔴 À corriger en priorité

### 1. Stats affichées à « 0+ » sans JavaScript
Les compteurs du hero (`data-target`) affichent 0 si le JavaScript ne s'exécute pas : aperçu de lien, robots, connexion lente.
→ Mettre les vraies valeurs directement dans le HTML (`7`, `15`, `10`, `3`) et laisser le JS seulement animer.

### 2. Témoignage « Evolya – MVP App Store » = auto-témoignage
C'est un avis sur ton propre produit — un lecteur attentif le remarque et ça dessert la crédibilité de toute la section.
→ Le retirer ou le remplacer par un vrai client.
→ Les autres témoignages se limitent à des initiales (BD, SE, NG) : ajouter prénom, poste ou lien LinkedIn, avec l'accord des personnes.

### 3. « Déployé en production (CDI) » ambigu
Sur la carte Bourbon Digital, "(CDI)" est confus pour un portfolio freelance : est-ce un poste salarié ou une mission ?
→ Préciser le statut : "Mission en production" ou "Salarié, 2023–2025" avec les dates réelles.

### 4. Fiches projets déséquilibrées
Evolya, Klear et Looqs ont captures, stack, fonctionnalités et défis techniques. Automatisation SEO, Bourbon Digital, Nogae et E-commerce Tampons tiennent en 2 lignes.
→ Leur donner le même niveau de détail : contexte, rôle, stack, résultat concret, durée.

---

## 🟠 Important

### 5. Hiérarchie de la section Réalisations
Les 3 apps prennent presque tout l'espace (14 captures d'écran), les 4 autres projets sont écrasés en dessous.
Pistes :
- trier par date ou importance ;
- replier les galeries de captures (carrousel ou "voir plus" — le mécanisme `project-details` existe déjà) ;
- garder le filtre en place mais mieux l'exploiter.

### 6. Preuves vérifiables
Ajouter dès que possible : lien GitHub par projet si le code est public, dates de publication des apps, clients nommés avec accord.

### 7. Mentions légales et politique de confidentialité
Les apps en ont, pas le portfolio. Signe de sérieux attendu — et obligatoire si un formulaire de contact est ajouté un jour.

### 8. Looqs : « 4 rejets surmontés »
Le détail montre la persévérance, mais le chiffre brut dessert. Garder l'apprentissage technique (consentement, privacy policy) et retirer le compte des rejets.

### 9. Badge « Forte demande »
Sur la carte Automatisation — non justifié par un fait vérifiable. Le remplacer ou l'enlever.

### 10. Contact
- L'adresse Gmail personnelle fait moins professionnel qu'une adresse sur un domaine propre.
- Le texte "Décrivez-moi votre idée, recevez un devis gratuit" ne convient pas à un simple visiteur : ajouter une formulation neutre ("Me contacter").

### 11. Placeholder visible dans la modale automation
Le bloc "Workflow" affiche *"Capture d'écran du workflow n8n à ajouter ici"* avec un bouton désactivé.
→ Ajouter de vraies captures (le champ `useCase.image` existe déjà) ou supprimer le bloc dans `script.js`.

---

## 🟡 Finitions

- **Noms de fichiers** : les captures Evolya contiennent des espaces (`Simulator Screenshot - Iphone 15 Pro Max - …png`) → renommer en `evolya-1.png`, etc.
- **Poids des images** : vérifier la compression des PNG (WebP idéal) avec `loading="lazy"`.
- **Code mort** : champ `image` dans `automation-cases.js` jamais utilisé et fichiers `image/automation/*.svg` inexistants ; attribut `data-aos` présent alors qu'AOS n'est pas chargé.
- **SEO** : titre trop long (coupé dans Google), balise `keywords` ignorée, pas de données structurées.
- **Partage** : `og:image` = photo de profil → un visuel avec nom + titre serait plus lisible sur LinkedIn.
- **Accessibilité** : `alt` des captures génériques ("Evolya Screenshot 1"), vérifier le contraste du thème sombre.
- **Page CV** : confirmer que `cv.html` est à jour et cohérent avec le portfolio.

---

## ✅ À garder

- Les fiches détaillées des 3 apps (stack, fonctionnalités, défis techniques) : très bon niveau de détail.
- Les liens vers l'App Store et Google Play : meilleures preuves.
- Le processus en 4 étapes et la page de services.
- La structure en sections claire, avec ancres de navigation.

---

## Plan d'action

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Stats en dur dans le HTML (fix "0+") | 🔴 | Faible |
| 2 | Témoignages : retirer l'auto-témoignage, ajouter des noms | 🔴 | Faible |
| 3 | Clarifier "CDI" et badge "Forte demande" | 🔴 | Faible |
| 4 | Supprimer le placeholder "workflow n8n" de la modale | 🔴 | Faible |
| 5 | Fiches détaillées : SEO, Bourbon Digital, Nogae, E-commerce | 🔴 | Moyen |
| 6 | Réorganiser Réalisations (tri, galeries repliables) | 🟠 | Moyen |
| 7 | Mentions légales + politique de confidentialité | 🟠 | Faible |
| 8 | Contact : formulation neutre + adresse pro | � | Faible |
| 9 | Renommer/compresser les images, `alt` explicites | 🟡 | Faible |
| 10 | Nettoyage code mort (`image`, `data-aos`, "4 rejets") | 🟡 | Faible |
| 11 | SEO : titre court, données structurées, image OG | 🟡 | Moyen |

## Point de départ recommandé

**Actions 1 à 4** en premier (quick wins). Ensuite l'action 5 : pour chacun des 4 projets (Automatisation SEO, Bourbon Digital, Nogae, E-commerce Tampons), rassembler rôle, durée, stack et résultat concret — les fiches seront rédigées au même format qu'Evolya, Klear et Looqs.

## Questions à trancher

- [ ] Captures n8n réelles disponibles pour la modale ? (sinon suppression du bloc)
- [ ] Noms/témoignages : accords obtenus pour citer les clients ?
- [ ] Adresse email pro (domaine) disponible ou on garde Gmail ?
- [ ] Formulaire de contact prévu ? (conditionne les mentions légales)
