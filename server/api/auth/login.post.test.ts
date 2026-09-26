import { describe, it, expect, vi, beforeEach } from 'vitest';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import loginHandler from './login.post';

// Mock dependencies
vi.mock('bcrypt', () => ({
  default: {
    compare: vi.fn(),
  },
}));
vi.mock('jsonwebtoken', () => ({
  default: {
    sign: vi.fn(() => 'mock-jwt-token'),
  },
}));

describe('POST /api/auth/login', () => {
  let event: any;

  beforeEach(() => {
    vi.clearAllMocks();
    event = {
      context: {
        prisma: {
          user: {
            findUnique: vi.fn(),
          },
          userSession: {
            create: vi.fn(),
          },
        },
      },
    };
  });

  it('should return 400 if email or password is missing', async () => {
    (global.readBody as any).mockResolvedValueOnce({
      email: 'test@example.com',
    });

    const result = await loginHandler(event);

    expect(global.setResponseStatus).toHaveBeenCalledWith(event, 400);
    expect(result).toEqual({ message: 'Missing email or password' });
  });

  it('should return 400 for wrong email or password', async () => {
    (global.readBody as any).mockResolvedValueOnce({
      email: 'test@example.com',
      password: 'password123',
    });
    event.context.prisma.user.findUnique.mockResolvedValueOnce({
      id: 1,
      email: 'test@example.com',
      password: 'hashedpassword',
    });
    (bcrypt.compare as any).mockResolvedValueOnce(false);

    const result = await loginHandler(event);

    expect(event.context.prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'password123',
      'hashedpassword'
    );
    expect(global.setResponseStatus).toHaveBeenCalledWith(event, 400);
    expect(result).toEqual({ message: 'Wrong Email or Password' });
  });

  it('should login successfully, set cookie and return token', async () => {
    (global.readBody as any).mockResolvedValueOnce({
      email: 'test@example.com',
      password: 'password123',
    });
    const user = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedpassword',
      avatar: 'avatar.png',
    };
    event.context.prisma.user.findUnique.mockResolvedValueOnce(user);
    (bcrypt.compare as any).mockResolvedValueOnce(true);

    const result = await loginHandler(event);

    expect(event.context.prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'password123',
      'hashedpassword'
    );
    expect(jwt.sign).toHaveBeenCalled();
    expect(global.setCookie).toHaveBeenCalledWith(
      event,
      'token',
      'mock-jwt-token'
    );
    expect(global.setCookie).toHaveBeenCalledWith(event, 'user', user);
    expect(result).toEqual({
      access_token: 'mock-jwt-token',
      user: {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        avatar: 'avatar.png',
      },
    });
  });

  it('should set item in localStorage if process.client is true', async () => {
    (global.readBody as any).mockResolvedValueOnce({
      email: 'test@example.com',
      password: 'password123',
    });
    const user = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedpassword',
      avatar: 'avatar.png',
    };
    event.context.prisma.user.findUnique.mockResolvedValueOnce(user);
    (bcrypt.compare as any).mockResolvedValueOnce(true);

    const originalProcessClient = process.client;
    (process as any).client = true;
    const mockSetItem = vi.fn();
    (global as any).window = { localStorage: { setItem: mockSetItem } };

    await loginHandler(event);

    expect(mockSetItem).toHaveBeenCalledWith(
      'userData',
      JSON.stringify('mock-jwt-token')
    );

    // restore
    (process as any).client = originalProcessClient;
    delete (global as any).window;
  });
});
