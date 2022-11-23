import React, { useState, useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import WorkoutInput from '../components/WorkoutInput'
import WorkoutLog from '../components/WorkoutLog'
import LoadingSpinner from '../components/LoadingSpinner'

import styles from './styles/WeightTraining.module.css'

const WeightTraining = () => {
    const { setIsHome, authTokens } = useContext(AuthContext)
    const [date, setDate] = useState()
    const [workout, setWorkout] = useState()
    const [reps, setReps] = useState()
    const [sets, setSets] = useState()
    const [totalWorkouts, setTotalWorkouts] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getWorkoutLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setResponse(response)
            setTotalWorkouts(data)
        }
        getWorkoutLog()
        setIsHome(true)
        console.log('useEffect (WeightTraining)')
    }, [])

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/weight/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': workout,
                'reps': reps,
                'sets': sets,
            })
        })

        if (response.status === 201) {
            console.log('Workout Submitted!')
        }

        const getWorkoutLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getWorkoutLog()
    }

    const deleteWorkout = async (e) => {
        const response = await fetch('http://127.0.0.1:8000/api/weight/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': workout,
                'reps': reps,
                'sets': sets,
            })
        })

        if (response.status === 201 || 200) {
            console.log('Workout Deleted!')
        }

        const getWorkoutLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getWorkoutLog()
    }

    const editWorkout = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/weight/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': workout,
                'reps': reps,
                'sets': sets,
            })
        })

        if (response.status === 201 || 200) {
            console.log('Workout Deleted!')
        }

        const getWorkoutLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWorkouts(data)
        }
        getWorkoutLog()
    }

    if (!totalWorkouts?.length && response?.status !== 200) return (
        <Box className={styles['loading-spinner-container']}>
            <LoadingSpinner />
        </Box>
    )

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Weight Training</Typography>
            <WorkoutInput
                setDate={setDate}
                setWorkout={setWorkout}
                setReps={setReps}
                setSets={setSets}
                onSubmitHandler={onSubmitHandler}
            />
            <Box className={styles['workout-log-container']}>
                {totalWorkouts?.map((workoutLog) =>
                    <WorkoutLog
                        key={workoutLog.id}
                        workoutLog={workoutLog}
                        editWorkout={editWorkout}
                        deleteWorkout={deleteWorkout}
                    />
                )}
            </Box>
        </Body>
    )
}

export default WeightTraining