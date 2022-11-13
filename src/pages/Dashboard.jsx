import React from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

const Homepage = () => {
    return (
        <Box>
            <Header />
            <Box sx={{
                display: 'flex',
                width: '100%'
            }}>
                <Sidebar />
                <Body>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Summary</Typography>
                </Body>
            </Box>
        </Box>
    )
}

export default Homepage