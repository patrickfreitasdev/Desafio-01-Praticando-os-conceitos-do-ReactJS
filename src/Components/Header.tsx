import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1><img src={rocket} alt='Logotipo do Todo' />to<span>do</span></h1>
    </header>
  )
}

