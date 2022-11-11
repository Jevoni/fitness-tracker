import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
            paddingLeft: '25px',
            paddingRight: '25px'
        }}>
            <Typography sx={{ fontSize: '22px' }}>Fitness Tracker</Typography>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Log Out</Link>
        </Box>
    )
}

export default Header