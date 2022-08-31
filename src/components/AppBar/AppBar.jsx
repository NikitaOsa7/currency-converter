import CurrentExchangeRate from '../CurrentExchangeRate';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <h1>КОНВЕРТЕР ВАЛЮТ</h1>
      <CurrentExchangeRate />
    </header>
  );
}
