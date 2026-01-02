import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Flame, Users, Sparkles } from "lucide-react";

export const meta = {
  title: 'Le Rig‑Veda : la source primordiale',
  etat: 'disponible',
};

const RigVeda = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/philosophie-vedique">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Philosophie Védique
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            {meta.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-2">
            État : <strong className="text-foreground">{meta.etat}</strong>
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl">
            🕉️ Aux origines de la pensée védique et du sacré
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* INTRODUCTION GÉNÉRALE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              INTRODUCTION GÉNÉRALE
            </h2>

            {/* Le Rig-Veda dans l'histoire de l'humanité */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Le Rig-Veda dans l'histoire de l'humanité
              </h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Le Rig-Veda représente l'un des textes les plus anciens de l'humanité encore utilisés dans une tradition vivante. Composé il y a plus de trois millénaires, il constitue le fondement de la civilisation indienne et influence encore aujourd'hui plus d'un milliard de personnes. Contrairement aux textes antiques devenus objets de musée, le Rig-Veda demeure une réalité liturgique, spirituelle et philosophique active. Sa préservation remarquable à travers les siècles témoigne d'une volonté consciente de transmettre un savoir considéré comme sacré, au-delà des vicissitudes de l'histoire.
                </p>
                <p>
                  Cette transmission s'est faite par voie orale avec une exactitude stupéfiante. Les textes védiques n'ont pas été écrits pendant des siècles, mais mémorisés, récités et transmis de maître à disciple selon des techniques mnémoniques sophistiquées. Cette oralité n'est pas une faiblesse, mais une force : elle garantit la vivacité du texte, sa résonance phonétique et spirituelle, et sa capacité à être actualisé dans chaque récitation. Le Rig-Veda n'est pas simplement lu ; il est entendu, vibré, incarné.
                </p>
              </div>
            </div>

            {/* Définition du terme Veda */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Définition du terme Veda
              </h3>
              <Card className="bg-primary/5 border-primary/20 mb-4">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Le mot <strong className="text-foreground">Veda</strong> provient de la racine sanskrite <em>vid</em> qui signifie « savoir », « connaître », « voir ». Un Veda est donc littéralement une « connaissance », mais pas n'importe laquelle : une connaissance révélée, éternelle, non créée par l'homme. La tradition védique considère ces textes comme <em>apauruṣeya</em> (« non humains »), c'est-à-dire qu'ils ne sont pas l'œuvre d'un auteur, mais la parole même du cosmos, perçue par des sages inspirés appelés <em>ṛṣi</em>.
                  </p>
                </CardContent>
              </Card>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Cette notion de révélation diffère profondément de celle des religions abrahamiques. Les <em>ṛṣi</em> ne sont pas des prophètes au sens biblique ; ils sont des « voyants », des êtres capables de percevoir directement les vérités cosmiques et de les formuler en mantras. Le Veda n'est donc pas un message divin adressé à l'humanité, mais une structure sonore et sémantique qui existe de toute éternité, attendant d'être découverte par ceux dont la conscience est suffisamment affinée.
                </p>
                <p>
                  Cette conception fait du Veda un texte à la fois sacré et impersonnel : il n'appartient à personne, il EST. Sa vérité ne repose pas sur l'autorité d'un dieu personnel, mais sur sa cohérence interne, sa beauté formelle et sa capacité à éveiller l'intuition spirituelle chez celui qui l'écoute ou le récite.
                </p>
              </div>
            </div>

            {/* Le Rig-Veda comme fondement de la tradition védique */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Le Rig-Veda comme fondement de la tradition védique
              </h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Le Rig-Veda est le premier et le plus ancien des quatre Vedas. Les trois autres — Yajur-Veda, Sāma-Veda et Atharva-Veda — en dérivent largement, soit en reprenant ses hymnes, soit en les adaptant à des usages rituels spécifiques. Ainsi, le Rig-Veda est-il non seulement une source de savoir, mais aussi une matrice textuelle dont les ramifications irriguent toute la littérature védique ultérieure.
                </p>
                <p>
                  Sur le plan philosophique, le Rig-Veda contient en germe les grandes interrogations métaphysiques qui seront développées dans les Brāhmaṇa (commentaires rituels) et les Upaniṣad (textes philosophiques). Des questions comme « Qu'y avait-il avant la création ? », « Quelle est la nature de l'être ? », « Comment le multiple procède-t-il de l'Un ? » sont déjà posées dans certains hymnes tardifs du Rig-Veda, notamment dans le célèbre Hymne de la Création (<em>Nāsadīya Sūkta</em>).
                </p>
                <p>
                  Cette continuité fait du Rig-Veda un texte fondateur au sens fort : il ouvre un espace de questionnement et de méditation qui ne sera jamais refermé. Contrairement aux textes dogmatiques, il n'impose pas de réponses définitives, mais invite à une exploration sans fin du mystère de l'existence.
                </p>
              </div>
            </div>
          </div>

          {/* PREMIÈRE PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              PREMIÈRE PARTIE — Structure et composition
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              CHAPITRE III — Organisation interne du Rig-Veda
            </h3>

            {/* Les 10 Maṇḍala */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Les 10 Maṇḍala (livres)
              </h4>
              <div className="prose prose-lg text-muted-foreground space-y-4 mb-6">
                <p>
                  Le Rig-Veda est divisé en dix <em>Maṇḍala</em> (littéralement « cercles » ou « cycles »), chacun constituant une unité thématique, liturgique ou familiale. Cette division n'est pas arbitraire : elle reflète une organisation à la fois chronologique et sociologique, chaque <em>Maṇḍala</em> étant souvent attribué à une lignée de <em>ṛṣi</em> particulière.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Maṇḍala I</h5>
                    <p className="text-sm text-muted-foreground">
                      191 hymnes, composés par divers <em>ṛṣi</em>. Hymnes variés dédiés à Agni, Indra, Varuṇa, Mitra, etc.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Maṇḍala II–VII</h5>
                    <p className="text-sm text-muted-foreground">
                      Les « livres familiaux » : attribués respectivement aux familles Gṛtsamada, Viśvāmitra, Vāmadeva, Atri, Bharadvāja, Vasiṣṭha. Hymnes rituels et invocations aux dieux.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Maṇḍala VIII</h5>
                    <p className="text-sm text-muted-foreground">
                      103 hymnes, principalement dédiés à Indra et Agni. Contient certains hymnes archaïques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Maṇḍala IX</h5>
                    <p className="text-sm text-muted-foreground">
                      114 hymnes entièrement consacrés à Soma, la plante sacrée et sa divinité.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 md:col-span-2">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Maṇḍala X</h5>
                    <p className="text-sm text-muted-foreground">
                      191 hymnes, le plus tardif. Contient les hymnes philosophiques majeurs : <em>Nāsadīya Sūkta</em> (Hymne de la Création), <em>Puruṣa Sūkta</em> (Hymne de l'Homme Cosmique), <em>Hiraṇyagarbha Sūkta</em> (Hymne de l'Embryon d'Or).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Cette structure révèle une stratification historique : les <em>Maṇḍala</em> II à VII sont considérés comme les plus anciens, le X comme le plus récent. Cette évolution se manifeste aussi dans le contenu : les hymnes anciens sont essentiellement liturgiques et invocatoires, tandis que les hymnes tardifs intègrent des spéculations métaphysiques et cosmologiques.
                </p>
              </div>
            </div>

            {/* Les 1 028 hymnes */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Les 1 028 hymnes (sūkta)
              </h4>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Chaque <em>Maṇḍala</em> est subdivisé en <em>sūkta</em> (littéralement « bien dit »), c'est-à-dire des hymnes. Un <em>sūkta</em> est une composition poétique autonome, généralement dédiée à une divinité particulière, composée de plusieurs strophes (<em>ṛc</em>) de longueur variable. Le Rig-Veda compte au total <strong>1 028 hymnes</strong> (selon la recension Śākala, la plus répandue).
                </p>
                <p>
                  Chaque hymne possède un auteur traditionnel (<em>ṛṣi</em>), une divinité invoquée (<em>devatā</em>) et un mètre poétique (<em>chandas</em>). Ces trois éléments forment l'identité d'un hymne et guident son usage rituel. Par exemple, un hymne à Agni composé en mètre <em>gāyatrī</em> par le <em>ṛṣi</em> Viśvāmitra ne sera pas récité de la même manière qu'un hymne à Indra en mètre <em>triṣṭubh</em> par Vasiṣṭha.
                </p>
                <p>
                  Les hymnes du Rig-Veda ne sont pas de simples prières : ce sont des œuvres d'art verbales, des constructions phonétiques et symboliques d'une complexité redoutable. Chaque mot est pesé, chaque sonorité est choisie pour produire un effet psychologique, spirituel et cosmique. La beauté formelle des hymnes est indissociable de leur efficacité rituelle.
                </p>
              </div>
            </div>

            {/* Les mètres poétiques */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Les mètres poétiques (chandas)
              </h4>
              <div className="prose prose-lg text-muted-foreground space-y-4 mb-6">
                <p>
                  Le Rig-Veda utilise plusieurs mètres poétiques, dont les trois principaux sont :
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Gāyatrī</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      3 pieds de 8 syllabes chacun (24 syllabes au total)
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Le mètre le plus sacré, utilisé notamment dans la célèbre Gāyatrī Mantra
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Triṣṭubh</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      4 pieds de 11 syllabes (44 syllabes au total)
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Le plus fréquent dans le Rig-Veda, adapté aux longues invocations
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Jagatī</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      4 pieds de 12 syllabes (48 syllabes au total)
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Mètre majestueux, utilisé pour les hymnes cosmiques
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Ces mètres ne sont pas de simples formes : ils structurent la pensée, rythment la récitation et créent une musicalité qui facilite la mémorisation. Le choix d'un mètre n'est jamais anodin : il reflète la nature de la divinité invoquée, l'intention du rituel et le niveau de réalité visé. La <em>gāyatrī</em>, par exemple, est associée à la lumière, à la connaissance, à l'éveil ; la <em>triṣṭubh</em> à la force, à la puissance, à l'action ; la <em>jagatī</em> à la totalité, à l'infini, au cosmos.
                </p>
                <p>
                  L'art du <em>chandas</em> est une science en soi, développée plus tard dans des traités appelés <em>Chandaḥśāstra</em>. Mais déjà dans le Rig-Veda, la maîtrise des mètres témoigne d'une conscience aiguë de la puissance du langage et de son rôle dans la création et le maintien de l'ordre cosmique.
                </p>
              </div>
            </div>
          </div>

          {/* DEUXIÈME PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              DEUXIÈME PARTIE — Théologie et panthéon
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              CHAPITRE IV — Les divinités principales du Rig-Veda
            </h3>

            <Card className="bg-primary/5 border-primary/20 mb-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Le panthéon védique est vaste et complexe, comptant des dizaines de divinités aux attributs variés. Contrairement aux systèmes polythéistes figés, le panthéon védique est fluide, dynamique, où les dieux peuvent se confondre, se superposer ou s'identifier selon les contextes. Cette fluidité reflète une vision du divin non comme une collection d'entités distinctes, mais comme un jeu de forces cosmiques aux visages multiples.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Ushas */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Uṣas — L'Aurore
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Uṣas, la déesse de l'aurore, est l'une des figures les plus poétiques et les plus aimées du Rig-Veda. Elle personnifie le moment magique où la nuit cède la place au jour, où les ténèbres sont repoussées par la lumière. Elle est célébrée pour sa beauté, sa jeunesse éternelle et sa capacité à éveiller le monde.
                    </p>
                    <p>
                      Les hymnes à Uṣas sont d'une tendresse rare dans la littérature védique. Elle est comparée à une jeune femme qui se pare pour son époux, à une mère bienveillante, à une vache qui donne son lait. Son apparition quotidienne est un miracle renouvelé, une promesse de vie, de clarté, de renouveau.
                    </p>
                    <p>
                      Sur le plan symbolique, Uṣas représente l'éveil de la conscience, la dissipation de l'ignorance, le passage du sommeil à la vigilance. Elle est associée à la connaissance, à la vérité (<em>ṛta</em>), à l'ordre cosmique. Invoquer Uṣas, c'est invoquer la lumière intérieure, la capacité à voir clairement, à discerner le réel de l'illusoire.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mitra */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Mitra — Le Contrat et l'Alliance
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Mitra est le dieu du contrat, de l'alliance, de la parole donnée. Son nom dérive de la racine <em>mi-</em> qui signifie « lier », « unir ». Il incarne la dimension sociale et éthique du divin : il veille au respect des accords, à la fidélité, à la justice dans les relations humaines.
                    </p>
                    <p>
                      Souvent associé à Varuṇa (le gardien de l'ordre cosmique), Mitra représente l'aspect lumineux, diurne, visible de la loi. Alors que Varuṇa agit dans l'ombre, scrutant les cœurs et punissant les fautes cachées, Mitra opère au grand jour, dans la lumière, garantissant la transparence et la confiance mutuelle.
                    </p>
                    <p>
                      Dans le contexte védique, Mitra est invoqué lors des serments, des pactes, des traités. Sa présence garantit la validité de la parole et la stabilité des relations. Trahir Mitra, c'est trahir l'ordre social lui-même, se couper de la communauté humaine et divine.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Vāyu */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Vāyu — Le Vent
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Vāyu est le dieu du vent, de l'air, du souffle vital (<em>prāṇa</em>). Il est une force mobile, invisible, omniprésente. Dans le Rig-Veda, il est souvent associé à Indra et participe aux batailles cosmiques contre les forces du chaos.
                    </p>
                    <p>
                      Le vent est ambivalent : il peut être doux et rafraîchissant, ou violent et destructeur. Vāyu incarne cette dualité. Il est le messager des dieux, celui qui transporte les prières vers les cieux, mais aussi celui qui déchaîne les tempêtes et purifie par la force.
                    </p>
                    <p>
                      Sur le plan intérieur, Vāyu symbolise le <em>prāṇa</em>, le souffle vital qui anime tous les êtres. Contrôler Vāyu, c'est maîtriser le souffle, et donc maîtriser l'esprit. Cette idée sera centrale dans le développement du yoga et de la méditation dans les traditions ultérieures.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Rudra */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Rudra — Le Terrible et le Guérisseur
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Rudra est l'une des figures les plus fascinantes et les plus ambiguës du Rig-Veda. Il est à la fois redouté et vénéré, terrifiant et bienveillant. Son nom est souvent traduit par « le Hurleur » ou « le Rouge », évoquant à la fois la tempête et la fureur.
                    </p>
                    <p>
                      Rudra habite les lieux sauvages, les montagnes, les forêts. Il est le dieu des marges, de ce qui échappe à l'ordre civilisé. Il peut envoyer la maladie, mais aussi la guérison. Les hymnes le supplient de détourner ses flèches mortelles et d'apporter ses remèdes bienfaisants.
                    </p>
                    <p>
                      Rudra est le prototype de Śiva, qui deviendra l'une des grandes divinités de l'hindouisme classique. Déjà dans le Rig-Veda, on perçoit les traits qui définiront Śiva : l'ascétisme, la puissance destructrice, la méditation solitaire, le contrôle des forces élémentaires. Rudra est un dieu liminal, qui se tient au seuil entre ordre et chaos, vie et mort, civilisation et nature sauvage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Polythéisme et hénothéisme */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Polythéisme, hénothéisme et unité sous-jacente
              </h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Le système religieux du Rig-Veda a souvent été qualifié de <strong>polythéiste</strong>, et il l'est incontestablement en apparence : des dizaines de dieux sont invoqués, chacun avec ses attributs, ses mythes, ses hymnes. Mais cette lecture est insuffisante.
                </p>
                <p>
                  Max Müller, le grand indianiste du XIXe siècle, a proposé le terme <strong>hénothéisme</strong> pour décrire la religion védique : chaque dieu, au moment où il est invoqué, est traité comme s'il était le dieu suprême. Indra peut être appelé « roi des dieux », mais Agni aussi, et Varuṇa également. Cette fluidité hiérarchique indique que les dieux ne sont pas des entités fixes, mais des modes d'appréhension du divin.
                </p>
                <p>
                  Plus profondément encore, certains hymnes tardifs du Rig-Veda expriment une intuition <strong>moniste</strong> : tous les dieux ne sont que des noms différents d'une seule réalité. Le célèbre vers du <em>Ṛgveda</em> I.164.46 déclare :
                </p>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic text-center">
                    « <em>Ekam sad viprā bahudhā vadanti</em> » <br />
                    « La Réalité est Une, les sages l'appellent de multiples noms »
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Ce vers est capital : il affirme que derrière la multiplicité des dieux se tient une unité fondamentale. Les noms — Indra, Agni, Mitra, Varuṇa — sont des façons de nommer l'innommable, de conceptualiser l'inconcevable. Le divin est Un, mais il se manifeste de mille manières selon les besoins du rituel, les aspirations du dévot, les aspects de la réalité visés.
                </p>
                <p>
                  Cette vision aura une postérité immense. Elle préfigure la philosophie des Upaniṣad, où le <em>Brahman</em> (l'Absolu) est décrit comme au-delà de toute qualification, tout en se manifestant sous d'innombrables formes. Elle annonce aussi le concept de <em>īśvara</em> (le Seigneur personnel) dans le Vedānta : le dieu personnel est une forme accessible de l'Absolu impersonnel, une concession au besoin humain de relation, de dévotion, de prière.
                </p>
                <p>
                  Ainsi, le Rig-Veda n'est ni purement polythéiste, ni purement monothéiste : il est un champ d'expérience religieuse ouvert, où le divin peut être approché sous de multiples angles, sans que l'un exclue l'autre. C'est cette plasticité théologique qui permettra à la tradition indienne de développer simultanément des voies dévotionnelles (<em>bhakti</em>), philosophiques (<em>jñāna</em>) et rituelles (<em>karma</em>), sans les percevoir comme contradictoires.
                </p>
              </div>
            </div>
          </div>

          {/* TROISIÈME PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              TROISIÈME PARTIE — Cosmologie et vision du monde
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              CHAPITRE V — La création et le mystère de l'origine
            </h3>

            {/* Nāsadīya Sūkta */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Le Nāsadīya Sūkta (Hymne de la création, RV X.129)
              </h4>
              
              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic">
                    L'Hymne de la création (<em>Nāsadīya Sūkta</em>) représente l'un des textes les plus profonds et mystérieux du Rig-Veda, questionnant l'origine même de l'existence et reconnaissant les limites de la connaissance humaine face au mystère primordial.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Cet hymne est d'une audace philosophique stupéfiante. Il s'ouvre sur une série de négations :
                </p>
              </div>

              <Card className="border-primary/20 my-6">
                <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                  <p>« Il n'y avait ni non-être ni être à ce moment-là,</p>
                  <p>Il n'y avait ni espace aérien ni ciel au-delà.</p>
                  <p>Qu'est-ce qui se mouvait puissamment ? Où ? Sous la garde de qui ?</p>
                  <p>Y avait-il de l'eau, profonde et insondable ? »</p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Cette ouverture est révolutionnaire : elle refuse toutes les catégories habituelles de la pensée. Ni l'être ni le non-être ne préexistaient ; ni le ciel ni la terre ; ni la vie ni la mort. Le langage lui-même vacille, incapable de saisir ce « moment » qui n'est pas encore un moment, puisque le temps n'existe pas encore.
                </p>
                <p>
                  L'hymne continue en évoquant l'émergence d'un principe primordial, d'une pulsation, d'un désir (<em>kāma</em>) qui serait la « première semence de la pensée ». Mais même cette évocation reste hésitante, conditionnelle. Le poète ne prétend pas savoir ; il spécule, il médite, il tâtonne.
                </p>
                <p>
                  Et l'hymne se termine par un aveu d'ignorance stupéfiant :
                </p>
              </div>

              <Card className="border-primary/20 my-6">
                <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                  <p>« Qui sait vraiment ? Qui ici le proclamera ?</p>
                  <p>D'où est-elle née ? D'où vient cette création ?</p>
                  <p>Les dieux sont postérieurs à cette création du monde,</p>
                  <p>Alors qui sait d'où elle est issue ?</p>
                  <p>Celui qui la surveille du plus haut des cieux,</p>
                  <p>Lui seul le sait — ou peut-être ne le sait-il pas. »</p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Ce dernier vers — « ou peut-être ne le sait-il pas » — est d'une profondeur vertigineuse. Non seulement les humains ne savent pas, mais peut-être même le principe suprême qui surplombe la création ne sait-il pas. Peut-être la création est-elle un mystère absolu, irréductible à toute explication, à toute origine assignable.
                </p>
                <p>
                  Cette posture est aux antipodes du dogmatisme. Le <em>Nāsadīya Sūkta</em> ne propose pas une cosmogonie, un récit définitif de l'origine ; il ouvre un espace de questionnement radical, où l'ignorance est reconnue non comme une faiblesse, mais comme une forme de sagesse supérieure. Ne pas savoir, c'est refuser de clore prématurément l'interrogation, c'est rester ouvert au mystère, c'est admettre que la réalité excède infiniment nos concepts.
                </p>
                <p>
                  Cet hymne influencera profondément la philosophie indienne ultérieure. Les Upaniṣad reprendront cette intuition d'un Absolu au-delà de toute qualification. Le bouddhisme en fera un argument contre les spéculations métaphysiques stériles. Le scepticisme indien (<em>Cārvāka</em>, <em>Ajñāna</em>) s'en réclamera pour justifier l'agnosticisme. Et la poésie mystique de toute l'Asie du Sud résonnera de cet écho : le mystère ultime est indicible, insaisissable, insondable.
                </p>
              </div>
            </div>
          </div>

          {/* QUATRIÈME PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              QUATRIÈME PARTIE — Rituel et sacrifice
            </h2>

            {/* CHAPITRE VII — Le feu sacré */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Flame className="w-6 h-6 text-primary" />
                CHAPITRE VII — Le feu sacré (Agni)
              </h3>

              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Agni, le dieu du feu, est la divinité la plus invoquée du Rig-Veda. Sur les 1 028 hymnes, près de 200 lui sont dédiés. Cette prééminence n'est pas accidentelle : Agni est le médiateur par excellence entre les humains et les dieux, le sacrificateur divin, la bouche par laquelle les offrandes montent vers le ciel.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Agni possède une triple nature : il est le feu terrestre (celui du foyer domestique), le feu de l'éclair (dans l'atmosphère), et le feu solaire (dans le ciel). Cette triplicité fait de lui une divinité cosmique, présente à tous les niveaux de la réalité. Il est à la fois immanent et transcendant, familier et mystérieux.
                </p>
                <p>
                  Dans le rituel védique, Agni est indispensable. C'est par lui que les offrandes — beurre clarifié (<em>ghṛta</em>), grains, plantes sacrées — sont consumées et transformées en fumée qui s'élève vers les dieux. Agni est donc un transformateur, un alchimiste : il transmute la matière terrestre en substance divine. Sans lui, aucune communication avec les dieux n'est possible.
                </p>
                <p>
                  Agni est aussi le gardien du foyer, le protecteur de la maison, l'ami des hommes. Sa présence garantit la chaleur, la lumière, la cuisson des aliments, la sécurité contre les bêtes sauvages. Il est le centre de la vie domestique, le symbole de la civilisation face à la nature hostile.
                </p>
                <p>
                  Sur le plan symbolique, Agni représente la connaissance illuminatrice, la vérité qui brûle les illusions, la purification par la destruction. Dans les spéculations plus tardives, il sera identifié au <em>jñānāgni</em>, le « feu de la connaissance » qui consume toutes les ignorances et libère l'âme de ses attachements.
                </p>
              </div>
            </div>

            {/* CHAPITRE VIII — Le prêtre officiant */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                CHAPITRE VIII — Le prêtre officiant (hotṛ)
              </h3>

              <div className="prose prose-lg text-muted-foreground space-y-4 mb-6">
                <p>
                  Le rituel védique n'est pas une simple récitation de prières : c'est une opération technique complexe, requérant une connaissance approfondie des hymnes, des gestes, des moments propices, des offrandes appropriées. Cette technicité ritualisée a donné naissance à une classe spécialisée : les prêtres, et plus particulièrement le <em>hotṛ</em>, le récitant des hymnes du Rig-Veda.
                </p>
              </div>

              <Card className="border-primary/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Les quatre types de prêtres védiques
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">1. Le hotṛ (récitant)</p>
                      <p>Récite les hymnes du Rig-Veda, invoque les dieux, formule les intentions du sacrifice.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">2. L'adhvaryu (officiant)</p>
                      <p>Effectue les gestes rituels, manipule les objets sacrés, suit les prescriptions du Yajur-Veda.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">3. L'udgātṛ (chanteur)</p>
                      <p>Chante les mélodies sacrées (<em>sāman</em>) tirées du Sāma-Veda.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">4. Le brahman (surveillant)</p>
                      <p>Supervise l'ensemble, corrige les erreurs, récite les formules de réparation en cas de faute rituelle.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Le <em>hotṛ</em> est donc le spécialiste du Rig-Veda. Il doit connaître par cœur des centaines d'hymnes, savoir lequel invoquer à quel moment, adapter son ton, son rythme, sa prononciation aux circonstances. Son rôle n'est pas seulement mnémonique : il est créateur. Par sa voix, par sa récitation juste, il actualise la présence divine, il rend efficace le sacrifice, il maintient l'ordre cosmique.
                </p>
                <p>
                  Cette conception du prêtre comme opérateur rituel, et non comme simple intermédiaire ou serviteur de Dieu, est caractéristique du védisme. Le prêtre possède un pouvoir propre, dérivé de sa connaissance du <em>brahman</em> (la puissance sacrée des formules). Il n'est pas un élu de Dieu, mais un technicien du sacré, un expert en manipulation des forces invisibles.
                </p>
                <p>
                  Cette autonomie du rituel vis-à-vis de la volonté divine sera critiquée plus tard par les Upaniṣad et par le bouddhisme, qui y verront une forme de matérialisme spirituel, une illusion de contrôle. Mais dans le cadre védique, elle est fondamentale : le rituel fonctionne par lui-même, selon des lois immanentes, et le prêtre est celui qui connaît ces lois.
                </p>
              </div>
            </div>

            {/* CHAPITRE IX — Puruṣa Sūkta */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                CHAPITRE IX — L'homme cosmique (Puruṣa Sūkta, RV X.90)
              </h3>

              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic">
                    Le <em>Puruṣa Sūkta</em> est l'un des hymnes les plus célèbres et les plus influents du Rig-Veda. Il décrit le sacrifice primordial d'un être cosmique, <em>Puruṣa</em>, dont le démembrement donne naissance à l'univers et à l'ordre social.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Puruṣa est décrit comme un être gigantesque, aux mille têtes, mille yeux, mille pieds. Il englobe la totalité de ce qui existe et même ce qui n'existe pas encore. Les dieux décident de le sacrifier, et de son corps démembré naissent tous les éléments du cosmos :
                </p>
              </div>

              <Card className="border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• De sa <strong>bouche</strong> naissent les <em>brāhmaṇa</em> (prêtres)</p>
                    <p>• De ses <strong>bras</strong> naissent les <em>kṣatriya</em> (guerriers)</p>
                    <p>• De ses <strong>cuisses</strong> naissent les <em>vaiśya</em> (commerçants, agriculteurs)</p>
                    <p>• De ses <strong>pieds</strong> naissent les <em>śūdra</em> (serviteurs)</p>
                    <p className="mt-4 pt-4 border-t border-primary/20">
                      • De son <strong>esprit</strong> naît la <em>Lune</em><br/>
                      • De son <strong>œil</strong> naît le <em>Soleil</em><br/>
                      • De sa <strong>bouche</strong> naissent <em>Indra</em> et <em>Agni</em><br/>
                      • De son <strong>souffle</strong> naît le <em>Vent</em>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Ce mythe a eu une influence considérable sur la pensée indienne. Il fonde cosmologiquement l'ordre social (<em>varṇa</em>) en le présentant comme une structure naturelle, inscrite dans la création même. Cette justification religieuse du système de castes sera à la fois une source de stabilité sociale et, plus tard, une cible de contestation pour les mouvements réformateurs.
                </p>
                <p>
                  Sur le plan philosophique, le <em>Puruṣa Sūkta</em> introduit l'idée que le sacrifice est l'acte créateur par excellence. Le cosmos n'est pas créé par décret divin, mais par un acte rituel : le démembrement sacrificiel. Cette conception sera centrale dans la théologie védique : chaque sacrifice humain reproduit et réactualise le sacrifice primordial, maintient l'ordre cosmique, empêche le retour au chaos.
                </p>
                <p>
                  Le <em>Puruṣa Sūkta</em> sera aussi lu symboliquement : Puruṣa n'est pas seulement l'homme cosmique, mais l'Esprit universel, l'Âme suprême. Son démembrement représente la diversification de l'Un en multiple, la manifestation de l'Absolu dans le monde phénoménal. Cette lecture préfigure la métaphysique des Upaniṣad, où le <em>Puruṣa</em> sera identifié au <em>Brahman</em>, l'Absolu impersonnel.
                </p>
              </div>
            </div>
          </div>

          {/* CINQUIÈME PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              CINQUIÈME PARTIE — Continuité philosophique
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              CHAPITRE X — Des hymnes védiques aux Upaniṣad
            </h3>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-6">
              <p>
                Le Rig-Veda n'est pas un système philosophique achevé, mais il contient les germes des grandes interrogations qui seront développées dans les Upaniṣad, textes philosophiques composés plusieurs siècles plus tard. Cette continuité est essentielle pour comprendre l'évolution de la pensée indienne.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Du rituel à l'intériorisation
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Le Rig-Veda est centré sur le rituel externe : le sacrifice, les offrandes, les invocations. Les Upaniṣad, elles, intériorisent ce rituel : le véritable sacrifice devient la maîtrise de soi, la méditation, la connaissance (<em>jñāna</em>).
                    </p>
                    <p>
                      Par exemple, le feu sacrificiel (<em>Agni</em>) devient le feu intérieur de la connaissance qui consume les ignorances. Le <em>soma</em>, la plante sacrée, devient la béatitude intérieure (<em>ānanda</em>). Les dieux extérieurs deviennent des principes psychologiques ou cosmiques.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Du multiple à l'Un
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Le Rig-Veda présente une multitude de dieux, même s'il suggère une unité sous-jacente. Les Upaniṣad radicalisent cette intuition : il n'y a qu'une seule Réalité, le <em>Brahman</em>, et tous les phénomènes ne sont que des manifestations de cette Réalité unique.
                    </p>
                    <p>
                      L'identité entre <em>Ātman</em> (le Soi individuel) et <em>Brahman</em> (l'Absolu) sera la grande découverte des Upaniṣad, préfigurée par certains hymnes védiques qui évoquent un principe unique au-delà des dieux.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    De la certitude au doute
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Le Rig-Veda affirme généralement avec confiance l'efficacité du rituel, la présence des dieux, l'ordre cosmique (<em>ṛta</em>). Mais certains hymnes, comme le <em>Nāsadīya Sūkta</em>, introduisent le doute, le questionnement, l'agnosticisme.
                    </p>
                    <p>
                      Les Upaniṣad radicaliseront ce doute : elles remettront en question l'autorité du rituel, la réalité du monde phénoménal, la nature même du Soi. Cette attitude critique ouvrira la voie au bouddhisme et au jaïnisme.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Du temps cyclique à la libération
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Le Rig-Veda évoque un temps cyclique : les saisons reviennent, les rituels se répètent, l'ordre cosmique est maintenu par la répétition. Les Upaniṣad introduisent l'idée de libération (<em>mokṣa</em>) : sortir du cycle, transcender le temps, réaliser l'identité avec l'Absolu.
                    </p>
                    <p>
                      Cette idée de libération sera centrale dans toutes les traditions indiennes ultérieures : hindouisme, bouddhisme, jaïnisme. Elle représente un tournant décisif dans l'histoire des idées.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Ainsi, le Rig-Veda n'est pas un texte figé dans le passé : il est le point de départ d'une trajectoire intellectuelle et spirituelle qui se déploiera sur plus de deux millénaires. Comprendre le Rig-Veda, c'est comprendre les racines de la pensée indienne, mais aussi percevoir les mutations, les ruptures, les innovations qui naîtront de cette matrice primordiale.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SIXIÈME PARTIE */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-6 border-b border-primary/30 pb-2">
              SIXIÈME PARTIE — Héritage et postérité
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              CHAPITRE XI — Influence du Rig-Veda sur la pensée indienne
            </h3>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-6">
              <p>
                Le Rig-Veda a façonné la civilisation indienne à un degré difficile à surestimer. Son influence ne se limite pas au domaine religieux : elle s'étend à la philosophie, à la poésie, à la musique, à la médecine, à l'astronomie, au droit, à la structure sociale. Même les traditions qui le contestent — bouddhisme, jaïnisme — se définissent en partie par rapport à lui.
              </p>
            </div>

            <div className="space-y-8">
              {/* Influence littéraire */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  1. Influence littéraire et poétique
                </h4>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Le Rig-Veda est le modèle de toute la poésie sanskrite classique. Ses mètres, ses figures de style, ses métaphores seront repris, raffinés, codifiés dans les traités de poétique (<em>alaṅkāraśāstra</em>). Les grands poètes comme Kālidāsa, Bhāravi, Māgha s'en inspireront constamment.
                  </p>
                  <p>
                    Plus profondément, le Rig-Veda établit une conception de la poésie comme parole sacrée, dotée d'un pouvoir propre. Le poète (<em>kavi</em>) n'est pas un simple artisan du langage, mais un voyant, capable de percevoir et de formuler des vérités cosmiques. Cette sacralisation de la parole poétique marquera toute la littérature indienne.
                  </p>
                </div>
              </div>

              {/* Influence philosophique */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2. Influence philosophique
                </h4>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Nous avons déjà évoqué la continuité entre le Rig-Veda et les Upaniṣad. Mais l'influence va plus loin : tous les systèmes philosophiques orthodoxes (<em>āstika darśana</em>) — Vedānta, Sāṃkhya, Yoga, Nyāya, Vaiśeṣika, Mīmāṃsā — se réclament de l'autorité védique. Même s'ils divergent radicalement dans leurs conclusions, ils s'accordent sur un point : le Veda est une source de connaissance valide (<em>pramāṇa</em>).
                  </p>
                  <p>
                    Les écoles hétérodoxes (<em>nāstika</em>) — bouddhisme, jaïnisme, matérialisme — rejettent cette autorité, mais elles ne peuvent éviter de dialoguer avec les concepts védiques. Le bouddhisme critique le rituel védique, mais il reprend l'idée de <em>dharma</em> (ordre cosmique). Le jaïnisme rejette les Vedas, mais il conserve la notion de <em>karman</em> (action et rétribution). Le matérialisme (<em>Cārvāka</em>) nie toute transcendance, mais il s'appuie sur certains hymnes védiques sceptiques pour justifier son agnosticisme.
                  </p>
                </div>
              </div>

              {/* Influence rituelle */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  3. Influence rituelle et religieuse
                </h4>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Le rituel védique, bien que considérablement simplifié, survit encore aujourd'hui dans certaines cérémonies brahmaniques : mariages, funérailles, initiations (<em>upanayana</em>). Les mantras récités lors de ces occasions proviennent souvent du Rig-Veda. La <em>Gāyatrī Mantra</em>, extraite du Rig-Veda (III.62.10), est sans doute le mantra le plus récité en Inde, encore aujourd'hui.
                  </p>
                  <p>
                    L'hindouisme classique, avec ses temples, ses images, sa dévotion (<em>bhakti</em>), semble très éloigné du védisme ancien. Pourtant, il conserve une révérence pour les Vedas et incorpore de nombreux éléments védiques : les dieux Agni, Indra, Varuṇa subsistent (même s'ils sont secondaires), les prêtres brahmanes continuent de réciter des hymnes védiques, l'idéal du sacrifice est transposé dans la <em>pūjā</em> (culte des images).
                  </p>
                  <p>
                    Cette continuité n'est pas une simple survivance : elle témoigne d'une capacité remarquable d'adaptation et de transformation. Le védisme n'est pas mort ; il s'est métamorphosé, réinventé, tout en conservant un lien symbolique avec ses origines.
                  </p>
                </div>
              </div>
          {/* Influence sociale */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              4. Influence sociale et politique
            </h4>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Le système des <em>varṇa</em> (classes sociales), justifié par le <em>Puruṣa Sūkta</em>, a profondément marqué la structure sociale indienne. Bien que le système de castes réel (<em>jāti</em>) soit beaucoup plus complexe que le modèle védique, l'idée d'une hiérarchie cosmique incarnée dans l'ordre social reste influente.
              </p>
              <p>
                Cette influence a été à la fois stabilisatrice et oppressive. Stabilisatrice parce qu'elle a fourni un cadre social cohérent pendant des millénaires. Oppressive parce qu'elle a légitimé des discriminations, des exclusions, des violences. Les mouvements de réforme sociale — de Kabir à Ambedkar — ont dû lutter contre cette sacralisation de la hiérarchie.
              </p>
              <p>
                Aujourd'hui encore, le débat sur les castes et l'égalité sociale en Inde passe souvent par une réinterprétation ou une contestation des textes védiques. Le Rig-Veda reste un enjeu politique et herméneutique vivant.
              </p>
            </div>
          </div>

          {/* Influence scientifique */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              5. Influence scientifique et technique
            </h4>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Le Rig-Veda contient des observations astronomiques précises : mentions d'éclipses, descriptions des constellations, calculs du calendrier lunaire. Ces observations ont nourri le développement de l'astronomie indienne (<em>jyotiṣa</em>), qui atteindra un niveau remarquable au premier millénaire de notre ère.
              </p>
              <p>
                De même, les classifications védiques — des plantes, des animaux, des éléments — ont influencé la médecine āyurvédique et les sciences naturelles indiennes. L'idée védique d'un ordre cosmique (<em>ṛta</em>) régissant tous les phénomènes a encouragé une attitude rationnelle et systématique face à la nature.
              </p>
              <p>
                Enfin, la science du langage (<em>vyākaraṇa</em>), dont le sommet est la grammaire de Pāṇini, trouve son origine dans l'exigence védique d'une récitation parfaite. La nécessité de préserver intacte la parole sacrée a conduit à une analyse phonétique, morphologique et syntaxique d'une sophistication inouïe pour l'époque.
              </p>
            </div>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20 mt-8">
          <CardContent className="p-6">
            <h4 className="font-semibold text-foreground mb-3">
              Conclusion : Un texte vivant
            </h4>
            <p className="text-muted-foreground">
              Le Rig-Veda n'est pas un monument mort, figé dans un passé révolu. C'est un texte vivant, toujours récité, toujours interprété, toujours contesté. Son influence s'étend bien au-delà de l'Inde : il a inspiré les romantiques allemands (Herder, Schlegel), fasciné les orientalistes occidentaux, nourri les réflexions comparatistes sur la religion indo-européenne.
            </p>
            <p className="text-muted-foreground mt-4">
              Comprendre le Rig-Veda, ce n'est pas seulement étudier un texte ancien : c'est entrer en dialogue avec une tradition qui, depuis plus de trois millénaires, interroge le mystère de l'existence, la nature du sacré, la place de l'homme dans le cosmos. C'est reconnaître que les questions posées il y a si longtemps restent, pour l'essentiel, les nôtres.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Citation finale */}
      <div className="text-center mt-16 py-8 border-t border-primary/20">
        <p className="text-xl font-serif text-primary mb-4">ॐ</p>
        <p className="text-muted-foreground italic">
          « Que la sagesse des Vedas illumine nos cœurs et nos esprits »
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          — Extrait du Rig-Veda
        </p>
      </div>

    </div>
  </section>
</Layout>
  );
};

export default RigVeda;
