import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { useUserStore } from './userStore';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with correct default state', () => {
    const store = useUserStore();
    expect(store.token).toBe('');
    expect(store.username).toBe('');
    expect(store.name).toBe('');
    expect(store.email).toBe('');
    expect(store.avatar).toBe('');
  });

  it('updates user state correctly via updateUser', () => {
    const store = useUserStore();
    store.updateUser(
      'test-token',
      'testuser',
      'Test User',
      'test@example.com',
      'test-avatar.png'
    );

    expect(store.token).toBe('test-token');
    expect(store.username).toBe('testuser');
    expect(store.name).toBe('Test User');
    expect(store.email).toBe('test@example.com');
    expect(store.avatar).toBe('test-avatar.png');
  });
});
