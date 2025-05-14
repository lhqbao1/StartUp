import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    sanity?: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
      bio: string;
    };
  }
  
  interface Session {
    user: User; // Ensure session includes your custom User type
  }
}
