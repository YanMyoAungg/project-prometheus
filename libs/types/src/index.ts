export type ReactionType = "like" | "dislike" | "love" | "funny" | "inspiring";

export type Reaction = {
  id: string;
  reaction: ReactionType;
  userId: User["id"];
  parentId: Post["id"] | Comment["id"]; // The id of the Post or Comment being reacted to
  type: "Post" | "Comment"; // Discriminator indicating what kind of target it is
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string; // UUID
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  posts?: Post[];
  comments?: Comment[];
};

export type Post = {
  id: string; // UUID
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  status: "published" | "deleted" | "flagged";
  tags?: Tag[];
  comments?: Comment[];
  author?: User;
  reactions?: Reaction[]; // A list of Reaction objects (each with reaction type and userId)
  imageUrls?: string[]; // Allows for one or more images
};

export type Comment = {
  id: string; // UUID
  content: string;
  postId: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  post?: Post;
  author?: User;
  reactions?: Reaction[];
  imageUrls?: string;
  replies?: Comment[]; // Nested replies
  parentId?: string; // If it's a reply, the parent's id
  status: "published" | "deleted" | "flagged";
  parent?: Comment;
};

export type Tag = {
  id: string;
  name: string;
  posts?: Post[];
  createdAt: Date;
  updatedAt: Date;
};
