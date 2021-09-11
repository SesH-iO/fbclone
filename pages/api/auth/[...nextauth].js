import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLENT_ID,
      clientSecret: process.env.FACEBOOK_CLENT_SECRECT,
    }),
    // ...add more providers here
  ],
});
