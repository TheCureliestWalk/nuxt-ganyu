export default eventHandler(async () => {
  const config = useRuntimeConfig();
  // @ts-ignore
  const { Response } = await $fetch(
    'https://www.bungie.net/platform/User/GetBungieAccount/4611686018492776400/254/',
    {
      headers: {
        'X-API-key': config.bungieApiKey,
      },
    }
  );
  return Response.bungieNetUser;
});
