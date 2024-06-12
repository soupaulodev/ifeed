import { publishedAtFormater } from "../../utils/publishedAtFormater";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { IPost } from "./IPost";
import styles from "./Post.module.css";
import { timeTitleFormater } from "../../utils/timeTitleFormater";
import { useState } from "react";
import { IComment } from "../Comment/IComment";

export function Post({ author, content, publishedAt, hashTags }: IPost) {
  const [comments, setComments] = useState<IComment[]>([
    {
      author: {
        name: "Paulo Marques",
        avatarUrl: "https://github.com/soupaulodev.png",
        role: "Web Developer",
      },
      content: "Muito bom, dev!",
      publishedAt: new Date("2024-06-11 22:13:30"),
      likes: 15,
    },
    {
      author: {
        name: "Paulo Marques",
        avatarUrl: "https://github.com/soupaulodev.png",
        role: "Web Developer",
      },
      content: "Muito bom, dev!a",
      publishedAt: new Date("2024-06-09 22:13:30"),
      likes: 33,
    },
    {
      author: {
        name: "Paulo Marques",
        avatarUrl: "https://github.com/Sampaioph.png",
        role: "Web Developer",
      },
      content: "Muito bom, dev!vv",
      publishedAt: new Date("2024-06-11 02:13:30"),
      likes: 38,
    },
  ]);
  const [newCommentContent, setNewCommentContent] = useState("");

  const publishedAtFormated = publishedAtFormater(
    new Date(publishedAt),
    new Date()
  );
  const timeTitle = timeTitleFormater(publishedAt);

  function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newCommentContent) {
      return;
    }

    setComments([
      ...comments,
      {
        author: {
          name: "Paulo Marques",
          avatarUrl: "https://github.com/soupaulodev.png",
          role: "Web Developer",
        },
        content: newCommentContent,
        publishedAt: new Date(),
        likes: 0,
      },
    ]);

    setNewCommentContent("");
  }

  function deleteComment(content: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment.content !== content;
    });

    setComments([...commentsWithoutDeletedOne]);
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={(e) => setNewCommentContent(e.target.value)}
          value={newCommentContent}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.content + comment.publishedAt}
              author={comment.author}
              content={comment.content}
              publishedAt={comment.publishedAt}
              likes={comment.likes}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
