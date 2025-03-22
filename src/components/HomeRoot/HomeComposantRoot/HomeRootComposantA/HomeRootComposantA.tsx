import style from './HomeRootComposantA.module.css';
import img from '../../../../assets/images/image-home.jpg';

function HomeRootComposantA() {
    return (
        <div className={style.HomeRootComposantA}>
            {/* Container 1 */}
            <figure className={style.img}>
                <img src={img} alt="Accueil" />
            </figure>

            {/* Container 2 */}
            <section className={style.ContainerIntro}>
                <h1 className={style.Title}>
                    Débloquez les ressources inexplorées de votre esprit !
                </h1>
                <p className={style.Text}>
                    Je m’appelle Mouna et je partage des accompagnements à distance afin d’aider les personnes 
                    qui le souhaitent à développer les compétences nécessaires pour affronter sereinement les 
                    épreuves quotidiennes. 
                </p>
            </section>
        </div>
    )
}

export default HomeRootComposantA;
