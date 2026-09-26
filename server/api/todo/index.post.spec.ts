import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.stubGlobal('defineEventHandler', vi.fn((fn) => fn));
const mockReadBody = vi.fn();
vi.stubGlobal('readBody', mockReadBody);
const mockSetResponseStatus = vi.fn();
vi.stubGlobal('setResponseStatus', mockSetResponseStatus);

const handler = (await import('./index.post')).default as any;

describe('POST /api/todo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 401 when no token is provided', async () => {
    mockReadBody.mockResolvedValue({});

    const event = {
      context: {}
    };

    const response = await handler(event);

    expect(mockSetResponseStatus).toHaveBeenCalledWith(event, 401);
    expect(response).toEqual({ message: 'Unauthorized' });
  });

  it('should create a todo when authorized via cookie', async () => {
    mockReadBody.mockResolvedValue({ task: 'New Task' });

    const mockPrismaTodoCreate = vi.fn().mockResolvedValue({ id: 1, task: 'New Task' });

    const event = {
      context: {
        tokenFromCookie: 'token',
        userFromCookie: 'user123',
        prisma: {
          todo: {
            create: mockPrismaTodoCreate
          }
        }
      }
    };

    const response = await handler(event);

    expect(mockPrismaTodoCreate).toHaveBeenCalledWith({
      data: {
        userId: 'user123',
        task: 'New Task',
      }
    });
    expect(response).toEqual({ id: 1, task: 'New Task' });
  });

  it('should create a todo when authorized via header', async () => {
    mockReadBody.mockResolvedValue({ task: 'Another Task' });

    const mockPrismaTodoCreate = vi.fn().mockResolvedValue({ id: 2, task: 'Another Task' });

    const event = {
      context: {
        tokenFromHeader: 'token',
        userFromCookie: 'user456',
        prisma: {
          todo: {
            create: mockPrismaTodoCreate
          }
        }
      }
    };

    const response = await handler(event);

    expect(mockPrismaTodoCreate).toHaveBeenCalledWith({
      data: {
        userId: 'user456',
        task: 'Another Task',
      }
    });
    expect(response).toEqual({ id: 2, task: 'Another Task' });
  });
});
