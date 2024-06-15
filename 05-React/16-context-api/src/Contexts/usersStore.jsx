import React, { useEffect, useState } from "react";
import { usersContext } from "./usersContext";

function UsersStore({ children }) {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersList = await res.json();
        setUsers(usersList);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <usersContext.Provider value={{ users, setUsers }}>
            {children}
        </usersContext.Provider>
    );
}

export default UsersStore;
