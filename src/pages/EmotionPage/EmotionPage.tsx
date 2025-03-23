import style from './EmotionPage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import EmotionRoot from '../../components/EmotionRoot/EmotionRoot';

function EmotionPage() {
  return (
    <div className={style.EmotionPage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <EmotionRoot />
      </main>

      <footer className={style.Footer}></footer>
    </div>
  );
}

export default EmotionPage;
