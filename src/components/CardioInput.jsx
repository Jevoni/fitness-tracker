import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Cardio.module.css'

const CardioInput = () => {
    return (
        <Box className={styles['cardio-log']}>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Workout: <input type='text'></input></Typography>
            <Typography>Duration: <input type='time'></input></Typography>
            <Button className={styles['button-add']}>Add</Button>
        </Box>
    )
}

export default CardioInput