import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/SignUp.module.css'

const SignUp = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUpHandler = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'first_name': firstName,
                'last_name': lastName,
                'email': email,
                'password1': password,
                'password2': confirmPassword,
            })
        })

        if (response.status === 200) {
            alert('User created')
            navigate('/')
        }

        console.log(response.status)
        // console.log('useEffect (SignUp)')
    }


    return (
        <Box className={`${styles['page']}`}>
            <Box className={`${styles['signup-container']}`}>
                <form onSubmit={signUpHandler} className={`${styles['signup-container']}form`}>
                    <input
                        type='text'
                        value={firstName}
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px' }} />
                    <input
                        type='text'
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        autoComplete='username'
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                    <input
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginTop: '2px', marginBottom: '2px' }} />
                    <input
                        type='password'
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        autoComplete='new-password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginTop: '2px' }} />
                    <Button variant='filled' type="submit" className={`${styles['login-container']}button`}>Sign Up</Button>
                </form>
                <Typography className={`${styles['signup-questions']}`}>
                    Have an account?
                    <Link to='/' className={`${styles['signup-questions']}a`}> Log In</Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default SignUp