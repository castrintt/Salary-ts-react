import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <h1>Sistema Financeiro</h1>
      <div className={styles.utils}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
        <Link to="/register" className={styles.link}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
