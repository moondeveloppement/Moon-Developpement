import style from './HomePC.module.css';

import HomeRootComposantA from '../HomeComposantRoot/HomeRootComposantA/HomeRootComposantA';

function HomePC() {
    return (
        <section className={style.HomePC}>
            <HomeRootComposantA />
        </section>
    )
}

export default HomePC;
