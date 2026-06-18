# Cercle de parole — PWA

Chronomètre de parole pour cercles de groupe (4–10 personnes).

## Déploiement sur GitHub Pages (gratuit, en 5 minutes)

### 1. Créer un compte GitHub
→ https://github.com/signup (gratuit)

### 2. Créer un nouveau dépôt
- Cliquer sur **New repository**
- Nom : `cercle-parole`
- Cocher **Public**
- Cliquer **Create repository**

### 3. Uploader les fichiers
Dans le dépôt créé, cliquer **uploading an existing file** et glisser-déposer :
- `index.html`
- `manifest.json`
- `sw.js`
- le dossier `icons/` (avec icon-192.png et icon-512.png)

Cliquer **Commit changes**.

### 4. Activer GitHub Pages
- Aller dans **Settings** → **Pages**
- Source : **Deploy from a branch** → branche **main** → dossier **/ (root)**
- Cliquer **Save**

Après 1–2 minutes, l'app est disponible à :
`https://VOTRE_NOM.github.io/cercle-parole/`

---

## Installation sur Android (S23)

1. Ouvrir Chrome sur le S23
2. Aller à l'URL ci-dessus
3. Chrome affichera une bannière **"Ajouter à l'écran d'accueil"** — taper Installer
4. L'app apparaît comme une vraie application native

## Installation sur iPhone

1. Ouvrir Safari
2. Aller à l'URL
3. Taper le bouton Partager → **Sur l'écran d'accueil**

## Partager avec d'autres

Il suffit d'envoyer l'URL par SMS ou email.
Chaque personne peut l'installer en un tap depuis son téléphone.

---

## Fonctionnement

- Le **maître du temps** pose le téléphone au centre de la table
- Il appuie sur **Démarrer** quand une personne commence à parler
- Un **bip d'alerte** retentit 15 s avant la fin
- À la fin des 3 min, un bip discret mais persistant signale le dépassement
- Le maître appuie sur **Terminer** → 1 min de silence automatique
- Puis le chrono se remet à zéro pour la personne suivante

Tous les paramètres (durées, volume, type de bip) sont modifiables dans les réglages.
