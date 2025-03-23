import style from './HomeRoot.module.css';

function HomeRoot() {
  return (
    <main className={style.HomeRoot}>
      {/* Hero Section */}
      <section className={style.HeroSection}>
        <div className={style.HeroText}>
          <h1 className={style.Title}>Reconnectez-vous à l’essentiel 🌿</h1>
          <p className={style.Subtitle}>
            Découvrez une approche douce, profonde et guidée pour apaiser votre esprit, retrouver votre équilibre émotionnel
            et apprendre à vivre pleinement, en conscience.
          </p>
          <a href="/contact" className={style.CTA}>
            Commencer mon voyage
          </a>
        </div>
      </section>

      {/* Citation inspirante */}
      <section className={style.SectionQuote}>
        <blockquote className={style.Quote}>
          “Lâcher prise, ce n’est pas abandonner. C’est choisir la paix plutôt que le combat intérieur.”
        </blockquote>
      </section>

      {/* Présentation */}
      <section className={style.SectionIntro}>
        <h2 className={style.SectionTitle}>Qui suis-je ?</h2>
        <p className={style.SectionText}>
          Je m'appelle <strong>Mouna</strong>. J’accompagne, à distance, toutes les personnes désireuses de transformer
          leur relation au stress, à l’anxiété et aux émotions. À travers des outils simples, concrets et bienveillants,
          vous apprendrez à avancer avec sérénité et confiance.
        </p>
      </section>

      {/* Objectifs du site */}
      <section className={style.SectionIntro}>
        <h2 className={style.SectionTitle}>Un voyage intérieur guidé</h2>
        <p className={style.SectionText}>
          Ce site est une invitation à explorer les différentes dimensions de votre bien-être. Que ce soit pour calmer vos émotions,
          apaiser l’anxiété ou simplement retrouver de l’ancrage au quotidien, chaque ressource est pensée pour vous offrir
          des clés concrètes et accessibles.
        </p>
      </section>

      {/* Méthodes proposées */}
      <section className={style.SectionIntro}>
        <h2 className={style.SectionTitle}>Des outils pour chaque étape</h2>
        <p className={style.SectionText}>
          À travers des accompagnements et bientôt des vidéos, vous aurez accès à des techniques issues de la psychologie
          positive, de la pleine conscience et de l’intelligence émotionnelle. Mon objectif : vous aider à bâtir un espace
          intérieur solide, doux, et durable.
        </p>
      </section>

      {/* Communauté */}
      <section className={style.SectionIntro}>
        <h2 className={style.SectionTitle}>Rejoignez la communauté</h2>
        <p className={style.SectionText}>
          Des centaines de personnes ont déjà amorcé ce chemin. Vous n’êtes pas seul(e) ! Ensemble, avançons pas à pas vers plus de paix,
          plus de clarté et plus d’harmonie intérieure. 🌸
        </p>
      </section>
    </main>
  );
}

export default HomeRoot;
