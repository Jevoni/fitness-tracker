import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate('/')
    }

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
                <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <input placeholder='Email' style={{ height: '35px', fontSize: '16px', marginBottom: '2px' }}></input>
                    <input placeholder='Password' style={{ height: '35px', fontSize: '16px', marginTop: '2px' }}></input>
                    <Button variant='filled' style={{ marginTop: '20px', alignSelf: 'center', width: '30%', border: '1px solid black', textTransform: 'none' }} type="submit">Log In</Button>
                </form>
                <Typography style={{ marginTop: '15px' }}>Forgot Password?</Typography>
                <Typography style={{ marginTop: '15px' }}>Dont have an account? <a href='/' style={{ color: 'black', fontWeight: 'bold', textDecorationLine: 'none' }}>Sign Up</a></Typography>
            </Box>
        </Box>
    )
}

export default Login