import style from './ContactPage.module.css';
import NavRoot from '../../components/NavRoot/NavRoot';
import ContactRoot from '../../components/ContactRoot/ContactRoot';

function ContactPage() {
  return (
    <div className={style.ContactPage}>
      <header className={style.Header}>
        <NavRoot />
      </header>

      <main className={style.Main}>
        <ContactRoot />
      </main>

      <footer className={style.Footer}></footer>
    </div>
  );
}

export default ContactPage;
