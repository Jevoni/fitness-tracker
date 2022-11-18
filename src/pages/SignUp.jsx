import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

const SignUp = () => {
    const { loginUser } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
                    <Button variant='filled' type="submit" style={{ fontWeight: 'bold', color: 'black', backgroundColor: '#dbc3e4', marginTop: '20px', alignSelf: 'center', width: '30%', border: '1px solid black', textTransform: 'none' }}>Sign Up</Button>
                </form>
                <Typography style={{ marginTop: '15px' }}>Have an account? <Link to='/' style={{ color: 'black', fontWeight: 'bold', textDecorationLine: 'none' }}>Log In</Link></Typography>
            </Box>
        </Box>
    )
}

export default SignUp