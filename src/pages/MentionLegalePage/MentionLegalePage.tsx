import style from './MentionLegalePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import MentionLegaleRoot from '../../components/MentionLegaleRoot/MentionLegaleRoot';

function MentionLegalePage() {
  return (
    <div className={style.MentionLegalePage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <MentionLegaleRoot />
      </main>

      <footer className={style.Footer}></footer>
    </div>
  );
}

export default MentionLegalePage;
