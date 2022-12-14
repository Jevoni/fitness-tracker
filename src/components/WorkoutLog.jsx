import React, { useState, useEffect, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/Workout.module.css'

const WorkoutLog = ({ workoutLog, setTotalWorkouts }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState(workoutLog.date)
    const [name, setName] = useState(workoutLog.name)
    const [reps, setReps] = useState(workoutLog.reps)
    const [sets, setSets] = useState(workoutLog.sets)
    const [edit, setEdit] = useState(false)

    // useEffect(() => {
    //     console.log('Log')
    // }, [])

    const deleteWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/weight/${workoutLog.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
        })

        if (response.status === 201 || 200) {
            console.log('Workout Deleted!')
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
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
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': name,
                'reps': reps,
                'sets': sets,
                'id': workoutLog.id
            })
        })

        if (response.status === 201 || 200) {
            console.log('Workout Edited!')
            console.log(response.status)
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getLog()
        setEdit(false)
    }

    if (edit) {
        return (
            <Box className={styles['workout-log']}>
                <Box display='flex'>
                    <Button className={styles['button-edit']} onClick={editWorkout}>Save</Button>
                    <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                </Box>
                <Box className={styles['content-container']}>
                    <Typography sx={{ fontWeight: 325 }}>Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input></Typography>
                    <Typography sx={{ fontWeight: 325 }}>Workout: <input value={name} onChange={(e) => setName(e.target.value)}></input></Typography>
                    <Typography sx={{ fontWeight: 325 }}>Reps: <input value={reps} onChange={(e) => setReps(e.target.value)}></input></Typography>
                    <Typography sx={{ fontWeight: 325 }}>Sets: <input value={sets} onChange={(e) => setSets(e.target.value)}></input></Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Box className={styles['workout-log']}>
            <Button className={styles['button-edit']} onClick={() => setEdit(true)}>Edit</Button>
            <Box className={styles['content-container']}>
                <Typography sx={{ fontWeight: 325 }}>Date: {date}</Typography>
                <Typography sx={{ fontWeight: 325 }}>Workout: {name}</Typography>
                <Typography sx={{ fontWeight: 325 }}>Reps: {reps}</Typography>
                <Typography sx={{ fontWeight: 325 }}>Sets: {sets}</Typography>
            </Box>
        </Box>
    )
}

export default WorkoutLog