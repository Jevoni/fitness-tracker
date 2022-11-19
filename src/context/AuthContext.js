import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

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
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })

        if (response.status === 200) {
            setAuthTokens(data)
            // setUser(jwt_decode(data.access))
        } else {
            alert('Something went wrong!')
        }
        navigate('/summary')
        const data = await response.json()
        console.log(data)
    }

    let contextData = {
        user: user,
        loginUser: loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}