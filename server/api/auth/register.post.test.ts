import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('bcrypt', () => ({
  default: {
    genSalt: vi.fn().mockResolvedValue('mockSalt'),
    hash: vi.fn().mockResolvedValue('mockHashedPassword'),
  },
}));

import registerHandler from './register.post';

describe('POST /api/auth/register', () => {
  let mockEvent: any;
  let mockPrisma: any;

  beforeEach(() => {
    vi.clearAllMocks();

    mockPrisma = {
      user: {
        create: vi.fn(),
      },
    };

    mockEvent = {
      context: {
        prisma: mockPrisma,
      },
      node: {
        req: {},
        res: {},
      },
    };
  });

  it('should test success path', async () => {
    (global.readBody as any).mockResolvedValue({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });

    mockPrisma.user.create.mockResolvedValue({
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
    });

    const response = await (registerHandler as any)(mockEvent);

    expect(response).toEqual({
      user: {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      },
    });
  });

  it('should return 400 if user creation fails (Email or Username already exists)', async () => {
    (global.readBody as any).mockResolvedValue({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });

    mockPrisma.user.create.mockRejectedValue(
      new Error('Unique constraint failed')
    );

    const response = await (registerHandler as any)(mockEvent);

    expect(global.setResponseStatus).toHaveBeenCalledWith(mockEvent, 400);
    expect(response).toEqual({
      message: 'Email or Username already exists',
    });
  });
});
