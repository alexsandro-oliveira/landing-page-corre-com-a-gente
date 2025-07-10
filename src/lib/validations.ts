import { z } from 'zod'

export const formSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),

  email: z
    .string()
    .email('Email deve ter um formato válido')
    .min(1, 'Email é obrigatório'),

  telefone: z
    .string()
    .min(9, 'Telefone deve ter pelo menos 9 dígitos')
    .max(15, 'Telefone deve ter no máximo 15 dígitos')
    .regex(
      /^[0-9+\s()-]+$/,
      'Telefone deve conter apenas números e símbolos válidos'
    ),

  distancia: z.enum(['2km', '5km'], {
    required_error: 'Selecione uma distância',
    invalid_type_error: 'Distância deve ser 2km ou 5km',
  }),
})

export type FormData = z.infer<typeof formSchema>
