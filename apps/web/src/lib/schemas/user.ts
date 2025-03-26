// packages/shared/src/schemas/user.ts
import { z } from "zod";
import type { User } from "@prometheus/shared/src/types/user";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  email: z.string().email(),
  expertise: z.array(z.string()).min(1),
}) satisfies z.ZodType<User>;
