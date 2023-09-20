import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import BungieProvider from 'next-auth/providers/bungie';
export default NuxtAuthHandler({
  // pages: {
  //   signIn: '/login',
  // },
  secret: process.env.NUXT_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR.
    BungieProvider.default({
      clientId: process.env.BUNGIE_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      headers: {
        'X-API-Key': process.env.BUNGIE_API_KEY,
      },
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR.
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req: any) {
        const user = {
          id: 1,
          name: 'Iho S.',
          email: 'ihosomnam4741@gmail.com',
          password: '12345678',
          bio: 'this is my private biology!',
        };
        console.log(credentials);

        callback: {
          console.log('callback');
        }
        // check if user exists
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          console.log('wrong credientials provided');
          return null;
        }
      },
    }),
  ],
});
