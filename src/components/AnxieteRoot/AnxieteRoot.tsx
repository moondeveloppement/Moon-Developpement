import style from "./AnxieteRoot.module.css";
import AnxieteRootComposantA from "./AnxieteComposantRoot/AnxieteRootComposantA/AnxieteRootComposantA";

function AnxieteRoot() {
    return (
        <section className={style.AnxieteRoot}>
            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Calmer l'Anxiété
                </h1>
            </header>

            <AnxieteRootComposantA />
        </section>
    )
}

export default AnxieteRoot;
