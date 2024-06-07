import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Campo obrigatório!" }),
});

export type FormLoginData = z.infer<typeof loginSchema>;

export const userRegistration = z.object({
  name: z.string().min(3, { message: "Campo obrigatório" }).toLowerCase(),
  email: z.string().email({ message: "Insira um email valido" }),
  password: z.string().min(8, { message: "Deve conter 8 caracteres" }),
  agreement: z.boolean().refine((val) => val, {
    message: "Você precisa aceitar os termos para continuar",
  }),
});

export type FormUserRegistration = z.infer<typeof userRegistration>;
