import { createContext, useState } from 'react'

import getUsers from '../mocks/users.mocks';
import { USERS } from '../mocks/users.mocks';
import { useEffect } from 'react';

const usersContext = createContext();

const UsersListProvider = ({ children }) => {
    const [sortedOption, setSortedOption] = useState('default');
    const [usersOrder, setUsersOrder] = useState([])

    const handleRoleSort = (e) => {
        setSortedOption(e.target.value);

        let sortedUsers = [...USERS];

        switch (e.target.value) {
            case "admin":
                sortedUsers.sort((a, b) => (
                    a.role === "admin" ? -1 : b.role === "admin" ? 1 : 0));
                break;
            case "moderator":
                sortedUsers.sort((a, b) => (
                    a.role === "moderator" ? -1 : b.role === "moderator" ? 1 : 0));
                break;
            case "user":
                sortedUsers.sort((a, b) => (
                    a.role === "user" ? -1 : b.role === "user" ? 1 : 0));
                break;
            default:
                break;
        }
        setUsersOrder(sortedUsers);
    }

    useEffect(() => {
        getUsers()
            .then(result => setUsersOrder(result))
            .catch(err => console.log("fetch error", err))
    }, [])
    
    const value = {
        users: usersOrder,
        handleRoleSort,
        sortedOption
    };

    return (
        <usersContext.Provider value={value}>
            {children}
        </usersContext.Provider>
    )
}

export {
    usersContext,
    UsersListProvider,
}


