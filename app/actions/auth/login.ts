"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const credentials = Object.fromEntries(formData);
    console.log("formData:", credentials);

    // Ensure formData has email and password
    if (!credentials.email || !credentials.password) {
      return "Faltan email o contraseña";
    }

    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false, // Prevent redirect in Server Action
    });

    return null; // Success
  } catch (error) {
    console.error("Authentication error:", error); // Log the error
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Email o contraseña inválidos";
        default:
          return "Ocurrió un error al iniciar sesión";
      }
    }
    return "Error desconocido: " + (error instanceof Error ? error.message : String(error));
  }
}