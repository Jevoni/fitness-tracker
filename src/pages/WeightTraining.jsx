import React from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

import WorkoutLog from '../components/WorkoutLog'

import styles from './styles/WeightTraining.module.css'

const WeightTraining = () => {
    return (
        <Box>
            <Header />
            <Box className={`${styles['main-container']}`}>
                <Sidebar />
                <Body>
                    <Typography className={`${styles['title']}`}>Weight Training</Typography>
                    <WorkoutLog />
                </Body>
            </Box>
        </Box>
    )
}

export default WeightTraining