export const useUser = () => {
    const { data: userData } = useAuth();
    
    const user = useState('user', () => ({
        userData
    }));

    
return user
};

