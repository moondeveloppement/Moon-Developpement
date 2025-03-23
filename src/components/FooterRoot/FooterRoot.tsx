import { Link } from 'react-router-dom';
import style from './FooterRoot.module.css';

function FooterRoot() {
  return (
    <footer className={style.FooterRoot}>
      <div className={style.FooterContent}>
        <p className={style.Copyright}>
          &copy; {new Date().getFullYear()} Moon Développement. Tous droits réservés.
        </p>
        <nav className={style.FooterLinks}>
          <Link to="/mention-legale" className={style.Link}>Mentions Légales</Link>
          <Link to="/contact" className={style.Link}>Contact</Link>
          <a
            href="https://www.tiktok.com/@moon_developpement?_t=ZN-8uvqmBzXs7a&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className={style.Link}
          >
            TikTok
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default FooterRoot;