import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Cardio.module.css'

const CardioLog = () => {
    return (
        <Box className={styles['cardio-log']}>
            <Button className={styles['button-remove']}>Remove</Button>
            <Button className={styles['button-edit']}>Edit</Button>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Workout: <input type='text'></input></Typography>
            <Typography>Duration: <input type='time'></input></Typography>
        </Box>
    )
}

export default CardioLog