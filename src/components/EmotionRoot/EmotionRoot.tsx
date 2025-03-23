import style from "./EmotionRoot.module.css";
import { Link } from "react-router-dom";

function EmotionRoot() {
    return (
        <section className={style.EmotionRoot}>
            <header className={style.Header}>
                <h1 className={style.TitleH1}>🌿 Calmer les Émotions</h1>
                <p className={style.Subtitle}>
                    Apprenez à accueillir, comprendre et libérer vos émotions avec douceur et bienveillance.
                </p>
            </header>

            <div className={style.Content}>
                <Article title="CALMER ÉMOTION : L'art de maîtriser ses émotions et celles des autres" paragraphs={[
                    "La méthode pour calmer, décrypter et vous libérer des émotions douloureuses sans les réprimer ni rompre avec vous-mêmes."
                ]} />

                <Article title="Et si tes émotions étaient des Guides ?" paragraphs={[
                    "Imagine que les émotions « douloureuses » ne soient plus des obstacles à surmonter...",
                    "Mais de puissants alliés pour agir en accord avec tes convictions.",
                    "Je ne sais pas ce que tu penses…",
                    "Mais la majorité des gens font erreur !",
                    "Ils ont des idées reçues très ancrées sur leurs émotions.",
                    "Ils ne s’en rendent pas compte, mais ces idées sabotent leur potentiel !"
                ]} />

                <Article title="Premièrement," paragraphs={[
                    "Beaucoup pensent que certaines émotions sont indésirables et devraient être évitées. Pourtant, nous savons aujourd'hui qu’elles sont toutes Bénéfiques !",
                    "Bien qu’elles soient perçues comme douloureuses, elles signalent nos besoins insatisfaits et elles désignent les situations à débloquer rapidement.",
                    "Les éviter ou les refouler ne fait que prolonger et aggraver les problèmes qu’elles dévoilent !"
                ]} />

                <Article title="Deuxièmement," paragraphs={[
                    "Certaines personnes se sentent tellement submergées par une émotion qu’elles finissent par croire que sa maîtrise est hors de portée !",
                    "Pourtant, il existe des moyens efficaces pour tempérer la réponse émotionnelle ! Et bien qu’on puisse parfois se sentir accablé(e) et impuissant(e)…",
                    "Il n’en est rien !",
                    "En vérité, la croyance qu’on ne peut pas maîtriser nos émotions est bien plus néfaste que les émotions elles-mêmes. Car c’est elle qui sabote notre quotidien en nous empêchant d’essayer !"
                ]} />

                <Article title="Troisièmement," paragraphs={[
                    "Et c’est là que le bât blesse…",
                    "La plupart des gens fusionnent avec leurs émotions.",
                    "Il n’en est rien !",
                    "Ils s’identifient tellement à ce qu’ils ressentent que ces émotions les définissent. Ainsi, ils se croient Anxieux, Colériques ou Déprimés et leur souffrance devient leur réalité.",
                    "En psychologie, on appelle ça la Fusion Cognitive !",
                    "L’individu se fond avec ses pensées et ses émotions au point de croire qu’il est ce qu’il ressent.",
                    "Pourtant, s’identifier à nos émotions limite notre capacité trouver des solutions et paralyse toute perspective de changement !"
                ]} />

                <Article title="L’intuition se plante !" paragraphs={[
                    "Lorsqu’une émotion est douloureuse, la souffrance nous pousse à nous en éloigner.",
                    "Ce mécanisme s’appelle l’évitement expérientiel.",
                    "C’est une stratégie de protection contre la douleur.",
                    "Le problème c’est qu’en l’Évitant ou en la Réprimant, on induit un état d’esprit de Lutte contre l’émotion.",
                    "Ce qui empêche cette émotion d’être conscientisée, comprise et libérée."
                ]} />

                <Article title="Il y a 3 piliers pour Maîtriser ses Émotions !" paragraphs={[
                    "Pilier n°1 : Affuter son écoute !",
                    "La plupart des gens prennent conscience beaucoup trop tard de leurs émotions. Ils sont en rage, avant d’avoir réalisé qu’ils s’impatientaient. Ils n’ont pas vu la vague venir...",
                    "Mais avant d’essayer de maîtriser une émotion, il faudrait apprendre à l’anticiper, n’est-ce pas ?",
                    "Alors, l’étape 1 consiste à développer la Conscience de Soi. Pour être en mesure d’identifier les signes avant qu’il soit trop tard."
                ]} />

                <Article title="Pilier n°2 : Reprendre la Main" paragraphs={[
                    "Les émotions sont un peu comme des hallucinations qu’il est possible de modifier. Mais leur subjectivité déclenche de nombreuses réactions corporelles réelles.",
                    "Et parmi ses réactions, certaines peuvent être contrôlées !",
                    "Alors, puisqu’une émotion se déploie en 3 phases, il est nécessaire de connaître des techniques pour calmer chacune de ces phases."
                ]} />

                <Article title="Pilier n°3 : Agir en Conscience" paragraphs={[
                    "Les émotions ont le pouvoir de prendre des décisions à notre place. Mais ces décisions sont automatiques et sous-optimales.",
                    "Pourtant, elles peuvent être des moteurs d’actions vertueuses. Mais cela implique d’en identifier les messages et de comprendre le lien de cause à effet entre nos ressentis, nos valeurs et nos actions !",
                    "Alors, plutôt que d’en subir les conséquences non désirées, il faudrait savoir à utiliser tes émotions comme des leviers d’actions conscientes !"
                ]} />

                <Article title="Stopper la Dictature Émotionnelle !" paragraphs={[
                    "Imagine que d’ici 1 à 2 semaines, tu ne te sentes plus stressé(e) à l’idée de ressentir certaines émotions. Avec un peu de pratique, tu sauras comment les maîtriser et réduire leur impact négatif sur ton corps.",
                    "Tu sauras comment éviter les blocages et te libérer facilement des charges émotionnelles résiduelles. Cette maîtrise naissante t’aidera à gagner en confiance ! Ce qui aura un impact positif sur ton estime et sur tes relations.",
                    "Tu te sentiras plus en sécurité face à des situations inconfortables… Et capable de relever des défis que tu pensais hors de portée."
                ]} />

                <Article title="Ce que tu vas Découvrir :" paragraphs={[
                    "Ensemble, nous verrons comment entrainer ton esprit à stopper et à gérer les émotions les plus intenses !",
                    "Tu apprendras une posture mentale puissante pour sortir d'états émotionnels douloureux.",
                    "Nous verrons des techniques ciblées pour t’entrainer à \"Défusionner\" avec tes émotions. Tu vas apprendre à sortir de l'état d'hypnose émotionnelle qui domine la plupart des gens.",
                    "Tu vas découvrir comment réaliser une décharge émotionnelle pour te libérer des tensions accumulées. Ce qui te permettra de relâcher le corps en cas de blocage ou de perte de contrôle.",
                    "Tu vas apprendre des outils d’auto-analyse pour distancer les emprises émotionnelles.",
                    "Tu vas découvrir une méthode pour identifier les valeurs et les convictions qui se cachent derrière tes émotions les plus douloureuses.",
                    "Nous verrons comment utiliser ces valeurs comme de puissants leviers d’action pour entreprendre des projets en suspens ou bloqués.",
                    "Tu sauras passer d’une soumission émotionnelle à une posture d’actions et de confiance !",
                    "Tu auras toutes les clés pour définir de Nouveaux Objectifs, une technique très efficace pour commencer à agir tout en restant en accord avec tes convictions profondes...",
                    "Et un plan d’action pour sortir de l’inertie et remettre du mouvement dans ta vie !"
                ]} />

                <Article title="C’est beaucoup plus difficile de ne rien faire !" paragraphs={[
                    "Plus on esquive la souffrance plus elle s’accumule… Elle se distille dans tous les aspects de la vie et ronge nos espoirs et nos rêves d’enfant.",
                    "Des millions de personnes acceptent la souffrance pour le confort de ne pas avoir à changer.",
                    "Mais cette récompense à court terme les hantera jusqu’à leur dernier souffle."
                ]} />

                <Article title="Alors, pourquoi faire comme eux ?!" paragraphs={[
                    "La plupart des gens continueront de croire que les émotions sont comme elles sont…",
                    "Et qu’on ne peut rien faire pour les changer.",
                    "Mais ces mêmes personnes seront jalouses en te voyant sortir du blindage émotionnel qui te bloquait jusqu’à maintenant.",
                    "Elles seront sidérées par ta métamorphose.",
                    "Et tu auras de quoi être fier(e) du chemin parcouru !"
                ]} />

                <Article title="Le Plan que je te propose est Réaliste !" paragraphs={[
                    "Tu n’as pas besoin de disposer de matériel ou de connaissances particulières !",
                    "Tu n’as pas besoin de beaucoup de temps. Tous les exercices que je partage tiennent en moins de 20 min / jour.",
                    "Les vidéos et les contenus sont courts, impactants et vont droit au but. Tu disposeras des connaissances théoriques, des exercices et du plan d’action.",
                    "Si tu as une question, un espace commentaire privé et réactif est disponible sous chaque contenu. (Je réponds personnellement)",
                    "Tu auras accès au contenu sans limitation de durée !",
                    "Et enfin ce nouveau programme est protégé par une garantie !",
                    "Alors, si tu te rendais compte qu’il n’est pas adapté à tes besoins, tu n’aurais qu’à m’écrire pour être Intégralement remboursé dans les 30 jours."
                ]} />

                <Article title="Mon engagement…" paragraphs={[
                    "Ma passion pour la compréhension de l’esprit humain, mes pratiques et mes formations m’ont permis d’acquérir de précieuses connaissances.",
                    "Ces connaissances ont pour moi une grande valeur. Et je me suis fait une mission de les partager. Je sais que ce contenu pourrait te faire gagner de précieuses années…",
                    "Alors, c’est avec joie que je t’ouvre les portes d’un tout Nouveau Programme !",
                    "C’est une belle aventure qui démarre.",
                    "Contactez moi maintenant !"
                ]} />

                <div className={style.CTA}>
                    <h2 className={style.CTA_Title}>Prêt(e) à passer à l’action ?</h2>
                    <p className={style.CTA_Text}>
                        Transforme ton rapport aux émotions et développe une sérénité intérieure durable.
                    </p>
                    <Link to="/contact" className={style.CTA_Button}>🌟 Je passe à l’action</Link>
                </div>
            </div>
        </section>
    );
}

function Article({ title, paragraphs }: { title: string; paragraphs: string[] }) {
    return (
        <article className={style.Article}>
            <h2 className={style.TitleH2}>{title}</h2>
            {paragraphs.map((text, index) => (
                <p className={style.Text} key={index}>{text}</p>
            ))}
        </article>
    );
}

export default EmotionRoot;