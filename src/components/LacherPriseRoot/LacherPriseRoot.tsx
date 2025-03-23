import style from "./LacherPriseRoot.module.css";

function LacherPriseRoot() {
    return (
        <section className={style.LacherPriseRoot}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Calmer les LacherPrises
                </h1>
            </header>

            <article className={style.LacherPriseRootComposantA}>
                <h2 className={style.TitleH2}>
                    CALMER ÉMOTION : L'art de maîtriser ses émotions et celles des autres
                </h2>

                <p className={style.Text}>
                    La méthode pour calmer, décrypter et vous libérer des émotions douloureuses sans les réprimer ni rompre avec vous-mêmes.
                </p>
            </article>
            {/*--------------------------------------------------*/}
            <article className={style.LacherPriseRootComposantB}>
                <h2 className={style.TitleH2}>
                    Et si tes émotions étaient des Guides ?
                </h2>

                <p className={style.Text}>
                    Imagine que les émotions « douloureuses » ne soient plus des obstacles à surmonter... <br />
                    Mais de puissants alliés pour agir en accord avec tes convictions.
                </p>

                <p className={style.Text}>
                    Je ne sais pas ce que tu penses… <br />
                    Mais la majorité des gens font erreur !
                </p>
                
                <p className={style.Text}>
                    Ils ont des idées reçues très ancrées sur leurs émotions. 
                </p>

                <p className={style.Text}>
                    Ils ne s’en rendent pas compte, mais ces idées sabotent leur potentiel ! 
                </p>
            </article>
        </section>
    )
}

export default LacherPriseRoot;
