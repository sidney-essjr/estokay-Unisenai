import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(5, { message: "Campo obrigatório!" }),
  password: z.string().min(1, { message: "Campo obrigatório!" }),
});

export type FormLoginData = z.infer<typeof loginSchema>;
