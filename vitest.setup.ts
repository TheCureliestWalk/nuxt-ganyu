import { vi } from 'vitest';

vi.stubGlobal('defineEventHandler', (handler: any) => handler);
vi.stubGlobal('getHeader', vi.fn());
vi.stubGlobal('setResponseStatus', vi.fn());
