import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Workout.module.css'

const WorkoutLog = ({ workoutLog, setTotalWorkouts }) => {
    const [date, setDate] = useState(workoutLog.date)
    const [name, setName] = useState(workoutLog.name)
    const [reps, setReps] = useState(workoutLog.reps)
    const [sets, setSets] = useState(workoutLog.sets)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        console.log('Log')
    }, [])

    const deleteWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/weight/${workoutLog.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + String(authTokens?.access)
            },
        })

        if (response.status === 201 || 200) {
            console.log('Workout Deleted!')
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getLog()
    }

    const editWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/weight/${workoutLog.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'date': date,
                'name': name,
                'reps': reps,
                'sets': sets,
            })
        })

        if (response.status === 201 || 200) {
            console.log('Workout Edited!')
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getLog()
        setEdit(false)
    }

    if (edit) {
        return (
            <Box className={styles['workout-log']}>
                <Box>
                    <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                    <Button className={styles['button-edit']} onClick={editWorkout}>Save</Button>
                </Box>
                <Typography>Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Workout: <input value={name} onChange={(e) => setName(e.target.value)}></input></Typography>
                <Typography>Reps: <input value={reps} onChange={(e) => setReps(e.target.value)}></input></Typography>
                <Typography>Sets: <input value={sets} onChange={(e) => setSets(e.target.value)}></input></Typography>
            </Box>
        )
    }

    return (
        <Box className={styles['workout-log']}>
            <Box>
                <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                <Button className={styles['button-edit']} onClick={() => setEdit(true)}>Edit</Button>
            </Box>
            <Typography>Date: {date}</Typography>
            <Typography>Workout: {name}</Typography>
            <Typography>Reps: {reps}</Typography>
            <Typography>Sets: {sets}</Typography>
        </Box>
    )
}

export default WorkoutLog