import React from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

import styles from './styles/Summary.module.css'

const Summary = () => {
    return (
        <Box>
            <Header />
            <Box className={`${styles['main-container']}`}>
                <Sidebar />
                <Body sx={{ backgroundColor: 'white' }}>
                    <Typography className={`${styles['title']}`}>Summary</Typography>
                    <div>
                        <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent weight training logs: </Typography>
                        <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                        </Box>
                    </div>
                    <div>
                        <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent cardio logs: </Typography>
                        <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                        </Box>
                    </div>
                    <div>
                        <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent supplements logs:</Typography>
                        <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                        </Box>
                    </div>
                </Body>
            </Box>
        </Box>
    )
}

export default Summary