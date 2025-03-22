import style from './HomePage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import HomeRoot from '../../components/HomeRoot/HomeRoot';

function HomePage() {
  return (
    <div className={style.HomePage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <HomeRoot />
      </main>

      <footer className={style.Footer}></footer>
    </div>
  );
}

export default HomePage;
