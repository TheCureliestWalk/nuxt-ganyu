import type { User } from '~/types/typeUser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (user: any) => {
  const signedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(signedUser, process.env.NUXT_SECRET);
};
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // check if email and password are provided
  if (!body?.email || !body?.password) {
    setResponseStatus(event, 400);
    return {
      message: 'Missing email or password',
    };
  }

  const user: User | null = await event.context.prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (await bcrypt.compare(body.password, user.password)) {
    // create jwt token
    const token = generateToken(user);

    const storeToken = async () =>
      await event.context.prisma.userSession.create({
        data: {
          token,
          userId: user?.id,
          expiresAt: new Date(Date.now() + 1000 * 60 * 60),
        },
      });

    storeToken();
    setCookie(event, 'token', token);
    setCookie(event, 'user', user);
    if (process.client) {
      window.localStorage.setItem('userData', JSON.stringify(token));
    }
    return {
      access_token: token,
      user: {
        id: user?.id,
        username: user?.username,
        email: user?.email,
        avatar: user?.avatar,
      },
    };
  } else {
    setResponseStatus(event, 400);
    return {
      message: 'Wrong Email or Password',
    };
  }
});
