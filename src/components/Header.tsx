import styles from "./Header.module.css";
import logo from "../assets/images/ifeed-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo iFeed" />
      <strong>iFeed</strong>
    </header>
  );
}
