import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Image, 
  Settings, 
  Upload, 
  Save, 
  LogIn,
  FolderOpen,
  Edit3,
  Plus,
  Trash2,
  Eye,
  Download,
  Printer
} from "lucide-react";

const GuideCMS = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Guide d'utilisation CMS - Arkadhya</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Print button - hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden flex gap-2">
        <Button onClick={handlePrint} className="bg-primary hover:bg-primary/90">
          <Printer className="w-4 h-4 mr-2" />
          Imprimer en PDF
        </Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          Retour
        </Button>
      </div>

      <div className="min-h-screen bg-background py-12 px-4 print:py-4 print:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 print:mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 print:text-3xl">
              Guide d'utilisation
            </h1>
            <h2 className="text-2xl text-primary mb-2">Sveltia CMS - Arkadhya</h2>
            <p className="text-muted-foreground">
              Version 1.0 - Décembre 2024
            </p>
          </div>

          {/* Table of contents */}
          <Card className="mb-8 print:break-after-page">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Table des matières
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><a href="#connexion" className="hover:text-primary">Se connecter au panneau d'administration</a></li>
                <li><a href="#interface" className="hover:text-primary">Découvrir l'interface</a></li>
                <li><a href="#articles" className="hover:text-primary">Gérer les articles de blog</a></li>
                <li><a href="#massages" className="hover:text-primary">Gérer les massages</a></li>
                <li><a href="#cures" className="hover:text-primary">Gérer les cures</a></li>
                <li><a href="#pages" className="hover:text-primary">Modifier les pages</a></li>
                <li><a href="#medias" className="hover:text-primary">Gérer les médias</a></li>
                <li><a href="#publication" className="hover:text-primary">Publier les modifications</a></li>
              </ol>
            </CardContent>
          </Card>

          {/* Section 1: Connexion */}
          <section id="connexion" className="mb-10 print:break-inside-avoid">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Se connecter au panneau d'administration
            </h3>
            
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <LogIn className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Étape 1 : Accéder à l'admin</h4>
                    <p className="text-muted-foreground mb-2">
                      Ouvrez votre navigateur et allez sur :
                    </p>
                    <code className="bg-background px-3 py-1 rounded border text-primary font-mono">
                      https://votre-site.com/admin/
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#333] rounded flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Étape 2 : Connexion GitHub</h4>
                    <p className="text-muted-foreground">
                      Cliquez sur <strong>"Login with GitHub"</strong> et autorisez l'accès à votre compte GitHub. 
                      Vous serez redirigé vers le tableau de bord après la connexion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Interface */}
          <section id="interface" className="mb-10 print:break-inside-avoid print:break-before-page">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Découvrir l'interface
            </h3>

            {/* Mock interface diagram */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border mb-4">
              <div className="border-2 border-dashed border-border rounded-lg overflow-hidden">
                {/* Header mockup */}
                <div className="bg-background border-b border-border p-3 flex items-center justify-between">
                  <span className="font-semibold">Sveltia CMS</span>
                  <div className="flex gap-2">
                    <span className="text-sm text-muted-foreground">admin@arkadhya.fr</span>
                  </div>
                </div>
                
                {/* Main layout mockup */}
                <div className="flex min-h-[200px]">
                  {/* Sidebar */}
                  <div className="w-48 bg-muted/50 border-r border-border p-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded text-primary text-sm">
                      <FolderOpen className="w-4 h-4" />
                      Articles de Blog
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded text-sm text-muted-foreground">
                      <FolderOpen className="w-4 h-4" />
                      Massages
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded text-sm text-muted-foreground">
                      <FolderOpen className="w-4 h-4" />
                      Cures
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded text-sm text-muted-foreground">
                      <FolderOpen className="w-4 h-4" />
                      Pages
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded text-sm text-muted-foreground">
                      <Settings className="w-4 h-4" />
                      Paramètres
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">Articles de Blog</h4>
                      <Button size="sm" className="bg-primary">
                        <Plus className="w-4 h-4 mr-1" /> Nouveau
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-background border rounded flex justify-between items-center">
                        <span className="text-sm">Le sommeil selon l'Ayurvéda</span>
                        <Edit3 className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="p-3 bg-background border rounded flex justify-between items-center">
                        <span className="text-sm">Les 3 Doshas</span>
                        <Edit3 className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/20 border-2 border-primary rounded"></div>
                  <span>Menu de navigation (collections)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-muted border-2 border-border rounded"></div>
                  <span>Zone de contenu (liste des entrées)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Articles */}
          <section id="articles" className="mb-10 print:break-inside-avoid">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Gérer les articles de blog
            </h3>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Plus className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Créer un nouvel article</h4>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1 text-sm">
                        <li>Cliquez sur <strong>"Articles de Blog"</strong> dans le menu</li>
                        <li>Cliquez sur le bouton <strong>"Nouveau"</strong></li>
                        <li>Remplissez les champs : titre, slug (URL), date, catégorie</li>
                        <li>Ajoutez une image principale</li>
                        <li>Rédigez le contenu avec l'éditeur Markdown</li>
                        <li>Cliquez sur <strong>"Publier"</strong></li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Edit3 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Modifier un article existant</h4>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1 text-sm">
                        <li>Cliquez sur l'article dans la liste</li>
                        <li>Modifiez les champs souhaités</li>
                        <li>Cliquez sur <strong>"Publier"</strong> pour sauvegarder</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Field reference */}
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">📝 Champs disponibles :</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li><strong>Titre</strong> : Le titre affiché de l'article</li>
                  <li><strong>Slug</strong> : L'URL de l'article (ex: mon-article)</li>
                  <li><strong>Date</strong> : Date de publication</li>
                  <li><strong>Catégorie</strong> : Ayurvéda, Bien-être, Nutrition, Conseils</li>
                  <li><strong>Image</strong> : Image principale (format recommandé: 1200x630px)</li>
                  <li><strong>Résumé</strong> : Court texte pour les listes</li>
                  <li><strong>Contenu</strong> : L'article complet en Markdown</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Massages */}
          <section id="massages" className="mb-10 print:break-inside-avoid print:break-before-page">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              Gérer les massages
            </h3>

            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Pour chaque massage, vous pouvez modifier :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Nom du massage
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Description courte et longue
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Image principale
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Liste des bienfaits
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Tarifs (durée + prix)
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Questions fréquentes (FAQ)
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Témoignages clients
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Massages similaires
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Cures */}
          <section id="cures" className="mb-10 print:break-inside-avoid">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              Gérer les cures
            </h3>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Modifier les tarifs d'une cure</h4>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Cliquez sur <strong>"Cures"</strong> dans le menu</li>
                  <li>Sélectionnez la cure à modifier</li>
                  <li>
                    Modifiez les champs de prix :
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li><strong>Prix affiché</strong> : Le texte affiché (ex: "240€/jour")</li>
                      <li><strong>Prix par jour</strong> : Le montant numérique</li>
                      <li><strong>Durées</strong> : Les différentes options disponibles</li>
                    </ul>
                  </li>
                  <li>Cliquez sur <strong>"Publier"</strong></li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Section 6: Pages */}
          <section id="pages" className="mb-10 print:break-inside-avoid">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
              Modifier les pages
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Accueil</h4>
                  <p className="text-sm text-muted-foreground">Titre, sous-titre, texte d'introduction</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">À propos</h4>
                  <p className="text-sm text-muted-foreground">Présentation, histoire, valeurs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Contact</h4>
                  <p className="text-sm text-muted-foreground">Coordonnées, horaires, adresse</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Médias */}
          <section id="medias" className="mb-10 print:break-inside-avoid print:break-before-page">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
              Gérer les médias
            </h3>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Upload className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Uploader une image</h4>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1 text-sm">
                        <li>Lors de l'édition d'un contenu, cliquez sur le champ image</li>
                        <li>Cliquez sur <strong>"Choisir un fichier"</strong> ou glissez-déposez</li>
                        <li>L'image est automatiquement uploadée</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Bonnes pratiques pour les images
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                  <div>
                    <p className="font-medium">Formats recommandés :</p>
                    <ul className="list-disc list-inside">
                      <li>WebP (meilleure compression)</li>
                      <li>JPEG (photos)</li>
                      <li>PNG (logos, illustrations)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Dimensions recommandées :</p>
                    <ul className="list-disc list-inside">
                      <li>Blog : 1200 × 630 px</li>
                      <li>Massages/Cures : 800 × 600 px</li>
                      <li>Taille max : 2 Mo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Publication */}
          <section id="publication" className="mb-10 print:break-inside-avoid">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
              Publier les modifications
            </h3>

            <Card className="border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Save className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Processus de publication</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>Cliquez sur <strong>"Publier"</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>La modification est enregistrée sur GitHub</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>Le site est automatiquement reconstruit</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>En <strong>2-3 minutes</strong>, les changements sont en ligne !</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border mt-12 print:mt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Arkadhya - Guide d'utilisation Sveltia CMS
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Pour toute question, contactez votre développeur
            </p>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:break-after-page {
            break-after: page;
          }
          .print\\:break-before-page {
            break-before: page;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
};

export default GuideCMS;
