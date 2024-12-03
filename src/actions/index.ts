import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { neon } from "@neondatabase/serverless"
import { DATABASE_URL } from "astro:env/server"

const sql = neon(DATABASE_URL);

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
      const { nombre_y_apellido, email, menu, comentarios_y_saludos } = input;
      await sql`INSERT INTO invitados (nombre_y_apellido, email, menu, comentarios_y_saludos) VALUES (${nombre_y_apellido}, ${email}, ${menu}, ${comentarios_y_saludos})`;
    },
  })
}
