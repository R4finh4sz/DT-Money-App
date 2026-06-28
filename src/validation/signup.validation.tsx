import z from 'zod/v3';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Nome e obrigatorio')
      .min(3, 'Digite seu nome completo'),
    email: z
      .string()
      .min(1, 'E-mail e obrigatorio')
      .email('Digite um e-mail valido'),
    password: z
      .string()
      .min(1, 'Senha e obrigatoria')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirme sua senha'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas nao conferem',
    path: ['confirmPassword'],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
