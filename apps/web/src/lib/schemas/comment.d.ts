import { z } from "zod";
export declare const CommentSchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    authorId: z.ZodString;
    postId: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    upvotes: z.ZodNumber;
    downvotes: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: string;
    authorId: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    upvotes: number;
    downvotes: number;
}, {
    id: string;
    content: string;
    authorId: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    upvotes: number;
    downvotes: number;
}>;
