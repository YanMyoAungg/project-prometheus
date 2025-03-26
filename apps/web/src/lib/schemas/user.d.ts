import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    expertise: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    email: string;
    expertise: string[];
}, {
    id: string;
    name: string;
    email: string;
    expertise: string[];
}>;
