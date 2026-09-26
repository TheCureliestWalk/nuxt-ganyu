import { vi } from 'vitest';

(global as any).defineEventHandler = (handler: any) => handler;
(global as any).setResponseStatus = vi.fn();
