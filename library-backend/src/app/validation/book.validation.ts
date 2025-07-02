import { z } from "zod";

export const bookValidationSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  genre: z.string().min(1),
  isbn: z.string().min(1),
  description: z.string().optional(),
  copies: z.number().min(1),
  available: z.boolean().optional(),
});
