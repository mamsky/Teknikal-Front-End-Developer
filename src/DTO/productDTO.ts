import { z } from "zod";
export type ProductDTO = {
  id?: string;
  nama: string;
  harga: number;
  stock: number;
  diskon: number;
  images: string;
  deskripsi: string;
};

export const ZodProductDTO = z.object({
  nama: z.string().min(1, "Exercise name is required").normalize(),
  harga: z.number().min(1, "Harga required"),
  stock: z.number().positive("Calories burned must be a positive number"),
  diskon: z.number().positive("Calories burned must be a positive number"),
  images: z.string().min(1, "Exercise name is required"),
  deskripsi: z.string().min(1, "Exercise name is required"),
});

export type ZodProductDTOS = z.infer<typeof ZodProductDTO>;

export const EditProductDTO = z.object({
  id: z.string().optional(),
  nama: z
    .string()
    .min(1, "Exercise name is required")
    .transform((str) => {
      if (str.length === 0) {
        return str;
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    }),
  harga: z.number().min(1, "Harga required"),
  stock: z.number().positive("Calories burned must be a positive number"),
  diskon: z.number().positive("Calories burned must be a positive number"),
  images: z.string().min(1, "Exercise name is required"),
  deskripsi: z.string().min(1, "Exercise name is required"),
});

export type EditProductDTOS = z.infer<typeof EditProductDTO>;
