import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const CGV = () => {
  return (
    <Layout>
      <Helmet>
        <title>Conditions Générales de Vente - Arkadhya Centre Ayurvédique</title>
        <meta name="description" content="Conditions générales de vente des prestations du centre ayurvédique Arkadhya : consultations, massages, cures et formations." />
        <link rel="canonical" href="https://arkadhya.org/cgv" />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Conditions Générales de Vente
          </h1>

          <p className="text-muted-foreground mb-8">
            <em>Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</em>
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 1 - Objet
            </h2>
            <p className="text-muted-foreground mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              le centre ayurvédique <strong>Arkadhya</strong> et ses clients, dans le cadre de la vente de 
              prestations de services ayurvédiques.
            </p>
            <p className="text-muted-foreground">
              Toute réservation implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 2 - Prestations proposées
            </h2>
            <p className="text-muted-foreground mb-4">
              Arkadhya propose les prestations suivantes :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Consultations ayurvédiques :</strong> bilan de santé (Prakriti/Vikriti), suivi personnalisé</li>
              <li><strong>Massages et soins corporels :</strong> Abhyanga, Shirodhara, Udvartana, et autres soins traditionnels</li>
              <li><strong>Cures ayurvédiques :</strong> cures détox, bien-être, Panchakarma, cures pré/post-natales</li>
              <li><strong>Formations et ateliers :</strong> atelier cuisine ayurvédique, formations professionnelles</li>
              <li><strong>Accompagnement Bhutavidya :</strong> psychologie ayurvédique</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 3 - Tarifs
            </h2>
            <p className="text-muted-foreground mb-4">
              Les tarifs des prestations sont indiqués en euros (€) toutes taxes comprises. Arkadhya se réserve 
              le droit de modifier ses tarifs à tout moment. Les prestations sont facturées sur la base des 
              tarifs en vigueur au moment de la réservation.
            </p>
            <p className="text-muted-foreground">
              Les tarifs détaillés sont disponibles sur demande et sur les pages correspondantes du site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 4 - Réservation et paiement
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Réservation</h3>
            <p className="text-muted-foreground mb-4">
              Les réservations peuvent être effectuées :
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>Par téléphone</li>
              <li>Par email à contact@arkadhya.org</li>
              <li>Via le formulaire de contact du site</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              La réservation est confirmée après réception d'un acompte de 30% du montant total pour les cures 
              et formations, sauf mention contraire.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Modalités de paiement</h3>
            <p className="text-muted-foreground">
              Le paiement peut être effectué par :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Virement bancaire</li>
              <li>Chèque</li>
              <li>Espèces (sur place uniquement)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 5 - Annulation et modification
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Annulation par le client</h3>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li><strong>Plus de 7 jours avant :</strong> remboursement intégral de l'acompte ou report sans frais</li>
              <li><strong>Entre 7 et 48 heures avant :</strong> l'acompte est conservé, possibilité de report</li>
              <li><strong>Moins de 48 heures ou absence :</strong> la totalité de la prestation est due</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Annulation par Arkadhya</h3>
            <p className="text-muted-foreground">
              En cas d'annulation par Arkadhya (cas de force majeure, maladie du praticien), le client sera 
              intégralement remboursé ou une nouvelle date sera proposée.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 6 - Déroulement des prestations
            </h2>
            <p className="text-muted-foreground mb-4">
              Le client s'engage à :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Arriver à l'heure convenue (tout retard réduira la durée du soin)</li>
              <li>Signaler toute contre-indication médicale, allergie ou traitement en cours</li>
              <li>Respecter les consignes données par le praticien</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Important :</strong> Les soins ayurvédiques ne remplacent pas un avis médical. 
              En cas de doute, consultez votre médecin.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 7 - Responsabilité
            </h2>
            <p className="text-muted-foreground mb-4">
              Arkadhya s'engage à fournir des prestations de qualité dans le respect des traditions 
              ayurvédiques. Toutefois, Arkadhya ne peut être tenu responsable :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Des réactions individuelles aux soins malgré le respect des protocoles</li>
              <li>Du non-respect par le client des consignes et recommandations</li>
              <li>De la perte ou du vol d'objets personnels dans les locaux</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 8 - Confidentialité
            </h2>
            <p className="text-muted-foreground">
              Toutes les informations communiquées lors des consultations sont strictement confidentielles 
              et protégées par le secret professionnel. Elles ne seront jamais transmises à des tiers sans 
              le consentement explicite du client.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 9 - Réclamations
            </h2>
            <p className="text-muted-foreground">
              Toute réclamation doit être adressée par écrit à l'adresse email{" "}
              <a href="mailto:contact@arkadhya.org" className="text-primary hover:underline">
                contact@arkadhya.org
              </a>{" "}
              dans un délai de 7 jours suivant la prestation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 10 - Droit applicable et litiges
            </h2>
            <p className="text-muted-foreground mb-4">
              Les présentes CGV sont soumises au droit français.
            </p>
            <p className="text-muted-foreground">
              En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux 
              compétents du ressort du siège social d'Arkadhya seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Article 11 - Contact
            </h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces conditions générales de vente, vous pouvez nous contacter :
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li><strong>Email :</strong> contact@arkadhya.org</li>
              <li><strong>Adresse :</strong> Aquitaine, France</li>
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default CGV;
