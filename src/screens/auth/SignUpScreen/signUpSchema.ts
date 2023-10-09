import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  firstName: z
    .string()
    .min(5, 'O nome deve ter no mínimo 5 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .transform(stringUtils.capitalizeFirsLetter),
  lastName: z
    .string()
    .min(5, 'O nome deve ter no mínimo 5 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .transform(stringUtils.capitalizeFirsLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
