import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');
export const requiredString = z.string().min(1, 'This field is required');

export const passwordSchema = z.string().min(8, 'Password must be at least 8 characters');

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginFormValues = z.infer<typeof loginSchema>; 