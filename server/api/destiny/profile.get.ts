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
  { maxAge: 60 * 60, name: 'destiny-profile', getKey: () => 'profile' }
);
