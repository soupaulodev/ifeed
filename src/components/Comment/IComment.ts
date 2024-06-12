export interface IComment {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: string;
  publishedAt: Date;
  likes: number;
}
