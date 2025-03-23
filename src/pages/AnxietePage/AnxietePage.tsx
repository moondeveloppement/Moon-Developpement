import style from './AnxietePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import AnxieteRoot from '../../components/AnxieteRoot/AnxieteRoot';

function AnxietePage() {
  return (
    <div className={style.AnxietePage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <AnxieteRoot />
      </main>

      <footer className={style.Footer}></footer>
    </div>
  );
}

export default AnxietePage;
