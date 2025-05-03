import { z } from 'zod';

// Schema di validazione per i dati personali
export const personalDataSchema = z.object({
  weight: z.number({ required_error: "Il peso è obbligatorio" }).positive("Il peso deve essere positivo"),
  height: z.number({ required_error: "L'altezza è obbligatoria" }).positive("L'altezza deve essere positiva").int("L'altezza deve essere un numero intero"),
  age: z.number({ required_error: "L'età è obbligatoria" }).positive("L'età deve essere positiva").int("L'età deve essere un numero intero"),
  gender: z.enum(['male', 'female', 'other'], { required_error: "Il genere è obbligatorio" }),
});

// Tipo derivato dallo schema
export type PersonalData = z.infer<typeof personalDataSchema>;

// Potremmo aggiungere tipi per il piano alimentare qui in futuro
// export interface MealPlan { ... }