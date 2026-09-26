import { describe, it, expect, vi, afterEach } from 'vitest';
import { useProfile } from './useProfile';

const mockEq = vi.fn();
vi.stubGlobal('useState', vi.fn(() => ({ value: 'initial' })));
vi.stubGlobal('useSupabaseClient', vi.fn(() => ({ from: () => ({ select: () => ({ eq: mockEq }) }) })));
vi.stubGlobal('useSupabaseUser', vi.fn());

describe('useProfile', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('sets profile to null when no user', () => {
    (global.useSupabaseUser as any).mockReturnValue({ value: null });
    const result = useProfile();
    expect(result.value).toBeNull();
    expect(global.useSupabaseClient).not.toHaveBeenCalled();
  });

  it('fetches profile and updates state when user is present', async () => {
    (global.useSupabaseUser as any).mockReturnValue({ value: { id: 'u1' } });
    mockEq.mockResolvedValue({ data: [{ name: 'Test' }] });
    const result = useProfile();
    expect(global.useSupabaseClient).toHaveBeenCalled();
    expect(mockEq).toHaveBeenCalledWith('id', 'u1');
    await new Promise(process.nextTick);
    expect(result.value).toEqual({ name: 'Test' });
  });

  it('sets profile to null if fetch returns empty data', async () => {
    (global.useSupabaseUser as any).mockReturnValue({ value: { id: 'u1' } });
    mockEq.mockResolvedValue({ data: [] });
    const result = useProfile();
    await new Promise(process.nextTick);
    expect(result.value).toBeNull();
  });
});
