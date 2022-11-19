import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './Login.module.css'

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const authenticated = false

    return (
        <Box className={styles.page}>
            <Box className={styles['login-container']}>
                <Typography variant='h5' className={`${styles['login-container']}h5`}>Fitness Tracker</Typography>
                <form onSubmit={loginUser} className={`${styles['login-container']}form`}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        autoComplete='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${styles['login-container']}input`} />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${styles['login-container']}input`} />
                    <Button variant='filled' className={`${styles['login-container']}button`} type="submit">Log In</Button>
                </form>
                <Typography className={`${styles['login-questions']}`}>Forgot Password?</Typography>
                <Typography className={`${styles['login-questions']}`}>
                    Dont have an account?
                    <Link to='/signup' className={`${styles['login-questions']}a`}> Sign Up</Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default Login