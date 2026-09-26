import { describe, it, expect, vi } from 'vitest';
import { useUser } from './useUser';

// Mock Nuxt's useState globally
vi.stubGlobal('useState', (key: string, init: () => any) => {
  const ref = { value: init ? init() : undefined };
  return ref;
});

describe('useUser', () => {
  it('should initialize user as undefined by default', () => {
    const { user } = useUser();
    expect(user.value).toBeUndefined();
  });

  it('should set the user correctly when setUser is called', () => {
    const { user, setUser } = useUser();
    const mockUser = { id: 1, name: 'Test User' };

    setUser(mockUser);
    expect(user.value).toEqual(mockUser);
  });

  it('should clear the user when clearUser is called', () => {
    const { user, setUser, clearUser } = useUser();
    const mockUser = { id: 1, name: 'Test User' };

    setUser(mockUser);
    expect(user.value).toEqual(mockUser);

    clearUser();
    expect(user.value).toEqual({});
  });
});
