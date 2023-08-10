
import { login } from "@/modules/auth/login/services/login";
import { User } from "@/shared/interfaces/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        correo: {
          label: "email",
          type: "password",
          placeholder: "peterjackcc@gmail.com",
        },
        contrasena: { label: "email", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;
        const response: User = await login({
          email,
          password,
        });
        if (response.success) {
          return {...response, id: response.token} ;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/r/login",
    newUser: "/r/register",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
