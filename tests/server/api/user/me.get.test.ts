import { describe, it, expect, vi, beforeEach } from 'vitest';
import meHandler from '@/server/api/user/me.get';
import prisma from '@/server/_app/prisma';

// Mock the prisma module
vi.mock('@/server/_app/prisma', () => ({
  default: {
    userSession: {
      findUnique: vi.fn(),
    },
  },
}));

describe('GET /api/user/me', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 401 if no token is provided in cookie or header', async () => {
    const event = {
      context: {
        tokenFromCookie: undefined,
        tokenFromHeader: undefined,
      },
    } as any;

    const result = await (meHandler as any)(event);

    expect(global.setResponseStatus).toHaveBeenCalledWith(event, 401);
    expect(result).toEqual({ message: 'Unauthorized' });
  });

  it('should return user from token in cookie', async () => {
    const mockUser = { id: 1, name: 'Test User' };
    const mockToken = 'cookie-token';

    const event = {
      context: {
        tokenFromCookie: mockToken,
        tokenFromHeader: undefined,
      },
    } as any;

    const mockFindUnique = vi.fn().mockReturnValue({
      user: vi.fn().mockResolvedValue(mockUser),
    });

    (prisma.userSession.findUnique as any) = mockFindUnique;

    const result = await (meHandler as any)(event);

    expect(mockFindUnique).toHaveBeenCalledWith({
      where: { token: mockToken },
    });
    expect(result).toEqual(mockUser);
  });

  it('should return user from token in header', async () => {
    const mockUser = { id: 2, name: 'Another User' };
    const mockToken = 'header-token';

    const event = {
      context: {
        tokenFromCookie: undefined,
        tokenFromHeader: mockToken,
      },
    } as any;

    const mockFindUnique = vi.fn().mockReturnValue({
      user: vi.fn().mockResolvedValue(mockUser),
    });

    (prisma.userSession.findUnique as any) = mockFindUnique;

    const result = await (meHandler as any)(event);

    expect(mockFindUnique).toHaveBeenCalledWith({
      where: { token: mockToken },
    });
    expect(result).toEqual(mockUser);
  });

  it('should prefer cookie token over header token if both are provided', async () => {
    const mockUser = { id: 3, name: 'Cookie Prefer User' };
    const mockCookieToken = 'cookie-token';
    const mockHeaderToken = 'header-token';

    const event = {
      context: {
        tokenFromCookie: mockCookieToken,
        tokenFromHeader: mockHeaderToken,
      },
    } as any;

    const mockFindUnique = vi.fn().mockReturnValue({
      user: vi.fn().mockResolvedValue(mockUser),
    });

    (prisma.userSession.findUnique as any) = mockFindUnique;

    const result = await (meHandler as any)(event);

    expect(mockFindUnique).toHaveBeenCalledWith({
      where: { token: mockCookieToken },
    });
    expect(result).toEqual(mockUser);
  });
});
