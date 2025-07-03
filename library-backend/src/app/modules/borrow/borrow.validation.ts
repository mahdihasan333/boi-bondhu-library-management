import { z } from "zod";

export const borrowValidationSchema = z.object({
  quantity: z.number().min(1, "Quantity must be at least 1"),
  dueDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "dueDate must be a valid date string",
  }),
});
