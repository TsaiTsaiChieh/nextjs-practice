import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label: "Username", type: "text", placeholder: "jsmith"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials, req) {
        await connect()
        try {
          const user = await User.findOne({email: credentials.email})
          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
            if (isPasswordCorrect) {
              console.log(user)
              return user
            } else {
              throw new Error("Wrong credentials")
            }
          } else {
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error)
          return null
        }
      }
    }),
  ],
  pages: {
    error: '/dashboard/login'
  }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}