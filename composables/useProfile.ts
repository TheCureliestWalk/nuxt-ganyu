import { Database } from '~/types/database.types';

export function useProfile() {
  const profile = useState<any>('profile');

  const user = useSupabaseUser();

  if (user.value) {
    useSupabaseClient<Database>()
      .from('profile')
      .select('*')
      .eq('id', user.value.id)
      .then((res) => (profile.value = res.data?.[0] ?? null));
  } else {
    profile.value = null;
  }

  return profile;
}
