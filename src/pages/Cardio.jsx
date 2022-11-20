import React from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

import CardioLog from '../components/CardioLog'

import styles from './styles/Cardio.module.css'

const Cardio = () => {
    return (
        <Box>
            <Header />
            <Box className={`${styles['main-container']}`}>
                <Sidebar />
                <Body>
                    <Typography className={`${styles['title']}`}>Cardio</Typography>
                    <CardioLog />
                </Body>
            </Box>
        </Box>
    )
}

export default Cardio