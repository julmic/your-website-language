import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mentions légales - Arkadhya Centre Ayurvédique</title>
        <meta name="description" content="Mentions légales du site Arkadhya, centre ayurvédique en Aquitaine. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle." />
        <link rel="canonical" href="https://arkadhya.org/mentions-legales" />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Mentions légales - Arkadhya Centre Ayurvédique
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Éditeur du site
            </h2>
            <p className="text-muted-foreground mb-4">
              Le site <strong>arkadhya.org</strong> est édité par :
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Raison sociale :</strong> Arkadhya</li>
              <li><strong>Forme juridique :</strong> [À compléter]</li>
              <li><strong>Siège social :</strong> Aquitaine, France</li>
              <li><strong>SIRET :</strong> [À compléter]</li>
              <li><strong>Directeur de la publication :</strong> [À compléter]</li>
              <li><strong>Email :</strong> contact@arkadhya.org</li>
              <li><strong>Téléphone :</strong> [À compléter]</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Hébergeur
            </h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par :
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li><strong>Nom :</strong> Lovable / Hostinger</li>
              <li><strong>Adresse :</strong> [Adresse de l'hébergeur]</li>
              <li><strong>Site web :</strong> lovable.dev</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-muted-foreground mb-4">
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
              est la propriété exclusive d'Arkadhya ou de ses partenaires et est protégé par les lois françaises 
              et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-muted-foreground">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
              écrite préalable d'Arkadhya.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Protection des données personnelles
            </h2>
            <p className="text-muted-foreground mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
              et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, 
              d'effacement et de portabilité de vos données personnelles.
            </p>
            <p className="text-muted-foreground">
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez 
              nous contacter à l'adresse : <a href="mailto:contact@arkadhya.org" className="text-primary hover:underline">contact@arkadhya.org</a>
            </p>
            <p className="text-muted-foreground mt-4">
              Pour plus d'informations, consultez notre{" "}
              <a href="/politique-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground mb-4">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément 
              à notre politique de confidentialité.
            </p>
            <p className="text-muted-foreground">
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti lorsqu'un cookie 
              est envoyé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Crédits
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong>Conception et développement :</strong> Lovable
            </p>
            <p className="text-muted-foreground">
              <strong>Photographies :</strong> © Arkadhya - Tous droits réservés
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Limitation de responsabilité
            </h2>
            <p className="text-muted-foreground mb-4">
              Arkadhya s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
              Toutefois, Arkadhya ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
              mises à disposition.
            </p>
            <p className="text-muted-foreground">
              En conséquence, Arkadhya décline toute responsabilité pour toute imprécision, inexactitude ou omission 
              portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Droit applicable
            </h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut 
              d'accord amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
