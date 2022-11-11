import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Login = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '50%', backgroundColor: '#dbc3e4', width: '50%' }}>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Fitness Tracker</Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Email: </label>
                    <input type="text"></input>
                    <button type="submit" onClick={() => navigate('/')}>Submit</button>
                </form>
            </Box>
        </Box>
    )
}

export default Login