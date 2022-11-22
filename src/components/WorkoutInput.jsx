import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/WorkoutLog.module.css'

const WorkoutInput = ({ setDate, setWorkout, setReps, setSets, buttonHandler }) => {
    return (
        <>
            <Box className={styles['workout-log']}>
                <Typography>Date: <input type='text' onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Workout: <input type='text' onChange={(e) => setWorkout(e.target.value)}></input></Typography>
                <Typography>Reps: <input type='number' onChange={(e) => setReps(e.target.value)}></input></Typography>
                <Typography>Sets: <input type='number' onChange={(e) => setSets(e.target.value)}></input></Typography>
                <Button className={styles['button']} onClick={() => buttonHandler()}>ADD</Button>
            </Box>
        </>
    )
}

export default WorkoutInput