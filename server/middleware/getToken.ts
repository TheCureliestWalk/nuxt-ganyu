export default defineEventHandler(async (event) => {
  const tokenFromCookie = getCookie(event, 'token');
  const tokenFromHeader = getHeader(event, 'Authorization')?.slice(7);
  const token = tokenFromCookie || tokenFromHeader;

  event.context.tokenFromCookie = tokenFromCookie;
  event.context.tokenFromHeader = tokenFromHeader;
  event.context.token = token;
});
