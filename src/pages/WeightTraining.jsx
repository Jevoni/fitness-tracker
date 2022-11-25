import React, { useState, useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import WorkoutInput from '../components/WorkoutInput'
import WorkoutLog from '../components/WorkoutLog'
import LoadingSpinner from '../components/LoadingSpinner'

import styles from './styles/WeightTraining.module.css'

const WeightTraining = () => {
    const { setIsHome } = useContext(AuthContext)
    const [totalWorkouts, setTotalWorkouts] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setResponse(response)
            setTotalWorkouts(data)
        }
        getLog()
        setIsHome(true)
        console.log('Weight Training (useEffect)')
    }, [])

    if (!totalWorkouts?.length && response?.status !== 200) return (
        <Box className={styles['loading-spinner-container']}>
            <LoadingSpinner />
        </Box>
    )

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Weight Training</Typography>
            <WorkoutInput
                setTotalWorkouts={setTotalWorkouts}
            />
            <Box className={styles['workout-log-container']}>
                {totalWorkouts?.map((workoutLog) =>
                    <WorkoutLog
                        key={workoutLog.id}
                        workoutLog={workoutLog}
                        setTotalWorkouts={setTotalWorkouts}
                    />
                )}
            </Box>
        </Body>
    )
}

export default WeightTraining