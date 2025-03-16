// packages/shared/src/schemas/comment.ts
import { z } from "zod";
import type { Comment } from "@prometheus/shared/src/types/comment";

export const CommentSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(1).max(500),
  authorId: z.string().uuid(),
  postId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  upvotes: z.number().int().min(0),
  downvotes: z.number().int().min(0),
}) satisfies z.ZodType<Comment>;
