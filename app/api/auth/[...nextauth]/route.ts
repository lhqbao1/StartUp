import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: '/auth/signin', // Optional: custom sign-in page
  // },
  callbacks: {
    // async session({ session, token, user }) {
      async session({ session }) {
      // Attach additional session data if needed
      return session;
    },
    async jwt({ token, account }) {
      // Add access_token if using GitHub APIs later
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
