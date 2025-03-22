import style from './HomePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';

function HomePage() {
  return (
    <div className={style.HomePage}>
      <header className={style.header}>
        <NavRoot />
      </header>

      <main className={style.main}>
        <h1></h1>
      </main>

      <footer className={style.footer}></footer>
    </div>
  );
}

export default HomePage;
