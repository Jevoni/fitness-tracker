import { createContext, useState, useEffect }
    from "react";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.email.value, 'password': e.target.password.value })
        })
        navigate('/summary')
        const data = await response.json()
        console.log(data)
    }

    let contextData = {
        loginUser: loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}