import style from './LacherPrisePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import LacherPriseRoot from '../../components/LacherPriseRoot/LacherPriseRoot';
import FooterRoot from '../../components/FooterRoot/FooterRoot';

function LacherPrisePage() {
  return (
    <div className={style.LacherPrisePage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <LacherPriseRoot />
      </main>

      <footer className={style.Footer}>
        <FooterRoot />
      </footer>
    </div>
  );
}

export default LacherPrisePage;
