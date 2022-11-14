import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

const SignUp = () => {
    const navigate = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate('/summary')
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
                    <input type='email' placeholder='Full Name' style={{ height: '35px', fontSize: '15px', marginBottom: '2px' }}></input>
                    <input type='email' placeholder='Email' style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }}></input>
                    <input type='password' placeholder='Password' style={{ height: '35px', fontSize: '15px', marginTop: '2px', marginBottom: '2px' }}></input>
                    <input type='password' placeholder='Confirm Password' style={{ height: '35px', fontSize: '15px', marginTop: '2px' }}></input>
                    <Button variant='filled' type="submit" style={{ fontWeight: 'bold', color: 'black', backgroundColor: '#dbc3e4', marginTop: '20px', alignSelf: 'center', width: '30%', border: '1px solid black', textTransform: 'none' }}>Sign Up</Button>
                </form>
                <Typography style={{ marginTop: '15px' }}>Have an account? <Link to='/' style={{ color: 'black', fontWeight: 'bold', textDecorationLine: 'none' }}>Log In</Link></Typography>
            </Box>
        </Box>
    )
}

export default SignUp