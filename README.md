# Librairie de Composants QC

Cette librairie fournit des composants personnalisés pour créer des alertes et des boutons stylisés dans vos applications web.

## Clonage du Repository et Installation des Packages Node.js

1. Clonez ce repository localement :
   ```bash
   git clone https://github.com/bourpie/designsystem.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd designsystem
   ```

3. Installez les dépendances Node.js :
   ```bash
   npm install
   ```

## Dépendances

Assurez-vous d'inclure les dépendances suivantes dans votre projet :

```html
<script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
```

## Installation

1. Clonez ce repository ou téléchargez-le localement.

2. Importez la feuille de style dans le répertoire dist de votre projet :
```html
<link rel="stylesheet" href="../dist/style.css">
```
3. Importez le fichier JavaScript de la librairie :
```html
<script src="../dist/qc-components.js"></script>
```

## Exemple d'utilisation

```html
<!DOCTYPE html>
<html lang="fr-CA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemple d'utilisation de la Librairie QC</title>
  <!-- Dépendances -->
  <script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../dist/style.css">
</head>
<body>
  <!-- Exemple d'alerte -->
  <qc-alerte message="Hello World" type="information" fermeture="oui"></qc-alerte>
  
  <!-- Exemple de bouton -->
  <qc-bouton label="Cliquez-moi" type="principal"></qc-bouton>

  <!-- Import du script de la librairie -->
  <script src="../dist/qc-components.js"></script>
</body>
</html>

```

## Composants disponibles

- **qc-alerte** : Utilisé pour afficher des alertes avec différents types (avertissement, information) et une option de fermeture.
  - Attributs : `message`, `type` (avertissement par défaut), `fermeture` (oui ou non).

- **qc-bouton** : Crée des boutons stylisés avec différents types (principal, secondaire, etc.).
  - Attributs : `label` (texte du bouton), `type` (principal par défaut).

Consultez les sources dans le répertoire `dist` pour personnaliser le style et le comportement des composants.

## Développement avec Storybook et Vite.js

Ce projet utilise Storybook et Vite.js pour le développement des composants.

### Storybook

Storybook est un outil de développement pour les composants UI. Pour démarrer Storybook, exécutez la commande suivante dans votre terminal :

```bash
npm run storybook
```

Pour plus d'informations sur Storybook, visitez [Storybook](https://storybook.js.org/).

### Vite.js

Vite.js est utilisé pour la construction rapide de projets web modernes en développement. 

Pour builder la librairie, utilisez la commande suivante :

```bash
npm run build
```


## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Auteur

- **Pierre Bougeois**
- GitHub : [bourpie](https://github.com/bourpie)

