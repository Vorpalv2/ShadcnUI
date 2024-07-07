import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid Email Entry").min(4, "Required"),
  password: z
    .string()
    .min(6, "Password must be greater than 6")
    .max(10, "Password must be smaller than 10"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
