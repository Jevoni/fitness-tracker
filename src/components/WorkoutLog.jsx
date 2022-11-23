import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Workout.module.css'

const WorkoutLog = ({ workoutLog, deleteWorkout, editWorkout }) => {
    return (
        <Box className={styles['workout-log']}>
            <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
            <Button className={styles['button-edit']} onClick={editWorkout}>Edit</Button>
            <Typography>Date: {workoutLog.date}</Typography>
            <Typography>Workout: {workoutLog.name}</Typography>
            <Typography>Reps: {workoutLog.reps}</Typography>
            <Typography>Sets: {workoutLog.sets}</Typography>
        </Box>
    )
}

export default WorkoutLog