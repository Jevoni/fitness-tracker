import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Header = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/login')
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#9b59b6',
            color: 'white',
            height: '45px',
        }}>
            <Typography sx={{ fontSize: '22px', marginLeft: '25px' }}>Fitness Tracker</Typography>
            <Typography onClick={onClickHandler} sx={{ marginRight: '25px' }}>Log Out</Typography>
        </Box>
    )
}

export default Header