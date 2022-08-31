import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className="footer__text">
        Currency Converter | &copy; 2022 | All Rights Reserved | Developed by{' '}
        <a
          className={s.githubLink}
          href="https://github.com/NikitaOsa7"
          noopener="true"
          noreferrer="true"
          rel="noreferrer"
          target="_blank"
        >
          NikitaOsa7
        </a>
      </p>
    </footer>
  );
}
