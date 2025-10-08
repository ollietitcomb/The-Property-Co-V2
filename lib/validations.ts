import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please provide a valid phone number").max(20),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

