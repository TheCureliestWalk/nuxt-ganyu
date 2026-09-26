import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import handler from './profile.get';

describe('GET /api/destiny/profile', () => {
  const originalFetch = global.$fetch;

  beforeEach(() => {
    vi.stubGlobal('$fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    global.$fetch = originalFetch;
  });

  it('should return the bungieNetUser on success', async () => {
    const mockResponse = {
      Response: {
        bungieNetUser: { membershipId: '123', displayName: 'TestUser' },
      },
    };
    vi.mocked($fetch).mockResolvedValue(mockResponse as any);

    // Because of our mock, handler is just the inner async function
    const result = await (handler as any)({} as any);

    expect($fetch).toHaveBeenCalledWith(
      'https://www.bungie.net/platform/User/GetBungieAccount/4611686018492776400/254/',
      {
        headers: {
          'X-API-key': 'c4cc47abe75f4a8fae4c94963153bb34',
        },
      }
    );
    expect(result).toEqual({ membershipId: '123', displayName: 'TestUser' });
  });

  it('should propagate errors from $fetch', async () => {
    const fetchError = new Error('Bungie API is down');
    vi.mocked($fetch).mockRejectedValue(fetchError);

    await expect((handler as any)({} as any)).rejects.toThrow(
      'Bungie API is down'
    );
    expect($fetch).toHaveBeenCalled();
  });
});
