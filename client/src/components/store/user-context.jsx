import {createContext, useEffect} from 'react';
import { useMutation } from 'react-query';
import { fetchProfile, loginUser, logoutUser } from '../lib/apis';

const UserContext = createContext({
    loginUserMutation: null,
    user: null,
    logoutMutation: null
});

export const UserContextProvider = (props) => {

    const { data: userProfile, mutate: fetchUserProfile } = useMutation(fetchProfile);
    const loginUserMutation = useMutation(loginUser, {
        onSuccess: () => {
            fetchUserProfile();
        }
    });
    const logoutMutation = useMutation(logoutUser, {
        onSuccess: () => {
            fetchUserProfile();
        }
    });

    useEffect(() => {
        fetchUserProfile();
    }, [])

    const context = {
        loginUserMutation,
        user: userProfile,
        logoutMutation: logoutMutation
    }

    return (<UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>)
}

export default UserContext;