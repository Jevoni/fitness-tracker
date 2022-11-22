import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/WorkoutLog.module.css'

const WorkoutLog = () => {
    return (
        <Box className={styles['workout-log']}>
            <Typography>Date: <input type='text'></input></Typography>
            <Typography>Workout: <input type='text'></input></Typography>
            <Typography>Reps: <input type='number'></input></Typography>
            <Typography>Sets: <input type='number'></input></Typography>
            <Button className={styles['button']}>ADD</Button>
        </Box>
    )
}

export default WorkoutLog