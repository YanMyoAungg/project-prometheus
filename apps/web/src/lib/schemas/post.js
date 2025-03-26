"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
// packages/shared/src/schemas/post.ts
const zod_1 = require("zod");
exports.PostSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    content: zod_1.z.string().min(10).max(2000),
    isEducational: zod_1.z.boolean(),
    authorId: zod_1.z.string().uuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
