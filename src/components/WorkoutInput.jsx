import React from 'react'
import { Typography, Button } from '@mui/material'

import styles from './styles/Workout.module.css'

const WorkoutInput = ({ setDate, setWorkout, setReps, setSets, onSubmitHandler }) => {
    return (
        <>
            <form className={styles['workout-log']} onSubmit={(e) => onSubmitHandler(e)}>
                <Typography>Date: <input type='date' onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Workout: <input type='text' onChange={(e) => setWorkout(e.target.value)}></input></Typography>
                <Typography>Reps: <input type='number' onChange={(e) => setReps(e.target.value)}></input></Typography>
                <Typography>Sets: <input type='number' onChange={(e) => setSets(e.target.value)}></input></Typography>
                <Button className={styles['button-add']} type='submit'>Add</Button>
            </form>
        </>
    )
}

export default WorkoutInput