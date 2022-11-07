import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#9b59b6',
            color: 'white',
            height: '42.5px'
        }}>
            <Typography variant='h6'>Footer</Typography>
        </Box>
    )
}

export default Footer