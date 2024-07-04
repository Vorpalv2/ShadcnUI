import * as z from "zod";

export const registerSchema = z.object({
  username: z
    .string({ message: "username must be in string format" })
    .min(3, { message: "must be greater than 3 characters" }),
  email: z.string().email("Invalid Email Entry").min(4, "Required"),
  password: z
    .string()
    .min(4, "Must be greater than 4")
    .max(10, "Must be smaller than 10"),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
