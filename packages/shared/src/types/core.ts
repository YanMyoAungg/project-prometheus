export interface User {
  id: string;
  name: string;
  email: string;
  expertise: string[];
}

export interface Post {
  id: string;
  content: string;
  isEducational: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
  upvotes: number;
  downvotes: number;
}
