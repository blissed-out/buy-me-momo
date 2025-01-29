"use server";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/Models/User";

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // connect to the data base
        const client = await mongoose.connect("mongodb://localhost:27017/momo");

        // check if user is already in databse
        const currentUser = await User.findOne({ username: user.name });

        if (!currentUser) {
          const newUser = new User({
            username: user.name,
            profilePic: user.image,
          });
          await newUser.save();
        }

        return true;
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
