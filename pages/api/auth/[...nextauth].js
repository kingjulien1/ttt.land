import { DgraphAdapter } from "@next-auth/dgraph-adapter"
import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  adapter: DgraphAdapter({
    endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT,
    authToken: process.env.DGRAPH_GRAPHQL_KEY,

    // you can omit the following properties if you are running an unsecure schema
    authHeader: process.env.AUTH_HEADER, // default: "Authorization",
    jwtSecret: process.env.SECRET,
  }),
})
