import { vi, describe, it, expect, beforeEach } from 'vitest';

// These use the global mocks set up in vitest.setup.ts
import protectedHandler from './protected.get';

describe('protected.get handler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 401 if no token is provided', async () => {
    // getHeader is mocked globally
    (globalThis as any).getHeader.mockReturnValue(null);
    const event = {} as any;

    const result = await protectedHandler(event);

    expect((globalThis as any).setResponseStatus).toHaveBeenCalledWith(
      event,
      401
    );
    expect(result).toEqual({ message: 'no token found.' });
  });

  it('should return 401 if token is not found in db', async () => {
    (globalThis as any).getHeader.mockReturnValue('Bearer invalid_token');
    const mockFindFirst = vi.fn().mockResolvedValue(null);
    const event = {
      context: {
        prisma: {
          userSession: {
            findFirst: mockFindFirst,
          },
        },
      },
    } as any;

    const result = await protectedHandler(event);

    expect((globalThis as any).getHeader).toHaveBeenCalledWith(
      event,
      'Authorization'
    );
    expect(mockFindFirst).toHaveBeenCalledWith({
      where: {
        token: 'invalid_token',
      },
    });
    expect((globalThis as any).setResponseStatus).toHaveBeenCalledWith(
      event,
      401
    );
    expect(result).toEqual({ message: 'invalid token.' });
  });

  it('should return the token if it is found in db', async () => {
    (globalThis as any).getHeader.mockReturnValue('Bearer valid_token');
    const mockToken = { id: 1, token: 'valid_token', userId: 1 };
    const mockFindFirst = vi.fn().mockResolvedValue(mockToken);
    const event = {
      context: {
        prisma: {
          userSession: {
            findFirst: mockFindFirst,
          },
        },
      },
    } as any;

    const result = await protectedHandler(event);

    expect((globalThis as any).getHeader).toHaveBeenCalledWith(
      event,
      'Authorization'
    );
    expect(mockFindFirst).toHaveBeenCalledWith({
      where: {
        token: 'valid_token',
      },
    });
    expect((globalThis as any).setResponseStatus).not.toHaveBeenCalled();
    expect(result).toEqual({ token: mockToken });
  });
});
