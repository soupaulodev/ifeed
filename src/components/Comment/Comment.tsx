import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { timeTitleFormater } from "../../utils/timeTitleFormater";
import { IComment } from "./IComment";
import { publishedAtFormater } from "../../utils/publishedAtFormater";
import { useState } from "react";

export function Comment({
  author,
  content,
  publishedAt,
  likes,
  onDeleteComment = () => {},
}: IComment) {
  const [likeCount, setLikeCount] = useState(likes || 0);
  const publishedAtFormated = publishedAtFormater(
    new Date(publishedAt),
    new Date()
  );
  const timeTitle = timeTitleFormater(publishedAt);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
