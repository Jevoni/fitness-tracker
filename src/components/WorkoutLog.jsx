import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles/WorkoutLog.module.css'

const WorkoutLog = ({ workoutLog }) => {
    return (
        <Box className={styles['workout-log']}>
            <Typography>Date: {workoutLog.date}</Typography>
            <Typography>Workout: {workoutLog.name}</Typography>
            <Typography>Reps: {workoutLog.reps}</Typography>
            <Typography>Sets: {workoutLog.sets}</Typography>
        </Box>
    )
}

export default WorkoutLog