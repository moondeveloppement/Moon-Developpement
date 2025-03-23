import { Link } from "react-router-dom";

interface MenuNavRootProps {
  moduleMenuUl: string;
  moduleMenuLi: string;
  moduleMenuLink: string;

  moduleMenuLiTarget1?: string;
  moduleMenuLiTarget2?: string;
  moduleMenuLiTarget3?: string;
  moduleMenuLiTarget4?: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
  const { moduleMenuUl, moduleMenuLi, 
    moduleMenuLink, 
    moduleMenuLiTarget1, moduleMenuLiTarget2, 
    moduleMenuLiTarget3, moduleMenuLiTarget4 } = Props;


  return (
    <ul className={moduleMenuUl}>

      {/* Menu déroulant pour Portraits */}
      <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`}>
        <Link to="anxiete" className={moduleMenuLink}>Calmer l'Anxiété</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget2}`}>
        <Link to="emotion" className={moduleMenuLink}>Calmer les Emotions</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget3}`}>
        <Link to="lacher-prise" className={moduleMenuLink}>Lacher prise</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget4}`}>
        <Link to="contact" className={moduleMenuLink}>Contact</Link>
      </li>
    </ul>
  );
}

export default MenuNavRoot;
