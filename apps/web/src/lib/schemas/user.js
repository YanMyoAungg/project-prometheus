"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
// packages/shared/src/schemas/user.ts
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    expertise: zod_1.z.array(zod_1.z.string()).min(1),
});
