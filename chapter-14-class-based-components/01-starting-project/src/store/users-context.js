import { createContext } from 'react';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

export const UsersContext = createContext({
    users: [],
});

const UsersContextProvider = ({ children }) => {
    const ctx = {
        users: DUMMY_USERS,
    };
    return <UsersContext value={ctx}>{children}</UsersContext>;
};

export default UsersContextProvider;
