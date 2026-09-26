import { describe, it, expect, vi, beforeEach } from 'vitest';

const defineEventHandlerMock = vi.fn((handler) => handler);
const readBodyMock = vi.fn();
const setResponseStatusMock = vi.fn();

vi.stubGlobal('defineEventHandler', defineEventHandlerMock);
vi.stubGlobal('readBody', readBodyMock);
vi.stubGlobal('setResponseStatus', setResponseStatusMock);

describe('POST /api/post', () => {
  let handler: any;

  beforeEach(async () => {
    vi.resetModules();
    handler = (await import('./index.post')).default;
  });

  it('should return 400 if body is missing required fields', async () => {
    readBodyMock.mockResolvedValueOnce({ title: 'Title' }); // Missing content and authorId

    const event = { context: { prisma: { post: { create: vi.fn() } } } };

    // @ts-ignore
    const response = await handler(event as any);

    expect(setResponseStatusMock).toHaveBeenCalledWith(event, 400);
    expect(response).toEqual({
      message: "Please ensure the request has 'title', 'content', and 'authorId' provided.",
    });
  });

  it('should return 400 if body is null', async () => {
    readBodyMock.mockResolvedValueOnce(null);

    const event = { context: { prisma: { post: { create: vi.fn() } } } };

    // @ts-ignore
    const response = await handler(event as any);

    expect(setResponseStatusMock).toHaveBeenCalledWith(event, 400);
    expect(response).toEqual({
      message: "Please ensure the request has 'title', 'content', and 'authorId' provided.",
    });
  });

  it('should create post if body contains all fields', async () => {
    readBodyMock.mockResolvedValueOnce({ title: 'Title', content: 'Content', authorId: 1 });

    const createMock = vi.fn().mockResolvedValueOnce({ id: 1, title: 'Title', content: 'Content', authorId: 1 });
    const event = { context: { prisma: { post: { create: createMock } } } };

    // @ts-ignore
    const response = await handler(event as any);

    expect(createMock).toHaveBeenCalledWith({
      data: { title: 'Title', content: 'Content', authorId: 1 }
    });
    expect(response).toEqual({ id: 1, title: 'Title', content: 'Content', authorId: 1 });
  });
});
