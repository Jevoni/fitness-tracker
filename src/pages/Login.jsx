import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const authenticated = false

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#dbc3e4'
        }}>
            <Box sx={{
                color: 'white',
                height: '60%',
                width: '35%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#9b59b6',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0px 0px 3px 1px black',
            }}>
                <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '30px' }}>Fitness Tracker</Typography>
                <form onSubmit={loginUser} style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        autoComplete='username'
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px' }} />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginTop: '2px' }} />
                    <Button variant='filled' style={{ fontWeight: 'bold', color: 'black', backgroundColor: '#dbc3e4', marginTop: '20px', alignSelf: 'center', width: '30%', border: '1px solid black', textTransform: 'none' }} type="submit">Log In</Button>
                </form>
                <Typography style={{ marginTop: '15px' }}>Forgot Password?</Typography>
                <Typography style={{ marginTop: '15px' }}>Dont have an account? <Link to='/signup' style={{ color: 'black', fontWeight: 'bold', textDecorationLine: 'none' }}>Sign Up</Link></Typography>
            </Box>
        </Box>
    )
}

export default Login