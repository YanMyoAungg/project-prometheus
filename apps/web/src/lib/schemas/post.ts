// packages/shared/src/schemas/post.ts
import { z } from "zod";
import type { Post } from "@prometheus/shared/src/types/post";

export const PostSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(10).max(2000),
  isEducational: z.boolean(),
  authorId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
}) satisfies z.ZodType<Post>;
