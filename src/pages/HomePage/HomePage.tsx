import style from './HomePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import HomeRoot from '../../components/HomeRoot/HomeRoot';
import FooterRoot from '../../components/FooterRoot/FooterRoot';

function HomePage() {
  return (
    <div className={style.HomePage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <HomeRoot />
      </main>

      <footer className={style.Footer}>
        <FooterRoot />
      </footer>
    </div>
  );
}

export default HomePage;
