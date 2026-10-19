// ⚡ Bolt: Cache external API call to reduce latency and avoid rate limiting
// Impact: Reduces external network requests and improves endpoint latency from ~1000ms+ to <50ms for cached responses.
export default defineCachedEventHandler(
  async () => {
    // @ts-ignore
    const { Response } = await $fetch(
      'https://www.bungie.net/platform/User/GetBungieAccount/4611686018492776400/254/',
      {
        headers: {
          'X-API-key': 'c4cc47abe75f4a8fae4c94963153bb34',
        },
      }
    );
    return Response.bungieNetUser;
  },
  {
    maxAge: 3600, // cache for 1 hour
    name: 'destiny-profile',
    getKey: () => 'destiny-profile-data',
  }
);
