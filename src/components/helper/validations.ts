import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Campo obrigatório!"),
});

export type FormLoginData = z.infer<typeof loginSchema>;

export const userRegistration = z.object({
  name: z.string().min(3, "Campo obrigatório!").toLowerCase(),
  email: z.string().email("Insira um email valido!"),
  password: z.string().min(8, "Deve conter 8 caracteres"),
  agreement: z.boolean().refine((val) => val, {
    message: "Você precisa aceitar os termos para continuar",
  }),
});

export type FormUserRegistration = z.infer<typeof userRegistration>;

export const donatorRegistration = z.object({
  name: z.string().min(3, "Campo obrigatório!"),
  cep: z
    .string()
    .min(8, "Campo obrigatório!")
    .regex(/^\d{8}$/, "Digite apenas números!"),
  address: z.string().min(3, "Campo obrigatório!"),
  city: z.string().min(3, "Campo obrigatório!"),
  district: z.string().min(3, "Campo obrigatório!"),
  phone: z
    .string()
    .min(1, "Campo obrigatório!")
    .regex(/^(\d{2})(\d{5})(\d{4})|(\d{2})(\d{4})(\d{4})$/, {
      message: "Digite apenas números!",
    })
    .optional(),
  number: z.string(),
  uf: z
    .string()
    .toUpperCase()
    .min(2, "Campo obrigatório!")
    .max(2, "Valor invalido!")
    .regex(
      /^AC|AL|AM|AP|BA|CE|DF|ES|EX|GO|MA|MG|MS|MT|MU|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TF|TO$/,
      { message: "Valor invalido!" }
    ),
});

export type FormDonatorRegistration = z.infer<typeof donatorRegistration>;

export const donationRegistration = z.object({
  item: z.string().min(3, "Campo obrigatório!"),
  type: z.enum(
    ["Alimento", "Vestuário", "Utensílio Doméstico", "Brinquedo", "Outros"],
    { message: "Selecione um tipo!" }
  ),
  quantity: z
    .string()
    .min(1, "Valor mínimo 1")
    .refine((value) => Number(value) > 0, {
      message: "Valor mínimo 1",
    }),
  size: z.enum(["Pequeno", "Médio", "Grande"], {
    message: "Selecione um tamanho!",
  }),
  donator: z.string().min(1, "Campo obrigatório!"),
  entryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Campo obrigatório" }),
  validity: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Campo obrigatório" }),
});

export type FormDonationRegistration = z.infer<typeof donationRegistration>;
