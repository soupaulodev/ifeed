import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { timeTitleFormater } from "../../utils/timeTitleFormater";
import { IComment } from "./IComment";
import { publishedAtFormater } from "../../utils/publishedAtFormater";

export function Comment({ id, author, content, publishedAt, likes }: IComment) {
  const publishedAtFormated = publishedAtFormater(
    new Date(publishedAt),
    new Date()
  );
  const timeTitle = timeTitleFormater(publishedAt);

  return (
    <div key={id} className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={timeTitle} dateTime={publishedAt.toISOString()}>
                {publishedAtFormated}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
