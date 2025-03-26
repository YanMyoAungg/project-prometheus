"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
// packages/shared/src/schemas/comment.ts
const zod_1 = require("zod");
exports.CommentSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    content: zod_1.z.string().min(1).max(500),
    authorId: zod_1.z.string().uuid(),
    postId: zod_1.z.string().uuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    upvotes: zod_1.z.number().int().min(0),
    downvotes: zod_1.z.number().int().min(0),
});
