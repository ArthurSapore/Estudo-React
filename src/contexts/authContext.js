import React, { createContext } from "react";


export const authContext = createContext();


export function AuthProvider ({children}){
    return(
        <authContext.Provider value={{autenticated: false}}>
            {children}
        </authContext.Provider>
    );
}

