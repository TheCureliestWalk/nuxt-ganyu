import { vi } from 'vitest';

export const mockReadBody = vi.fn();
export const mockSetResponseStatus = vi.fn();

global.defineEventHandler = (handler: any) => handler;
global.readBody = mockReadBody as any;
global.setResponseStatus = mockSetResponseStatus as any;
