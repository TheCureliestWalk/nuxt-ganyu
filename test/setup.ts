import { vi } from 'vitest';

global.defineEventHandler = (handler) => handler;
global.readBody = vi.fn();
global.setResponseStatus = vi.fn();
global.setCookie = vi.fn();
global.process = { ...global.process, client: false } as any;
