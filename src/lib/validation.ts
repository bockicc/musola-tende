import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Ime mora imati najmanje 2 karaktera'),
  email: z.string().email('Unesite validnu email adresu'),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]{6,20}$/, 'Unesite validan broj telefona')
    .optional()
    .or(z.literal('')),
  subject: z.string().min(3, 'Naslov mora imati najmanje 3 karaktera'),
  message: z.string().min(10, 'Poruka mora imati najmanje 10 karaktera'),
  files: z.array(z.instanceof(File)).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
