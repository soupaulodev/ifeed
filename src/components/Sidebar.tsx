import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQGFrTuoZV_Vkg/profile-displaybackgroundimage-shrink_350_1400/0/1711853783886?e=1723680000&v=beta&t=SZVcx_EtORgNfye7_tUV5T12XQKpEigGdLWTXet5iM4"
      />
      <img
        className={styles.avatar}
        src="https://github.com/soupaulodev.png"
        alt="Foto de perfil do Paulo"
      />
      <div className={styles.profile}>
        <strong>Paulo Marques</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
