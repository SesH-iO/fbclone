import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: '276557334049180',
      clientSecret: '60c6b90943dbd73ce8a5256c08d555ae',
    }),
    // ...add more providers here
  ],
});
