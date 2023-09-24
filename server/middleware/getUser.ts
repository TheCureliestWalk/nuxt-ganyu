export default defineEventHandler(async (event) => {
  const userFromCookie = getCookie(event, 'user');

  event.context.userFromCookie = userFromCookie;
});
