export default defineEventHandler(async (event) => {
  // the path must add '/' at inital route
  const protectedRoute = ['/api/todo', '/api/post', '/api/user/me'];

  if (!event.context.token && protectedRoute.includes(event.path)) {
    setResponseStatus(event, 401);
    return {
      message: 'You are unauthorized by middleware',
    };
  }
});
