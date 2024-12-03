import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  formulario: defineAction({
    accept: 'form',
    input: z.object({
      nombre_y_apellido: z.string(),
      email: z.string(),
      menu: z.enum(['menu-principal', 'menu-vegetariano', 'menu-vegano', 'menu-celiaco']),
      comentarios_y_saludos: z.string().optional(),
    }),
    handler: async (input) => {
      console.log(input);
    },
  })
}
