import React from 'react'
import { Box, Typography } from '@mui/material'

const SidebarCard = (props) => {
    return (
        <Box sx={{
            width: '150px',
            height: '150px',
            backgroundColor: '#9b59b6',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px',
            borderRadius: '14px',
            boxShadow: '0px 0px 2px 1px black'
        }}>
            <Typography>{props.children}</Typography>
        </Box>
    )
}

export default SidebarCard