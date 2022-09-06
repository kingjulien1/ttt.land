import NextAuth from "next-auth"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    /**
     * docs: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
     * config: https://developers.facebook.com/apps/
     *
     * ---
     *
     * Instagram display app required callback URL to be configured in your Facebook app and Facebook required you to use https even for localhost!
     * In order to do that, you either need to add an SSL to your localhost or use a proxy such as ngrok.
     *
     * Email address is not returned by the Instagram API.
     */
    /*     InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }), */
    /**
     * docs: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/
     * config: https://developers.facebook.com/apps/
     *
     * ---
     * Production applications cannot use localhost URLs to sign in with Facebook.
     * You need to use a dedicated development application in Facebook to use localhost callback URLs.
     *
     * Email address may not be returned for accounts created on mobile.
     */
    /*  FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }), */
    /**
     * docs: https://developers.google.com/identity/protocols/oauth2
     * config: https://console.developers.google.com/apis/credentials
     *
     * ---
     *
     * Google only provides Refresh Token to an application the first time a user signs in.
     *
     * Google also returns a email_verified boolean property in the OAuth profile.
     * You can use this property to restrict access to people with verified accounts at a particular domain.
     */
    /*     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }), */
  ],
})
