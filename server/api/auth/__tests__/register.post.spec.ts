import { describe, it, expect, vi, beforeEach } from 'vitest'
import registerHandler from '../register.post'
import { mockReadBody, mockSetResponseStatus } from '../../../../test.setup'

// Mock bcrypt
vi.mock('bcrypt', () => ({
  default: {
    genSalt: vi.fn().mockResolvedValue('mockSalt'),
    hash: vi.fn().mockResolvedValue('mockHashedPassword'),
  }
}))

describe('POST /api/auth/register', () => {
  let mockEvent: any
  let mockPrisma: any

  beforeEach(() => {
    vi.clearAllMocks()

    mockPrisma = {
      user: {
        create: vi.fn(),
      },
    }

    mockEvent = {
      context: {
        prisma: mockPrisma,
      },
    }
  })

  it('should return 400 if user data is missing', async () => {
    mockReadBody.mockResolvedValueOnce({})

    const response = await (registerHandler as any)(mockEvent)

    expect(mockSetResponseStatus).toHaveBeenCalledWith(mockEvent, 400)
    expect(response).toEqual({ message: 'Missing username, email or password' })
  })

  it('should return 400 if password is less than 8 characters', async () => {
    mockReadBody.mockResolvedValueOnce({
      username: 'testuser',
      email: 'test@example.com',
      password: 'short',
    })

    const response = await (registerHandler as any)(mockEvent)

    expect(mockSetResponseStatus).toHaveBeenCalledWith(mockEvent, 400)
    expect(response).toEqual({ message: 'Password must be at least 8 characters' })
  })

  it('should create a new user successfully', async () => {
    mockReadBody.mockResolvedValueOnce({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    })

    const mockUser = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'mockHashedPassword',
    }

    mockPrisma.user.create.mockResolvedValueOnce(mockUser)

    const response = await (registerHandler as any)(mockEvent)

    expect(mockPrisma.user.create).toHaveBeenCalledWith({
      data: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'mockHashedPassword',
      },
    })
    expect(response).toEqual({ user: mockUser })
  })

  it('should return 400 if user already exists (prisma throws)', async () => {
    mockReadBody.mockResolvedValueOnce({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    })

    mockPrisma.user.create.mockRejectedValueOnce(new Error('Unique constraint failed'))

    const response = await (registerHandler as any)(mockEvent)

    expect(mockSetResponseStatus).toHaveBeenCalledWith(mockEvent, 400)
    expect(response).toEqual({ message: 'Email or Username already exists' })
  })
})
