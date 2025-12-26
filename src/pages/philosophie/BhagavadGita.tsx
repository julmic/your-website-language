import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Quote, Lightbulb, Users, Target, Eye, Star, Flame, Sun, Moon, Sword, Heart } from "lucide-react";

const BhagavadGita = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">La Bhagavad Gītā</h1>
              <p className="text-xl mb-8">
                Le dialogue sacré entre Krishna et Arjuna sur le champ de bataille de Kurukshetra
              </p>
            </div>
          </div>
        </section>

        {/* I. Introduction générale */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">I. Introduction générale</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Place de la Bhagavad Gītā dans la tradition hindoue</h3>
                <p className="text-muted-foreground mb-6">
                  La Bhagavad Gītā, littéralement "Chant du Seigneur", occupe une place centrale dans la tradition hindoue en tant que texte sacré qui synthétise les enseignements des Védas, des Upanishads et des différentes écoles philosophiques. Considérée comme une Upanishad elle-même (appelée "Gītā Upanishad"), elle constitue l'un des trois textes fondamentaux du Vedanta, aux côtés des Upanishads et des Brahma Sutras.
                </p>
                <p className="text-muted-foreground mb-6">
                  La Gītā transcende les divisions traditionnelles entre les différentes écoles philosophiques en offrant une approche intégrative qui englobe les multiples voies spirituelles : le karma yoga (yoga de l'action), le jñāna yoga (yoga de la connaissance) et le bhakti yoga (yoga de la dévotion). Cette universalité en fait un texte accessible à tous les tempéraments spirituels et à toutes les étapes du parcours spirituel.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Présentation du Mahābhārata et de la situation narrative</h3>
                <p className="text-muted-foreground mb-6">
                  La Bhagavad Gītā est intégrée au Mahābhārata, l'un des deux grands épopées sanskrites de l'Inde ancienne. Le Mahābhārata raconte l'histoire des conflits entre deux branches de la famille des Kuru : les Pāndavas (cinq frères) et les Kauravas (cent cousins). La Gītā se déroule précisément au moment crucial où la guerre entre ces deux factions est sur le point d'éclater sur le champ de bataille de Kurukshetra.
                </p>
                <p className="text-muted-foreground mb-6">
                  Le contexte narratif est celui d'une crise morale profonde : Arjuna, le plus grand guerrier des Pāndavas, refuse de combattre ses propres cousins, oncles et maîtres spirituels parmi les Kauravas. Cette réticence à agir face au devoir (dharma) déclenche un dialogue philosophique et spirituel avec Krishna, qui joue à la fois le rôle de charretier et de divinité suprême.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Pourquoi la Gītā est un texte universel</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā transcende le cadre spécifique du Mahābhārata pour devenir un texte universel parce qu'elle traite des dilemmes fondamentaux de l'existence humaine : comment agir avec intégrité dans un monde complexe, comment concilier devoirs contradictoires, comment trouver un sens à la souffrance et à la mort. Le champ de bataille devient une métaphore de la lutte intérieure de chaque être humain.
                </p>
                <p className="text-muted-foreground">
                  Son universalité réside également dans sa capacité à s'adresser à l'homme actif plutôt qu'au reclus spirituel. Contrairement à certains textes spirituels qui prônent le retrait du monde, la Gītā enseigne comment intégrer la spiritualité dans l'action quotidienne, transformant le travail et les responsabilités en pratiques spirituelles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* II. Contexte historique et littéraire */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">II. Contexte historique et littéraire</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Origine et datation approximative</h3>
                <p className="text-muted-foreground mb-6">
                  La Bhagavad Gītā fait partie intégrante du Mahābhārata, dont la composition s'étend approximativement du VIIIe au IVe siècle avant Jésus-Christ. La Gītā elle-même est généralement datée entre le Ve et le IIe siècle avant Jésus-Christ, avec une tendance croissante à la considérer comme un ajout relativement tardif au Mahābhārata, peut-être du IIIe ou IIe siècle avant Jésus-Christ.
                </p>
                <p className="text-muted-foreground mb-6">
                  Cette datation tardive explique en partie la sophistication doctrinale de la Gītā, qui synthétise des siècles de développement philosophique et spirituel en Inde. Elle incorpore des éléments des Upanishads (notamment le concept de Brahman et d'Ātman), des traditions yogiques (yoga de Patañjali), et des développements dévotionnels (bhakti) qui émergent à cette époque.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">La Gītā comme synthèse des traditions védiques, upanishadiques et yogiques</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā représente une synthèse remarquable des différentes traditions spirituelles de l'Inde ancienne. Elle intègre les enseignements des Védas sur le sacrifice et le devoir (dharma), les spéculations métaphysiques des Upanishads sur la nature de l'Ātman et de Brahman, et les techniques pratiques des écoles yogiques pour la maîtrise de l'esprit et des sens.
                </p>
                <p className="text-muted-foreground mb-6">
                  Cette synthèse n'est pas superficielle mais profondément intégrée. Par exemple, le concept de sacrifice (yajña) des Védas est réinterprété comme sacrifice de l'ego dans l'action désintéressée. La connaissance (jñāna) des Upanishads est combinée avec la dévotion (bhakti) et l'action (karma) pour créer une approche spirituelle complète et accessible.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Le cadre : le champ de bataille de Kurukshetra</h3>
                <p className="text-muted-foreground mb-6">
                  Le champ de bataille de Kurukshetra n'est pas seulement un lieu géographique mais un symbole puissant de la condition humaine. Situé dans le nord de l'Inde, ce lieu est considéré comme sacré dans la tradition hindoue, associé à des pèlerinages et à des événements spirituels significatifs. Le choix de ce cadre symbolique souligne la nature sacrée du dialogue qui va s'ensuivre.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Krishna : figure divine, avatāra de Vishnu, guru suprême</h3>
                <p className="text-muted-foreground mb-6">
                  Krishna joue un rôle multiple dans la Gītā : il est à la fois l'avatāra (incarnation) de Vishnu, le dieu suprême qui maintient l'ordre cosmique (dharma), et le guru (maître spirituel) personnel d'Arjuna. Cette combinaison de rôles divins et humains permet à Krishna de transmettre des enseignements à la fois transcendants et immédiatement applicables.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Arjuna : symbole de l'être humain confronté au dilemme moral</h3>
                <p className="text-muted-foreground">
                  Arjuna représente l'humanité dans toute sa complexité : courageux guerrier mais confronté à des dilemmes moraux profonds, capable d'action mais paralysé par la compassion et le doute. Son hésitation initiale reflète les conflits intérieurs universels entre devoirs contradictoires, attachements émotionnels et aspirations spirituelles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* III. Structure interne de la Bhagavad Gītā */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">III. Structure interne de la Bhagavad Gītā</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Organisation générale des 18 chapitres</h3>
                <p className="text-muted-foreground mb-6">
                  La Bhagavad Gītā est structurée en 18 chapitres (adhyāya), chacun portant un titre spécifique qui indique son contenu principal. Cette organisation en 18 parties correspond symboliquement aux 18 livres du Mahābhārata et aux 18 aksharas (syllabes) du mantra sacré "Om". Chaque chapitre développe progressivement les enseignements spirituels, passant de l'éthique à la métaphysique, de la psychologie à la cosmologie.
                </p>
                <p className="text-muted-foreground mb-6">
                  Les chapitres peuvent être regroupés en trois grandes sections : les chapitres 1-6 traitent principalement du karma yoga et du dhyāna yoga, les chapitres 7-12 présentent le bhakti yoga et la nature divine de Krishna, et les chapitres 13-18 offrent une synthèse philosophique et pratique des différentes voies spirituelles.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Les trois grandes voies : action, connaissance, dévotion</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā présente trois voies spirituelles principales qui correspondent aux trois aspects fondamentaux de la nature humaine : le karma yoga pour ceux qui sont actifs, le jñāna yoga pour ceux qui sont intellectuels, et le bhakti yoga pour ceux qui sont émotionnels. Ces voies ne sont pas mutuellement exclusives mais complémentaires, chacune menant à la réalisation ultime.
                </p>
                <p className="text-muted-foreground mb-6">
                  Le karma yoga enseigne l'action désintéressée comme sacrifice spirituel. Le jñāna yoga développe la discrimination entre le réel et l'irréel, le permanent et le périssable. Le bhakti yoga cultive l'amour dévoué pour le divin comme moyen de purification et d'union spirituelle. La Gītā montre comment ces voies peuvent être combinées pour une approche intégrale.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Dynamique du dialogue maître–disciple</h3>
                <p className="text-muted-foreground mb-6">
                  La structure dialoguée de la Gītā reflète la tradition pédagogique indienne du maître spirituel (guru) et du disciple (śiṣya). Ce format permet une exploration progressive des questions spirituelles, avec Arjuna posant des questions concrètes auxquelles Krishna répond avec une profondeur croissante. Cette dynamique rend l'enseignement vivant et personnalisé.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Le style didactique et poétique (versets, mètres)</h3>
                <p className="text-muted-foreground">
                  La Gītā est composée en sanskrit classique, utilisant divers mètres poétiques qui donnent à l'enseignement une qualité mémorable et méditative. Le style alterne entre des passages didactiques directs, des paraboles et des descriptions cosmologiques grandioses. Cette variété stylistique maintient l'attention du lecteur tout en transmettant des vérités spirituelles profondes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IV. Symbolisme de la scène de Kurukshetra */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">IV. Symbolisme de la scène de Kurukshetra</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Sword className="mr-2" /> Champ de bataille intérieur
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Le champ de bataille de Kurukshetra symbolise la lutte intérieure de chaque être humain entre les forces positives et négatives, entre le devoir et l'attachement, entre l'égoïsme et l'altruisme. Cette guerre spirituelle est plus cruciale que toute guerre extérieure.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Users className="mr-2" /> Tendances psychologiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Les Kauravas représentent les tendances égoïstes, matérialistes et destructrices de l'esprit humain, tandis que les Pāndavas symbolisent les qualités nobles, spirituelles et constructrices. La guerre entre eux reflète le conflit moral intérieur.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Target className="mr-2" /> Corps et facultés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Le char d'Arjuna symbolise le corps humain, avec ses cinq chevaux représentant les cinq sens, et Krishna comme conducteur représentant la conscience divine. Le champ de bataille devient le théâtre de l'action spirituelle.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Lightbulb className="mr-2" /> Conscience pure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Krishna représente la conscience pure (Ātman) qui guide l'âme empirique (Arjuna) à travers les dilemmes de l'existence. Son rôle de charretier symbolise comment la conscience dirige les actions du corps et des sens.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg mt-12">
                <h3 className="text-xl font-semibold text-primary mb-4">La bataille comme lutte éthique et spirituelle</h3>
                <p className="text-muted-foreground">
                  La guerre décrite dans la Gītā n'est pas une glorification de la violence mais une métaphore de la lutte éthique nécessaire pour maintenir l'ordre cosmique (dharma). Elle représente le devoir de combattre l'injustice et l'ignorance, même quand cela implique des sacrifices personnels et des conflits émotionnels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* V. Les grands enseignements philosophiques */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">V. Les grands enseignements philosophiques</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Le Yoga de l'Action — Karma Yoga</h3>
                <p className="text-muted-foreground mb-4">
                  Le karma yoga enseigne à agir sans attachement aux résultats. Cette voie spirituelle transforme le travail quotidien en sacrifice spirituel, permettant à l'individu de se libérer des liens de l'action tout en remplissant ses devoirs dans le monde.
                </p>
                <p className="text-muted-foreground mb-6">
                  La notion de dharma personnel est centrale : chaque individu a un devoir spécifique selon sa nature, sa position sociale et ses circonstances. Accomplir ce devoir avec dévouement et sans attachement constitue la voie du karma yoga vers la libération spirituelle.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">2. Le Yoga de la Connaissance — Jñāna Yoga</h3>
                <p className="text-muted-foreground mb-4">
                  Le jñāna yoga développe la discrimination entre le Soi éternel (Ātman) et le non-Soi temporaire (corps, esprit, émotions). Cette voie exige une investigation rigoureuse de la nature de la réalité et de soi-même.
                </p>
                <p className="text-muted-foreground mb-6">
                  La vision de Brahman comme réalité ultime transcende toutes les limitations de l'expérience ordinaire. La connaissance libératrice (moksha) vient de la réalisation directe de l'identité entre l'Ātman individuel et le Brahman universel.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">3. Le Yoga de la Dévotion — Bhakti Yoga</h3>
                <p className="text-muted-foreground mb-4">
                  Le bhakti yoga cultive un amour dévoué et personnel pour le divin. Cette voie spirituelle convient particulièrement aux personnes de tempérament émotionnel, transformant les sentiments en élan vers l'absolu.
                </p>
                <p className="text-muted-foreground mb-6">
                  Le surrender (śaraṇāgati) implique un abandon total de l'ego et de ses prétentions devant la divinité. Cette relation personnelle entre l'âme et le divin permet une purification progressive et une union spirituelle profonde.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">4. Le Yoga de la Méditation — Dhyāna / Raja Yoga</h3>
                <p className="text-muted-foreground mb-4">
                  Le dhyāna yoga développe la maîtrise mentale et la concentration profonde. Cette voie suit les principes du yoga de Patañjali, avec des techniques spécifiques pour calmer les fluctuations de l'esprit.
                </p>
                <p className="text-muted-foreground">
                  La conscience unifiée (samādhi) représente l'état ultime où le méditant, l'objet de méditation et le processus de méditation ne forment plus qu'un. Cet état transcende les dualités ordinaires de l'expérience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VI. Les concepts métaphysiques centraux */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">VI. Les concepts métaphysiques centraux</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Les trois guna : sattva, rajas, tamas</h3>
                <p className="text-muted-foreground mb-6">
                  Les trois gunas (qualités) constituent les forces dynamiques fondamentales de la nature (prakriti). Le sattva représente l'équilibre, la pureté et la connaissance; le rajas symbolise l'activité, la passion et l'agitation; le tamas incarne l'inertie, l'ignorance et l'obscurité. La transformation spirituelle implique un passage progressif du tamas au rajas, puis au sattva, et finalement au dépassement de tous les gunas.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Le Soi (ātman) et le Seigneur Suprême (Īśvara)</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā distingue entre l'Ātman (soi individuel) et Īśvara (Seigneur Suprême). Dans certains passages, ils sont présentés comme distincts, avec l'Ātman comme témoin et Īśvara comme maître de l'univers. Dans d'autres, ils sont identifiés, avec Īśvara comme Ātman suprême résidant dans le cœur de tous les êtres.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">La nature de Brahman dans la Gītā</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā présente Brahman comme la réalité ultime, infinie, éternelle et immuable. Elle le décrit à la fois comme impersonnel (nirguna) et personnel (saguna), selon l'approche spirituelle de l'aspirant. Cette flexibilité doctrinale permet à différents tempéraments spirituels de trouver un chemin vers la réalisation.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">L'univers comme manifestation de Krishna</h3>
                <p className="text-muted-foreground mb-6">
                  La vision cosmique de Krishna (Viśvarūpa Darśana) révèle l'univers entier comme manifestation de la divinité. Cette révélation transcende la perception ordinaire pour montrer que toute existence émane de la conscience divine et y retourne.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Cycle de la naissance et de la mort</h3>
                <p className="text-muted-foreground mb-6">
                  Le samsāra (cycle des renaissances) est présenté comme une condition naturelle tant que l'ignorance (avidya) persiste. La libération (moksha) vient de la réalisation de l'identité entre l'Ātman éternel et Brahman infini, mettant fin au cycle des naissances et des morts.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Moksha : libération par la connaissance, l'action juste, ou la dévotion</h3>
                <p className="text-muted-foreground">
                  La Gītā enseigne que la libération peut être atteinte par plusieurs voies : la connaissance spirituelle (jñāna), l'action désintéressée (karma yoga), ou la dévotion exclusive (bhakti). Cette pluralité des moyens rend la réalisation spirituelle accessible à tous les tempéraments et capacités spirituelles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VII. Chapitres et enseignements majeurs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">VII. Chapitres et enseignements majeurs</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 2 : La sagesse du Samkhya</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre fondamental établit les bases philosophiques de la Gītā. Krishna enseigne à Arjuna la distinction entre le Soi éternel (kshetrajña) et le champ d'expérience temporaire (kshetra). L'enseignement sur l'impermanence du corps et la permanence de l'âme constitue le fondement de l'approche spirituelle.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 3 : Karma Yoga</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre développe la voie de l'action désintéressée. Krishna explique que l'inaction n'est pas la solution au dilemme moral d'Arjuna, mais que l'action peut être transformée en sacrifice spirituel par le détachement des résultats. L'enseignement sur les devoirs spécifiques selon la nature individuelle est crucial.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 6 : Dhyāna Yoga</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre présente les techniques de méditation et de maîtrise mentale. Krishna décrit la posture de méditation, les méthodes de concentration, et les obstacles à surmonter. L'enseignement sur la pratique régulière et la compassion universelle est particulièrement important.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 9 : Le roi des secrets spirituels</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre révèle l'enseignement suprême sur la nature personnelle de Dieu. Krishna déclare qu'il est le Père, la Mère, l'Être Suprême et le but ultime de toute existence. L'enseignement sur la dévotion exclusive et la protection divine est central.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 11 : Vision de la forme cosmique (Viśvarūpa Darśana)</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre culminant montre à Arjuna la forme cosmique de Krishna, révélant l'univers entier comme manifestation divine. Cette vision transcende toute compréhension ordinaire et instille à la fois l'émerveillement et la terreur devant l'immensité de la divinité.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitre 12 : La voie de la dévotion</h3>
                <p className="text-muted-foreground mb-6">
                  Ce chapitre compare les voies spirituelles et conclut que la dévotion à la forme personnelle de Dieu est la plus directe et la plus accessible. Krishna décrit les qualités du dévot parfait et les pratiques qui mènent à l'union divine.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Chapitres 14–18 : Synthèse des voies du yoga et libération</h3>
                <p className="text-muted-foreground">
                  Ces chapitres finaux offrent une synthèse complète des enseignements. Ils traitent des trois gunas, de la distinction entre l'âme et la nature, des différents types de foi, et de la renonciation suprême. Le message final est que l'abandon total à Dieu constitue la voie la plus directe vers la libération.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIII. La synthèse des voies spirituelles dans la Gītā */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">VIII. La synthèse des voies spirituelles dans la Gītā</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Harmonisation du karma, jñāna et bhakti</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā ne présente pas les trois voies spirituelles comme mutuellement exclusives mais comme complémentaires. Un aspirant peut commencer par l'une et progressivement intégrer les autres. La combinaison de l'action désintéressée, de la connaissance discriminante et de la dévotion fervente constitue l'idéal spirituel le plus complet.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Une voie universelle adaptée à l'homme actif</h3>
                <p className="text-muted-foreground mb-6">
                  Contrairement à certaines traditions spirituelles qui exigent le retrait du monde, la Gītā enseigne que la réalisation spirituelle est possible même pour ceux qui mènent une vie active. L'homme d'action peut transformer ses activités en pratiques spirituelles par le détachement et l'offrande de ses actions à Dieu.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">L'éthique de l'action dans le monde</h3>
                <p className="text-muted-foreground">
                  La Gītā développe une éthique complète pour l'action dans le monde. Elle enseigne que le devoir (dharma) doit être accompli avec compétence, sans attachement aux résultats, et dans un esprit de service désintéressé. Cette approche transforme le travail ordinaire en sacrifice spirituel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IX. Approches interprétatives */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">IX. Approches interprétatives</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Commentaires traditionnels (Shankara, Ramanuja, Madhva)</h3>
                <p className="text-muted-foreground mb-6">
                  Les trois grands commentateurs traditionnels de la Gītā offrent des interprétations distinctes : Shankara (Advaita) voit l'identité absolue entre Ātman et Brahman comme enseignement suprême; Ramanuja (Vishishtadvaita) met l'accent sur la relation personnelle entre l'âme et Dieu; Madhva (Dvaita) maintient la distinction radicale entre le créateur et les créatures.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Interprétations modernes (Vivekananda, Aurobindo, Gandhi)</h3>
                <p className="text-muted-foreground mb-6">
                  Les penseurs modernes ont redécouvert la Gītā pour ses enseignements sur l'action spirituelle, l'harmonie des voies spirituelles et l'éthique universelle. Vivekananda a mis l'accent sur la force spirituelle; Aurobindo sur l'évolution divine de l'humanité; Gandhi sur la non-violence active et le sacrifice personnel.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Lectures psychologiques, mystiques, philosophiques</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā a inspiré des lectures variées : psychologiques (comme carte du développement personnel), mystiques (comme guide de l'expérience spirituelle directe), et philosophiques (comme système cohérent de pensée sur la réalité et l'existence humaine).
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">La Gītā comme manuel de transformation intérieure</h3>
                <p className="text-muted-foreground">
                  De nombreux maîtres spirituels modernes présentent la Gītā comme un manuel pratique pour la transformation intérieure. Ses enseignements sur la maîtrise de soi, la discrimination spirituelle et l'amour désintéressé constituent un programme complet de développement personnel et spirituel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* X. Symbolisme profond et psychologie spirituelle */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">X. Symbolisme profond et psychologie spirituelle</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Vision des gunas comme dynamique intérieure</h3>
                <p className="text-muted-foreground mb-6">
                  Les trois gunas ne sont pas seulement des forces cosmiques mais des dynamiques intérieures qui influencent la pensée, les émotions et les actions. La compréhension des gunas permet de reconnaître les influences psychologiques et de travailler à leur transformation spirituelle.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Le mental, l'ego, l'intellect (manas, ahamkara, buddhi)</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā distingue soigneusement entre les différentes fonctions mentales : le manas (mental émotionnel), l'ahamkara (ego identitaire) et la buddhi (intellect discriminant). Cette compréhension fine permet de travailler avec précision sur les obstacles spirituels.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Krishna comme conscience pure</h3>
                <p className="text-muted-foreground mb-6">
                  Krishna symbolise la conscience pure qui observe sans être affectée par les fluctuations mentales et émotionnelles. Son rôle de guide intérieur représente la dimension transcendantale de l'être humain qui peut illuminer le chemin spirituel.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Arjuna comme l'âme empirique</h3>
                <p className="text-muted-foreground mb-6">
                  Arjuna représente l'âme empirique (jīva) confrontée aux dilemmes de l'existence conditionnée. Son évolution spirituelle à travers le dialogue avec Krishna symbolise le parcours de l'individu vers la réalisation de sa nature divine.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">La guerre intérieure et la conquête de soi</h3>
                <p className="text-muted-foreground">
                  La guerre décrite dans la Gītā est avant tout une guerre intérieure contre les forces de l'ignorance, de l'égoïsme et de l'attachement. La victoire sur soi-même est présentée comme plus précieuse que toute victoire extérieure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XI. Style littéraire et mètres sanskrits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XI. Style littéraire et mètres sanskrits</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Mètres védiques : anuṣṭubh et tristubh</h3>
                <p className="text-muted-foreground mb-6">
                  La Bhagavad Gītā est composée principalement en mètre anuṣṭubh, un vers de 32 syllabes divisé en quatre lignes de huit syllabes chacune. Ce mètre, hérité des Védas, confère à l'enseignement une qualité rythmique et mémorable qui facilite la récitation et la mémorisation. Le mètre tristubh (44 syllabes) est également utilisé pour certains versets particulièrement solennels.
                </p>
                <p className="text-muted-foreground mb-6">
                  Ces mètres védiques ne sont pas seulement des formes poétiques mais des structures vibratoires qui portent l'enseignement sacré. La récitation rituelle de ces versets active des dimensions subtiles de la conscience, permettant à l'enseignement de pénétrer au-delà du simple intellect.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Fonction du dialogue dans la transmission du sacré</h3>
                <p className="text-muted-foreground mb-6">
                  La forme dialoguée de la Gītā reflète la tradition pédagogique védique où la connaissance sacrée se transmet par l'interaction directe entre maître et disciple. Ce format permet une exploration progressive des questions spirituelles, avec Arjuna posant des questions concrètes auxquelles Krishna répond avec une profondeur croissante.
                </p>
                <p className="text-muted-foreground mb-6">
                  Le dialogue crée une dimension intime et personnalisée à l'enseignement, rendant les vérités spirituelles immédiatement applicables à la situation existentielle de l'auditeur. Cette approche pédagogique transforme l'enseignement abstrait en guide pratique pour la vie.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Dimension poétique et symbolique</h3>
                <p className="text-muted-foreground">
                  La dimension poétique de la Gītā n'est pas un ornement mais un moyen de transmission de vérités qui transcendent le langage ordinaire. Les métaphores, les images et les descriptions cosmologiques grandioses permettent de communiquer des réalités spirituelles qui ne peuvent être exprimées directement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XII. Analyse philologique de mots-clés */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XII. Analyse philologique de mots-clés</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Dharma</h3>
                <p className="text-muted-foreground mb-6">
                  Le terme "dharma" dérive de la racine sanskrite "dhri" signifiant "soutenir" ou "maintenir". Dans le contexte de la Gītā, dharma désigne à la fois le devoir cosmique et le devoir personnel. Le dharma cosmique (paradharma) est l'ordre universel qui maintient l'harmonie de l'existence, tandis que le dharma personnel (svadharma) est le devoir spécifique de chaque individu selon sa nature, sa position sociale et ses circonstances.
                </p>
                <p className="text-muted-foreground mb-6">
                  Krishna enseigne qu'il est préférable d'accomplir son propre dharma imparfaitement que d'accomplir le dharma d'autrui parfaitement. Cette distinction fondamentale établit une éthique personnelle basée sur l'authenticité plutôt que sur la conformité.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Yoga</h3>
                <p className="text-muted-foreground mb-6">
                  Le mot "yoga" dérive de la racine "yuj" signifiant "lier" ou "unir". Dans la Gītā, yoga désigne à la fois une méthode spirituelle et l'état d'union avec le divin. Les trois formes principales sont le karma yoga (union par l'action), le jñāna yoga (union par la connaissance) et le bhakti yoga (union par la dévotion).
                </p>
                <p className="text-muted-foreground mb-6">
                  Le yoga dans la Gītā n'est pas une fuite du monde mais une transformation de la manière d'être dans le monde. Il s'agit d'accomplir ses devoirs avec détachement et conscience divine.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Bhakti</h3>
                <p className="text-muted-foreground mb-6">
                  "Bhakti" dérive de la racine "bhaj" signifiant "participer" ou "adorer". Dans la Gītā, bhakti désigne la dévotion exclusive et l'amour désintéressé pour le divin. Cette voie spirituelle convient particulièrement aux personnes de tempérament émotionnel.
                </p>
                <p className="text-muted-foreground mb-6">
                  La Gītā enseigne que la bhakti est la voie la plus directe vers la réalisation spirituelle car elle implique un abandon total de l'ego et une ouverture du cœur à la grâce divine.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Nishkama Karma</h3>
                <p className="text-muted-foreground mb-6">
                  "Nishkama karma" signifie "action sans désir" ou "action désintéressée". Le terme se compose de "nishkama" (sans désir) et "karma" (action). Cette notion centrale du karma yoga enseigne à agir sans attachement aux résultats.
                </p>
                <p className="text-muted-foreground">
                  La pratique du nishkama karma transforme le travail ordinaire en sacrifice spirituel, permettant à l'individu de se libérer des liens de l'action tout en remplissant ses devoirs dans le monde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XIII. Grille pratique de lecture */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XIII. Grille pratique de lecture</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Comment lire la Gītā aujourd'hui</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary/80 mb-3">Lecture méditative quotidienne (1 shloka/jour)</h4>
                  <p className="text-muted-foreground mb-4">
                    La méthode recommandée consiste à lire un seul verset par jour avec attention et réflexion. Cette approche permet d'intégrer profondément l'enseignement et de vivre l'expérience spirituelle qu'il contient.
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Choisir un verset qui résonne particulièrement</li>
                    <li>Lire lentement plusieurs fois</li>
                    <li>Méditer sur sa signification profonde</li>
                    <li>Appliquer l'enseignement à sa vie quotidienne</li>
                    <li>Revenir au même verset périodiquement</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary/80 mb-3">Traduction recommandée</h4>
                  <p className="text-muted-foreground mb-4">
                    Pour une compréhension authentique, il est recommandé d'utiliser des traductions établies par des maîtres spirituels reconnus :
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Traduction de Swami Prabhupada (Bhaktivedanta Institute)</li>
                    <li>Traduction de Swami Chinmayananda (Chinmaya Mission)</li>
                    <li>Traduction de Sri Aurobindo (Aurobindo Ashram)</li>
                    <li>Traduction de Eknath Easwaran (Nilgiri Press)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary/80 mb-3">Méthode de contemplation</h4>
                  <p className="text-muted-foreground mb-4">
                    La contemplation de la Gītā implique plusieurs étapes :
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Lecture silencieuse et répétition mentale</li>
                    <li>Contemplation de la signification symbolique</li>
                    <li>Application personnelle à sa situation actuelle</li>
                    <li>Prière ou invocation pour recevoir la grâce de l'enseignement</li>
                    <li>Journal spirituel pour noter les insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XIV. Comparaison avec les Upanishads */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XIV. Comparaison avec les Upanishads</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Ce que la Gītā reprend</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā reprend les enseignements fondamentaux des Upanishads sur la nature de l'Ātman (soi individuel) et de Brahman (réalité absolue). Elle confirme l'identité fondamentale entre l'Ātman et Brahman, développée dans les mahavakyas des Upanishads comme "Tat Tvam Asi" (Toi et Cela êtes un).
                </p>
                <p className="text-muted-foreground mb-6">
                  Elle adopte également la distinction entre le réel (sat) et l'irréel (asat), le permanent (nitya) et le périssable (anitya), et développe la même métaphysique de la conscience pure comme témoin de toutes les expériences.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Ce que la Gītā innove</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā innove en intégrant la dévotion personnelle (bhakti) comme voie spirituelle principale, alors que les Upanishads se concentrent principalement sur la connaissance (jñāna) et la méditation. Elle présente Krishna comme une divinité personnelle accessible à l'amour et à la dévotion.
                </p>
                <p className="text-muted-foreground mb-6">
                  Elle développe également une éthique de l'action dans le monde, enseignant comment intégrer la spiritualité dans la vie active plutôt que de prôner le retrait du monde. Le karma yoga comme voie spirituelle est une innovation majeure.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Comment la Gītā opère sa synthèse</h3>
                <p className="text-muted-foreground">
                  La Gītā opère sa synthèse en montrant que les différentes voies spirituelles (karma, jñāna, bhakti) ne sont pas mutuellement exclusives mais complémentaires. Elle enseigne que la réalisation spirituelle peut être atteinte par plusieurs moyens adaptés aux tempéraments individuels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XV. Unité interne des 18 chapitres */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XV. Unité interne des 18 chapitres</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-secondary/20 p-8 rounded-lg shadow-lg">
                <div className="bg-background p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Résumé ultra court de la progression des chapitres</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary/80">Chapitres 1–6 : Action</h4>
                      <p className="text-muted-foreground text-sm">Introduction au dilemme moral et développement du karma yoga</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary/80">Chapitres 7–12 : Connaissance + Dévotion</h4>
                      <p className="text-muted-foreground text-sm">Révélation de la nature divine de Krishna et voie du bhakti yoga</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary/80">Chapitres 13–18 : Métaphysique + Synthèse</h4>
                      <p className="text-muted-foreground text-sm">Analyse philosophique approfondie et synthèse des voies spirituelles</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Cohérence thématique</h3>
                <p className="text-muted-foreground mb-6">
                  Les 18 chapitres de la Gītā forment un ensemble cohérent où chaque section prépare et mène naturellement à la suivante. Le développement progressif va du dilemme éthique concret à la vision cosmique transcendante, en passant par l'éthique de l'action, la psychologie spirituelle et la métaphysique profonde.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Structure symbolique</h3>
                <p className="text-muted-foreground">
                  Le nombre 18, présent dans les chapitres, les versets de certains chapitres et les livres du Mahābhārata, symbolise l'accomplissement et la totalité. Cette structure numérique renforce l'unité interne de l'œuvre comme système complet de sagesse spirituelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XVI. Influence et postérité */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">XVI. Influence et postérité</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="prose prose-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Impact sur l'hindouisme et le yoga</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā a profondément influencé le développement de l'hindouisme post-védique, devenant une référence centrale pour la philosophie, la pratique spirituelle et l'éthique religieuse. Elle a inspiré de nombreuses écoles de yoga et continue d'être un texte fondamental dans les traditions spirituelles modernes.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Influence sur les mouvements spirituels modernes</h3>
                <p className="text-muted-foreground mb-6">
                  Des mouvements spirituels comme l'Arya Samaj, le Ramakrishna Mission, et diverses écoles de yoga contemporaines s'inspirent largement de la Gītā. Ses enseignements sur l'unité des religions et l'accessibilité de la réalisation spirituelle ont façonné l'hindouisme moderne.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Réception en Occident (Schopenhauer, Emerson, etc.)</h3>
                <p className="text-muted-foreground mb-6">
                  La Gītā a exercé une influence significative sur la pensée occidentale, particulièrement à travers les traductions et commentaires de figures comme Schopenhauer, Emerson, Thoreau et Gandhi. Schopenhauer la considérait comme "le plus beau présent que la philosophie ait reçu de l'Inde".
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Importance contemporaine : éthique, psychologie, écologie spirituelle</h3>
                <p className="text-muted-foreground">
                  Dans le monde contemporain, la Gītā continue d'offrir des perspectives précieuses sur l'éthique professionnelle, la gestion du stress, le développement personnel et l'écologie spirituelle. Ses enseignements sur l'équilibre intérieur et l'action responsable sont particulièrement pertinents dans un monde de plus en plus complexe et stressant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XVII. Conclusion générale */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">XVII. Conclusion générale</h2>
              <div className="w-20 h-1 bg-primary-foreground mx-auto mb-12"></div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg mb-12">
                <div className="bg-background text-foreground p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">La Gītā comme synthèse de la sagesse indienne</h3>
                  <p className="text-muted-foreground mb-6">
                    La Bhagavad Gītā représente l'aboutissement et la synthèse de plusieurs millénaires de réflexion spirituelle en Inde. Elle intègre les enseignements des Védas sur le sacrifice et le devoir, les spéculations métaphysiques des Upanishads, les techniques pratiques du yoga, et les développements dévotionnels du bhakti. Cette synthèse n'est pas superficielle mais profondément intégrée, offrant une vision cohérente et complète de la réalisation spirituelle.
                  </p>
                  <h3 className="text-xl font-semibold text-primary mb-4 mt-8">Message intemporel : agir avec lucidité, aimer avec profondeur, connaître avec discernement</h3>
                  <p className="text-muted-foreground mb-6">
                    Le message central de la Gītā est que la réalisation spirituelle n'exige pas le retrait du monde mais une transformation de notre manière d'être dans le monde. Agir avec lucidité signifie accomplir ses devoirs sans attachement aux résultats; aimer avec profondeur implique une dévotion sincère et désintéressée; connaître avec discernement consiste à distinguer l'éternel de l'éphémère.
                  </p>
                  <h3 className="text-xl font-semibold text-primary mb-4 mt-8">Actualité de l'enseignement pour la vie moderne</h3>
                  <p className="text-muted-foreground mb-6">
                    Dans un monde caractérisé par le stress, l'incertitude et la complexité morale, les enseignements de la Gītā offrent un cadre précieux pour naviguer avec équilibre et intégrité. Son approche de l'action spirituelle, de la maîtrise émotionnelle et de l'éthique universelle répond aux défis contemporains de manière profonde et pratique.
                  </p>
                  <h3 className="text-xl font-semibold text-primary mb-4 mt-8">Idéal de l'homme intégré : force, sagesse, compassion</h3>
                  <p className="text-muted-foreground mb-6">
                    La Gītā ne prône pas un idéal d'ascète retiré du monde mais celui de l'homme intégré qui combine force d'action, sagesse spirituelle et compassion universelle. Cet idéal est particulièrement pertinent pour les leaders, les professionnels et tous ceux qui cherchent à vivre avec intégrité dans un monde complexe. La Gītā nous rappelle que la véritable force vient de l'intérieur, que la vraie sagesse éclaire nos actions, et que la vraie compassion transcende les divisions apparentes.
                  </p>
                  <div className="mt-8 bg-secondary/20 p-6 rounded-lg border border-primary/20">
                    <Quote className="text-primary mb-4 mx-auto" size={32} />
                    <p className="text-muted-foreground italic">
                      "Tu as le droit d'accomplir ton devoir, mais non de récolter les fruits de ton action."
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 text-right">- Bhagavad Gītā II.47</p>
                  </div>
                  <div className="mt-8 text-center">
                    <h4 className="text-xl font-semibold text-primary mb-2">Shanti, Shanti, Shanti</h4>
                    <p className="text-muted-foreground italic">
                      Paix, Paix, Paix - Que la paix règne en nous, autour de nous et partout dans l'univers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BhagavadGita;