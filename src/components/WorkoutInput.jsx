import React, { useState, useContext } from 'react'
import { Typography, Button, Box } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/Workout.module.css'

const WorkoutInput = ({ setTotalWorkouts }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState()
    const [workout, setWorkout] = useState()
    const [reps, setReps] = useState()
    const [sets, setSets] = useState()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/weight/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': workout,
                'reps': reps,
                'sets': sets,
            })
        })

        if (response.status === 200) {
            console.log('Workout Submitted!')
        } else {
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
    }

    return (
        <form className={`${styles['workout-log']} ${styles.inputbox}`} onSubmit={(e) => onSubmitHandler(e)}>
            <Box className={`${styles['content-container']} ${styles.input}`}>
                <Typography className={styles.date}>
                    Date: <input required type='date' onChange={(e) => setDate(e.target.value)}></input>
                </Typography>
                <Typography>Workout: <input required type='text' onChange={(e) => setWorkout(e.target.value)}></input></Typography>
                <Typography className={`${styles.numbers} `}>
                    Reps: <input required type='number' onChange={(e) => setReps(e.target.value)}></input>
                </Typography>
                <Typography className={`${styles.numbers} `}>
                    Sets: <input required type='number' onChange={(e) => setSets(e.target.value)}></input>
                </Typography>
            </Box>
            <Button className={styles['button-add']} type='submit'>Add</Button>
        </form >
    )
}

export default WorkoutInput