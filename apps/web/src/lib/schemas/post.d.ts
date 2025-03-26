import { z } from "zod";
export declare const PostSchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    isEducational: z.ZodBoolean;
    authorId: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    isEducational: boolean;
}, {
    id: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    isEducational: boolean;
}>;
