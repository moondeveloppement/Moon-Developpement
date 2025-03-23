import style from "./LacherPriseRoot.module.css";

function LacherPriseRoot() {
    return (
        <section className={style.LacherPriseRoot}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Lacher Prises
                </h1>
            </header>

            <article className={style.LacherPriseRootComposantA}>
                <h2 className={style.TitleH2}>
                    LÂCHE PRISE : Libérez-vous de l'emprise Toxique du Mental
                </h2>

                <p className={style.Text}>
                    L'approche Minimaliste pour en finir avec les charges mentales, l'omniprésence du contrôle et le sentiment de devoir tout gérer.
                </p>
            </article>
            {/*--------------------------------------------------*/}
            <article className={style.LacherPriseRootComposantB}>
                <h2 className={style.TitleH2}>
                    Et si nous nous étions habitués à un bavardage toxique ?
                </h2>

                <p className={style.Text}>
                    Sans nous en rendre compte, nous pourrions bien laisser notre petite voix intérieure filer un mauvais coton...
                </p>

                <p className={style.Text}>
                    Et lui laisser dénaturer nos perceptions au point de rendre le quotidien pénible.
                </p>
                
                <p className={style.Text}>
                    Si bien que certaines pensées nous empêcheraient de voir le monde avec douceur.
                </p>

                <p className={style.Text}>
                    Et nous ne pourrions même plus percevoir la beauté ou la bienveillance...
                </p>

                <p className={style.Text}>
                    Comme s'il devait toujours y avoir "Anguille sous Roche !"
                </p>
            </article>
            {/*--------------------------------------------------*/}
            <article className={style.LacherPriseRootComposantC}>
                <h2 className={style.TitleH2}>
                    Cela peut prendre des formes multiples…
                </h2>

                <p className={style.Text}>
                    Pour certaines personnes, c’est un processus silencieux. Il se dévoile subtilement dans les songes et est façonné par le regret, 
                    le manque, la culpabilité ;
                </p>

                <p className={style.Text}>
                    Ou autre chose…
                </p>
                
                <p className={style.Text}>
                    Alors dans le silence, nous nous renfermons sur nous-mêmes.
                </p>

                <p className={style.Text}>
                    Pour d’autres c’est très visible…
                </p>

                <p className={style.Text}>
                    Il s’exprime par des exigences, des attentes, des certitudes. On se plaint, on s’exclame, on se dispute…
                </p>

                <p className={style.Text}>
                    On RÂLE !
                </p>
            </article>
            {/*--------------------------------------------------*/}
            <article className={style.LacherPriseRootComposantD}>
                <h2 className={style.TitleH2}>
                    Quelle qu’en soit l’expression :
                </h2>

                <p className={style.Text}>
                    C’est une souffrance intérieure qui s’affirme. <br />
                    Et bien souvent, elle est liée à notre passé et/ou conditionnée par notre peur de l’avenir.
                </p>

                <p className={style.Text}>
                    Nous ne voulons plus revivre ça ; nous aspirons à tout autre un avenir. <br />
                    Mais rien ne change…
                </p>
            </article>
        </section>
    )
}

export default LacherPriseRoot;
