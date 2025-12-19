import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <Helmet>
        <title>Politique de confidentialité - Arkadhya Centre Ayurvédique</title>
        <meta name="description" content="Politique de confidentialité du centre Arkadhya : collecte, traitement et protection de vos données personnelles conformément au RGPD." />
        <link rel="canonical" href="https://arkadhya.org/politique-confidentialite" />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Politique de confidentialité
          </h1>

          <p className="text-muted-foreground mb-8">
            <em>Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</em>
          </p>

          <p className="text-muted-foreground mb-8">
            Le centre ayurvédique <strong>Arkadhya</strong> s'engage à protéger la vie privée de ses utilisateurs 
            et clients. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
            vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-muted-foreground">
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li><strong>Arkadhya</strong></li>
              <li>Adresse : Aquitaine, France</li>
              <li>Email : contact@arkadhya.org</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              2. Données collectées
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous collectons les données suivantes :
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Données fournies directement</h3>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, téléphone</li>
              <li><strong>Données de santé :</strong> informations communiquées lors des consultations (antécédents, mode de vie, symptômes) - ces données sont protégées par le secret professionnel</li>
              <li><strong>Données de réservation :</strong> dates, prestations choisies, préférences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Données collectées automatiquement</h3>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Cookies :</strong> voir la section dédiée ci-dessous</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              3. Finalités du traitement
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Gestion des rendez-vous et des réservations</li>
              <li>Suivi personnalisé de votre accompagnement ayurvédique</li>
              <li>Communication concernant nos prestations et actualités (si vous y avez consenti)</li>
              <li>Amélioration de nos services et de notre site web</li>
              <li>Respect de nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              4. Base légale du traitement
            </h2>
            <p className="text-muted-foreground mb-4">
              Le traitement de vos données repose sur :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>L'exécution du contrat :</strong> pour la gestion des réservations et prestations</li>
              <li><strong>Votre consentement :</strong> pour l'envoi de newsletters et communications marketing</li>
              <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services</li>
              <li><strong>L'obligation légale :</strong> pour la conservation des données comptables</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              5. Durée de conservation
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données sont conservées pendant :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Données de santé :</strong> 10 ans après la dernière prestation (conformément aux recommandations légales)</li>
              <li><strong>Données clients :</strong> 3 ans après la fin de la relation commerciale</li>
              <li><strong>Données de prospection :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              6. Vos droits
            </h2>
            <p className="text-muted-foreground mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@arkadhya.org" className="text-primary hover:underline">
                contact@arkadhya.org
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              7. Cookies
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre site utilise des cookies pour :
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site</li>
            </ul>
            <p className="text-muted-foreground">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              8. Sécurité des données
            </h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
              vos données contre tout accès non autorisé, modification, divulgation ou destruction. 
              Ces mesures incluent le chiffrement des données sensibles et la limitation de l'accès aux 
              personnes autorisées.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              9. Partage des données
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Nos prestataires techniques (hébergement, outils de gestion) qui sont tenus à la confidentialité</li>
              <li>Les autorités compétentes si la loi l'exige</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              10. Réclamation auprès de la CNIL
            </h2>
            <p className="text-muted-foreground">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez 
              introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></li>
              <li>Adresse : 3 Place de Fontenoy, 75007 Paris</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              11. Modification de la politique
            </h2>
            <p className="text-muted-foreground">
              Cette politique de confidentialité peut être mise à jour à tout moment. En cas de modification 
              significative, nous vous en informerons par email ou par une notification sur notre site.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
