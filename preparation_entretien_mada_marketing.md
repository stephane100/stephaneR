# Préparation entretien – Mada Marketing
## Builder IA & Automatisation

---

## 🎯 Pitch personnel (1-2 minutes)

> "Je suis Stephane RAKOTONIRINA, développeur full stack avec +7 ans d'expérience. Ces 2 dernières années, je me suis spécialisé dans deux domaines à fort impact business : **la création d'agents IA** et **l'automatisation de processus**.
>
> Concrètement, je construis des systèmes qui font gagner du temps et de l'argent aux entreprises : workflows n8n qui automatisent le SEO, agents GPT-4o qui répondent aux clients 24/7, pipelines de données qui transforment des heures de travail manuel en quelques minutes.
>
> Aujourd'hui chez Bourbon Digital, je travaille au quotidien avec Vertex AI, Gemini et Google Cloud. En parallèle, j'ai publié l'app Evolya sur l'App Store et j'accompagne des clients en freelance.
>
> Ce qui me motive dans votre poste : c'est exactement mon ADN — builder, orienté résultats, exécution rapide, mesure d'impact."

---

## 🔧 Questions techniques probables et réponses

### 1. **"Comment tu construis un agent IA from scratch ?"**

**Réponse structurée :**
1. **Définir l'objectif business** — quel problème résout l'agent ? Quel ROI attendu ?
2. **Choisir le modèle** — GPT-4o (raisonnement complexe), Gemini (multimodal), Claude (longs contextes), modèles locaux (privacy)
3. **Architecture** :
   - **Prompt engineering** — system prompt clair, few-shot examples
   - **RAG** (Retrieval Augmented Generation) avec vector DB (Pinecone, Weaviate, ChromaDB) pour la connaissance métier
   - **Tools/Function calling** — l'agent peut appeler des APIs (CRM, calendrier, base de données)
   - **Memory** — historique conversationnel, mémoire long-terme
4. **Framework** — LangChain, LangGraph, ou direct via API selon la complexité
5. **Garde-fous** — validation des outputs, limites de coût, fallbacks
6. **Déploiement** — API REST ou intégration (Slack, WhatsApp, web)
7. **Monitoring** — logs, coûts tokens, taux de succès, feedback utilisateur

### 2. **"Quelle différence entre Make, Zapier et n8n ? Lequel tu choisis et pourquoi ?"**

| Outil | Forces | Faiblesses |
|---|---|---|
| **Zapier** | Le plus simple, énormément d'intégrations | Cher à l'échelle, peu flexible |
| **Make** | Visuel, scénarios complexes, moins cher | Courbe d'apprentissage |
| **n8n** | Open-source, self-hosted, custom code, gratuit en illimité | Setup technique requis |

**Mon choix par défaut : n8n** parce que :
- Auto-hébergeable → coût marginal nul à l'échelle
- Custom code (JavaScript/Python) quand les nodes ne suffisent pas
- API REST pour intégrer dans des systèmes existants
- Pas de vendor lock-in

**Mais** : si le client veut zéro maintenance et peu de volume → Zapier. Si scénarios visuels mid-complexity → Make.

### 3. **"Donne un exemple d'automatisation que tu as livrée"**

**Méthode STAR :**

- **Situation** : Client SEO passait 6h/semaine à compiler des rapports manuels (positions Google, backlinks, trafic).
- **Tâche** : Automatiser entièrement le reporting SEO hebdomadaire.
- **Action** :
  - Workflow n8n connecté à Google Search Console API, SerpAPI, Ahrefs API
  - Cron déclenché chaque lundi 8h
  - Données collectées → Google Sheets → template de rapport généré automatiquement
  - Notification Slack avec les KPIs clés et alertes si baisse > 10%
- **Résultat** :
  - **6h économisées chaque semaine** → 24h/mois → ~300h/an
  - **Rapports plus fiables** (zéro erreur humaine)
  - **Réactivité** : alerte instantanée en cas de chute de positions

### 4. **"Comment tu mesures le ROI d'une automatisation ?"**

**Formule simple :**
```
ROI = (Valeur générée - Coût) / Coût × 100
```

**Valeur générée** = Heures économisées × Coût horaire + Revenus additionnels
**Coût** = Temps de dev + Outils (n8n, APIs, modèles IA) + Maintenance

**Exemple concret** :
- Client paie 2000€ pour automatiser son SEO
- Économise 24h/mois × 30€/h = 720€/mois
- ROI sur 1 an : (720 × 12 - 2000) / 2000 = **332%**

### 5. **"Comment tu gères les coûts API IA ?"**

- **Caching** — mettre en cache les réponses identiques
- **Modèle adapté** — GPT-4o-mini pour 90% des cas, GPT-4o pour les cas complexes
- **Compression de prompts** — virer le superflu, utiliser des abréviations
- **Streaming** — meilleure UX, possibilité de couper en cours
- **Rate limiting** — éviter les abus
- **Budget alerts** — alertes Cloud à 50%, 80%, 100% du budget mensuel

### 6. **"Comment éviter les hallucinations d'un LLM ?"**

- **RAG** — forcer le modèle à se baser sur des documents fournis
- **Prompt strict** — "Si tu ne sais pas, dis 'Je ne sais pas'. Ne jamais inventer."
- **Temperature basse** (0 à 0.3) pour les tâches factuelles
- **Validation post-réponse** — vérifier que la réponse contient bien les sources
- **Function calling** — au lieu de générer du texte, l'agent appelle une vraie API
- **Human in the loop** pour les décisions critiques

### 7. **"GPT vs Gemini vs Claude — lequel et pourquoi ?"**

- **GPT-4o** : meilleur en code, function calling, écosystème mature → **par défaut**
- **Gemini** : meilleur prix/perf, multimodal natif, intégration Google Cloud
- **Claude** : long contexte (200K tokens), meilleure rédaction, plus prudent

**Ma règle** : je teste les 3 sur un sous-ensemble de cas réels et je mesure (qualité, latence, coût). Pas de fanboyisme.

### 8. **"Tu as déjà utilisé LangChain / LangGraph ?"**

**Oui** — LangChain pour les chains simples et le RAG, LangGraph pour les agents avec état complexe et boucles de raisonnement.

**Mais attention** : LangChain est puissant mais parfois over-engineered. Pour un agent simple, j'utilise directement l'API OpenAI/Gemini avec function calling — c'est plus rapide et plus maintenable.

### 9. **"Comment tu sécurises un agent IA en production ?"**

- **API keys** dans des variables d'environnement / secrets manager (jamais dans le code)
- **Rate limiting** par utilisateur
- **Input validation** — détecter prompt injection
- **Output filtering** — pas de fuite de données sensibles
- **Logs anonymisés** pour le debugging
- **Sandbox** pour le code généré par l'IA (jamais d'`eval()` direct)

### 10. **"Stack technique idéale pour ce poste ?"**

- **Automatisation** : n8n (self-hosted), Make pour le rapide
- **IA** : OpenAI GPT-4o + Gemini en backup, LangChain quand nécessaire
- **Backend** : Python (FastAPI) ou Node.js
- **Database** : PostgreSQL + Pinecone/ChromaDB pour vectors
- **Cloud** : Google Cloud (Cloud Run, BigQuery, Vertex AI)
- **Monitoring** : Sentry, n8n logs, custom dashboards
- **CI/CD** : GitHub Actions

---

## 💼 Questions business

### "Comment tu identifies un processus à automatiser ?"

3 critères :
1. **Répétitif** (au moins hebdo)
2. **Règles claires** (pas de jugement humain)
3. **Volume × Temps** = grosse économie

Je commence par interviewer les équipes : "Qu'est-ce qui te fait perdre du temps ?"

### "Comment tu priorises tes projets ?"

Matrice **Impact / Effort** :
- High impact, low effort → **Quick wins** (à faire maintenant)
- High impact, high effort → **Big bets** (à planifier)
- Low impact → **Ne pas faire**

### "Tu travailles seul ou en équipe ?"

Je sais faire les deux. Solo, je vais vite et je livre. En équipe, je documente, je communique en daily, je code review.

---

## ❓ Questions intelligentes à leur poser

1. **"Quels sont les 3 processus les plus chronophages aujourd'hui dans l'équipe ? J'aimerais savoir où je pourrais avoir le plus d'impact dès la première semaine."**
2. **"Comment vous mesurez le succès des automatisations déjà en place ?"**
3. **"Quel est votre stack actuelle côté outils ? (CRM, marketing, data)"**
4. **"Vous avez déjà des agents IA en production ou je serais le premier à les mettre en place ?"**
5. **"Quelle est la philosophie côté build vs buy ? (n8n self-hosted vs Zapier par exemple)"**
6. **"Comment se structure la rémunération bonus performance ? Quels KPIs ?"**
7. **"Quelle est la roadmap des 6 prochains mois ? Comment je peux y contribuer ?"**

---

## ⚠️ Pièges à éviter

- **Ne pas mentionner Bourbon Digital comme contrainte** — dis simplement "je peux m'organiser"
- **Pas de jargon excessif** — ils sont business + tech, parle ROI et impact, pas seulement code
- **Pas de monologue** — laisse-les poser des questions
- **Si tu ne sais pas** — dis-le honnêtement et explique comment tu apprendrais

---

## 🎬 Démo possible

Si on te demande de montrer quelque chose en live, prépare :
1. **Ton portfolio** : https://stephane100.github.io/stephaneR/
2. **Un screenshot de workflow n8n** (si tu en as un présentable)
3. **Une démo rapide d'agent IA** sur ton ordi (script Python avec OpenAI qui fait quelque chose d'utile)

---

**Bonne chance ! Tu as le profil idéal pour ce poste.** 🚀
