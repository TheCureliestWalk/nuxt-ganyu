import { vi } from 'vitest';

(global as any).defineEventHandler = vi.fn((handler) => handler);
(global as any).readBody = vi.fn();
(global as any).setResponseStatus = vi.fn();
