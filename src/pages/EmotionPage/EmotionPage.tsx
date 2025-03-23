import style from './EmotionPage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import EmotionRoot from '../../components/EmotionRoot/EmotionRoot';
import FooterRoot from '../../components/FooterRoot/FooterRoot';

function EmotionPage() {
  return (
    <div className={style.EmotionPage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <EmotionRoot />
      </main>

      <footer className={style.Footer}>
        <FooterRoot />
      </footer>
    </div>
  );
}

export default EmotionPage;
