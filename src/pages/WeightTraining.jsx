import React, { useState, useContext } from 'react'
import { Box, Typography } from '@mui/material'

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Body from '../layout/Body'
import Footer from '../layout/Footer'

import WorkoutInput from '../components/WorkoutInput'
import WorkoutLog from '../components/WorkoutLog'

import styles from './styles/WeightTraining.module.css'
import AuthContext from '../context/AuthContext'

const WeightTraining = () => {
    const { authTokens, user } = useContext(AuthContext)
    const [date, setDate] = useState()
    const [workout, setWorkout] = useState()
    const [reps, setReps] = useState()
    const [sets, setSets] = useState()
    const [workoutLog, setWorkoutLog] = useState({})

    const buttonHandler = async () => {
        setWorkoutLog({
            date,
            workout,
            reps,
            sets,
        })

        const response = await fetch('http://127.0.0.1:8000/api/create-weight/', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json',
                'Authorization': 'Bearer' + String(authTokens.access)
            },
            body: JSON.stringify({
                'user': user,
                'date': date,
                'workout': workout,
                'reps': reps,
                'sets': sets,
            })
        })
    }

    return (
        <Box>
            <Header />
            <Box className={`${styles['main-container']}`}>
                <Sidebar />
                <Body>
                    <Typography className={`${styles['title']}`}>Weight Training</Typography>
                    <WorkoutInput
                        setDate={setDate}
                        setWorkout={setWorkout}
                        setReps={setReps}
                        setSets={setSets}
                        buttonHandler={buttonHandler}
                    />
                    <WorkoutLog workoutLog={workoutLog} />
                </Body>
            </Box>
        </Box>
    )
}

export default WeightTraining