import { publishedAtFormater } from "../../utils/publishedAtFormater";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { IPost } from "./IPost";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt, hashTags }: IPost) {
  const publishedAtFormated = publishedAtFormater(
    new Date(publishedAt),
    new Date()
  );
  const timeTitle = `${publishedAt.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })} às ${publishedAt.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={timeTitle} dateTime={publishedAt.toISOString()}>
          {publishedAtFormated}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p className={styles.hashtags}>
          {hashTags.map((tag) => {
            return (
              <a key={tag} href="#" target="_blank">
                {tag}
              </a>
            );
          })}
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
