import bcrypt from 'bcrypt';

async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('12345678', salt);
  return hashedPassword;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Check condition if user data are not provided

  if (!body?.username || !body?.email || !body?.password) {
    setResponseStatus(event, 400);
    return {
      message: 'Missing username, email or password',
    };
  } else if (body.password.length < 8) {
    setResponseStatus(event, 400);
    return {
      message: 'Password must be at least 8 characters',
    };
  }

  const hashedPassword = await hashPassword(body.password);

  // Try creating new user

  try {
    const user = await event.context.prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    return {
      user,
    };
  } catch (err) {
    setResponseStatus(event, 400);
    return {
      message: 'Email or Username already exists',
    };
  }
});
