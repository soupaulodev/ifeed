export interface IComment {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: string;
  publishedAt: Date;
  likes: number;
  onDeleteComment?: (content: string) => void;
}
