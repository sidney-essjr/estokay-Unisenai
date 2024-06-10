import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Campo obrigatório!" }),
});

export type FormLoginData = z.infer<typeof loginSchema>;

export const userRegistration = z.object({
  name: z.string().min(3, { message: "Campo obrigatório!" }).toLowerCase(),
  email: z.string().email({ message: "Insira um email valido!" }),
  password: z.string().min(8, { message: "Deve conter 8 caracteres" }),
  agreement: z.boolean().refine((val) => val, {
    message: "Você precisa aceitar os termos para continuar",
  }),
});

export type FormUserRegistration = z.infer<typeof userRegistration>;

export const donatorRegistration = z.object({
  name: z.string().min(3, { message: "Campo obrigatório!" }),
  cep: z
    .string()
    .min(8, { message: "Campo obrigatório!" })
    .regex(/^\d{8}$/, { message: "Digite apenas números!" }),
  address: z.string().min(3, {
    message: "Campo obrigatório!",
  }),
  city: z.string().min(3, { message: "Campo obrigatório!" }),
  district: z.string().min(3, { message: "Campo obrigatório!" }),
  phone: z
    .string()
    .regex(/^(\d{2})(\d{5})(\d{4})|(\d{2})(\d{4})(\d{4})$/, {
      message: "Digite apenas números!",
    })
    .optional(),
  number: z.string(),
  uf: z
    .string()
    .toUpperCase()
    .min(2, { message: "Campo obrigatório!" })
    .max(2, { message: "Valor invalido!" })
    .regex(
      /^AC|AL|AM|AP|BA|CE|DF|ES|EX|GO|MA|MG|MS|MT|MU|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TF|TO$/,
      { message: "Valor invalido!" }
    ),
});

export type FormDonatorRegistration = z.infer<typeof donatorRegistration>;
