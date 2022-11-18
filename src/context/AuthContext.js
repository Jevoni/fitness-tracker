import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ 'name': 'Dennis' }}>
            {children}
        </AuthContext.Provider>
    )
}