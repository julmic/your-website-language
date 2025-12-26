# Guide d'utilisation - Sveltia CMS pour Arkadhya

## 1. Accéder au panneau d'administration

1. Allez sur `https://votre-site.com/admin/`
2. Connectez-vous avec votre compte GitHub
3. Vous accédez au tableau de bord

## 2. Gérer les articles de blog

### Créer un nouvel article
1. Cliquez sur "Articles de Blog" dans le menu
2. Cliquez sur "Nouveau Article"
3. Remplissez les champs :
   - **Titre** : Le titre de l'article
   - **Slug** : L'URL (ex: `mon-article`)
   - **Date** : Date de publication
   - **Catégorie** : Choisir dans la liste
   - **Image** : Uploader une image principale
   - **Résumé** : Court texte pour les listes
   - **Contenu** : L'article complet (éditeur Markdown)
4. Cliquez sur "Publier"

### Modifier un article existant
1. Cliquez sur l'article dans la liste
2. Modifiez les champs souhaités
3. Cliquez sur "Publier"

## 3. Gérer les massages

### Modifier un massage
1. Cliquez sur "Massages" dans le menu
2. Sélectionnez le massage à modifier
3. Vous pouvez modifier :
   - Nom et description
   - Image
   - Liste des bienfaits
   - Tarifs (durée et prix)
   - FAQ
   - Témoignages
4. Cliquez sur "Publier"

### Ajouter un nouveau massage
1. Cliquez sur "Nouveau Massage"
2. Remplissez tous les champs requis
3. Cliquez sur "Publier"

## 4. Gérer les cures

### Modifier les tarifs d'une cure
1. Cliquez sur "Cures" dans le menu
2. Sélectionnez la cure
3. Modifiez les champs de prix :
   - **Prix affiché** : Le texte affiché (ex: "240€/jour")
   - **Prix par jour** : Le montant numérique
   - **Durées** : Les différentes options
4. Cliquez sur "Publier"

## 5. Gérer les pages

### Modifier le texte d'une page
1. Cliquez sur "Pages" dans le menu
2. Sélectionnez la page (Accueil, À propos, Contact)
3. Modifiez les textes
4. Cliquez sur "Publier"

## 6. Gérer les médias

### Uploader une image
1. Lors de l'édition d'un contenu, cliquez sur le champ image
2. Cliquez sur "Choisir un fichier" ou glissez-déposez
3. L'image est automatiquement uploadée

### Bonnes pratiques pour les images
- **Format recommandé** : WebP ou JPEG
- **Taille maximale** : 2 Mo
- **Dimensions recommandées** :
  - Images blog : 1200 x 630 px
  - Images massages/cures : 800 x 600 px

## 7. Publication et déploiement

Après chaque modification :
1. Cliquez sur "Publier"
2. La modification est enregistrée sur GitHub
3. Le site est automatiquement reconstruit
4. En 2-3 minutes, les changements sont en ligne

## 8. Configuration initiale (une seule fois)

### Paramètres GitHub à configurer

Dans votre dépôt GitHub > Settings > Secrets > Actions, ajoutez :

| Secret | Description |
|--------|-------------|
| `FTP_SERVER` | Adresse FTP Hostinger (ex: ftp.votre-domaine.com) |
| `FTP_USERNAME` | Nom d'utilisateur FTP |
| `FTP_PASSWORD` | Mot de passe FTP |
| `FTP_SERVER_DIR` | Dossier de destination (ex: /public_html/) |

### Créer une OAuth App GitHub

1. Allez sur https://github.com/settings/developers
2. Cliquez sur "New OAuth App"
3. Remplissez :
   - Application name: `Arkadhya CMS`
   - Homepage URL: `https://votre-site.com`
   - Authorization callback URL: `https://votre-site.com/admin/`
4. Notez le Client ID généré

## Support

En cas de problème, contactez votre développeur ou consultez la documentation Sveltia CMS.
