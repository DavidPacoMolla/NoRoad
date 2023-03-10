import React, { useState, createContext } from "react";

const userContext = createContext();

const UserContext = (props) => {
    const [ user, setUser ] = useState(null);

    const removeUser = () => {
        setUser(null);
    };

    const assignUser = (user) => {
        // Check if object contains the id, rooms and private key for prevent errors.
        if (user.id && user.rooms && user.privateKey) {
            setUser(user);
        }
        else {
            removeUser();
        }
    };

    const userData = { user, removeUser, assignUser };

    return (
        <userContext.Provider value={userData}>
            {props.children}
        </userContext.Provider>
    );
};

export default UserContext;

export { userContext };