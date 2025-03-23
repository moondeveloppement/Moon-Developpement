import style from './ContactRoot.module.css';

function ContactRoot() {
    return (
        <section className={style.contactContainer}>
            <h1 className={style.title}>Contactez-nous</h1>
            <p className={style.description}>
                Vous avez une question, un besoin ou simplement envie d'échanger ?
                N'hésitez pas à nous contacter ou à nous suivre sur les réseaux sociaux.
            </p>

            <div className={style.buttons}>
                <a
                    href="mailto:moondeveloppementstarter@gmail.com"
                    className={style.mailButton}
                >
                    📧 Envoyer un e-mail
                </a>

                <a
                    href="https://www.tiktok.com/@moon_developpement?_t=ZN-8uvqmBzXs7a&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.tiktokLink}
                >
                    🎵 Suivez-nous sur TikTok
                </a>
            </div>
        </section>
    );
}

export default ContactRoot;
