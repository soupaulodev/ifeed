import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/soupaulodev.png" />
          <div className={styles.authorInfo}>
            <strong>Paulo Marques</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>{" "}
        <p>
          <a href="" target="_blank">
            👉 /doctorcare
          </a>
        </p>
        <p className={styles.hashtags}>
          <a href="" target="_blank">
            #novoprojeto
          </a>
          <a href="" target="_blank">
            #nlw
          </a>
          <a href="" target="_blank">
            #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
