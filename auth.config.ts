import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/database/prisma";
import bcrypt from "bcryptjs";

// Esquema de validación para las credenciales
const CredentialsSchema = z.object({
  email: z.string().email({ message: "Correo electrónico inválido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

// Interfaz para el modelo Usuario (basada en tu esquema)
/*
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  emailVerified?: Date | null;
  rol: "ADMIN" | "USER";
  image?: string | null;
}
*/
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/sign",
  },
  providers: [
    Credentials({
      // Define las credenciales esperadas
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Valida las credenciales
        const parsedCredentials = CredentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          throw new Error(parsedCredentials.error.issues[0].message);
        }

        const { email, password } = parsedCredentials.data;

        try {
          // Busca el usuario por correo (normalizado a minúsculas)
          const user = await prisma.users.findUnique({
            where: { email: email.toLowerCase() },
          });

          if (!user) {
            throw new Error("Usuario no encontrado");
          }

          // Verifica la contraseña
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Contraseña incorrecta");
          }

          const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            password: _password,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            confirmPassword: _confirmPassword,
            ...safeUser
          } = user;

          return safeUser;
        } catch (error) {
          console.error("Error en la autenticación:", error);
          return null;
        }
      },
    }),
  ],
  


};

export const { signIn, signOut, auth } = NextAuth(authConfig);
