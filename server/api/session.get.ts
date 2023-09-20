import { getServerSession } from '#auth';
export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session) {
    console.log('no session found');
    return { status: 'notLoggedIn' };
  }
  console.log(session);
  return {
    status: 'loggedIn',
    text: 'im protected by an in-endpoint check',
    session,
  };
});
