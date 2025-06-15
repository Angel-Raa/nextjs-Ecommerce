'use server'

import { signIn } from '@/auth.config'
import { AuthError } from 'next-auth'

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      rememberMe: formData.get('rememberMe') === 'true',
      redirect: false,
    })
    
    console.log({formData});
    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password'
        default:
          return 'Something went wrong'
      }
    }
    throw "CredentialsSignin"
  }
}