import "./NavPC.css";
import { Link } from "react-router-dom";
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot";
import style from "../ComponentsNavRoot/MenuNavRoot.module.css";

function NavPC() {
    return (
        <nav className="NavPC">
            <div className="ContainerLogoNavPC">
                <p className="TitleNavPC">
                    <Link to="/" >
                        Moon Developpement
                    </Link>
                </p>
            </div>
            <div className="ContainerNavigationNavPC">
                <MenuNavRoot
                    moduleMenuUl={style.MenuUlPC}
                    moduleMenuLi={style.MenuLiPC}
                    moduleMenuLink={style.MenuLinkPC}
                />
            </div>
        </nav>
    )
}

export default NavPC;
