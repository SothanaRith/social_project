import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //to do
        setCurrentUser({
            id: 1, name: "narith", profilePic: "https://i.pinimg.com/564x/7e/a3/61/7ea361d0e5ebeef1a12899d1f5f4b5e1.jpg"
        });
    };
    useEffect(() => {
        
        localStorage.setItem("user", JSON.stringify(currentUser))
        console.log(currentUser)
    }, [currentUser]);

    return (

        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}