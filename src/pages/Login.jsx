import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, TextField, Button } from '@mui/material'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '60%', backgroundColor: '#dbc3e4', width: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ textAlign: 'center', }}>Fitness Tracker</Typography>
                <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <TextField
                        variant='filled'
                        label='Email'
                    />
                    <TextField
                        variant='filled'
                        label='Password'
                    />
                    <Button variant='filled' style={{ width: '30%', border: '1px solid black', textTransform: 'none' }} type="submit">Submit</Button>
                </form>
            </Box>
        </Box>
    )
}

export default Login