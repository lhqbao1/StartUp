import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { client } from "@/sanity/lib/client";
import {  USER_EXISTING_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

interface GitHubProfile {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  email: string;
  bio: string;
}

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
    async signIn({user,profile,account}){

      const githubProfile = profile as GitHubProfile;
      let author;
      //Check user is exist
      const existingUser = await client.fetch(USER_EXISTING_QUERY, {id: user?.id})

      if (!existingUser) {
        author = await writeClient.create({
          _type: "author",
          id: githubProfile.id,
          name: user?.name || "",
          username: githubProfile?.login || "",
          email: githubProfile?.email || "",
          image: githubProfile?.avatar_url || "",
          bio: githubProfile?.bio || "",
        });
      } else {
        author = existingUser;
      }

      // Store the sanity author data in token
      // Ensure 'sanity' has all required fields
        user.sanity = {
          id: author.id,
          name: author.name,
          username: author.username,
          email: author.email,
          image: author.image,
          bio: author.bio,
        };      
        return true;
    },

   

     async session({ session, token }) {
      // Attach additional session data if needed
      Object.assign(session.user, {id: token.sub})
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
