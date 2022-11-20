import React from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

import SupplementsLog from '../components/SupplementsLog'

import styles from './styles/Supplements.module.css'

const Supplements = () => {
    return (
        <Box>
            <Header />
            <Box className={`${styles['main-container']}`}>
                <Sidebar />
                <Body>
                    <Typography className={`${styles['title']}`}>Supplements</Typography>
                    <SupplementsLog />
                </Body>
            </Box>
        </Box>
    )
}

export default Supplements