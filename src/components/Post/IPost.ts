export interface IPost {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: Content[];
  publishedAt: Date;
  hashTags: string[];
}

interface Content {
  type: string;
  content: string;
}
