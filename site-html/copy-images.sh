#!/bin/bash
# Script pour copier les images du projet React vers le site HTML statique

echo "Copie des images..."

# Créer les dossiers de destination
mkdir -p site-html/assets/images/massages
mkdir -p site-html/assets/images/cures
mkdir -p site-html/assets/images/about
mkdir -p site-html/assets/images/blog
mkdir -p site-html/assets/images/philosophie
mkdir -p site-html/assets/images/certifications
mkdir -p site-html/assets/images/cuisine
mkdir -p site-html/assets/images/galerie

# Copier les images
cp -r src/assets/massages/* site-html/assets/images/massages/ 2>/dev/null || echo "Pas d'images massages"
cp -r src/assets/cures/* site-html/assets/images/cures/ 2>/dev/null || echo "Pas d'images cures"
cp -r src/assets/about/* site-html/assets/images/about/ 2>/dev/null || echo "Pas d'images about"
cp -r src/assets/blog/* site-html/assets/images/blog/ 2>/dev/null || echo "Pas d'images blog"
cp -r src/assets/philosophie/* site-html/assets/images/philosophie/ 2>/dev/null || echo "Pas d'images philosophie"
cp -r src/assets/certifications/* site-html/assets/images/certifications/ 2>/dev/null || echo "Pas d'images certifications"
cp -r src/assets/cuisine/* site-html/assets/images/cuisine/ 2>/dev/null || echo "Pas d'images cuisine"
cp -r src/assets/galerie/* site-html/assets/images/galerie/ 2>/dev/null || echo "Pas d'images galerie"

# Copier le logo et favicon
cp src/assets/logo-arkadhya.webp site-html/assets/images/ 2>/dev/null || echo "Pas de logo"
cp public/favicon.ico site-html/assets/images/ 2>/dev/null || echo "Pas de favicon"

echo "Copie terminée !"
echo ""
echo "Images à placer manuellement dans site-html/assets/images/ :"
echo "- logo-arkadhya.webp"
echo "- favicon.ico"
echo "- waf-logo.webp"
echo "- indian-state-logo.webp"
