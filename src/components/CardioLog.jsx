import React, { useState, useEffect, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/Cardio.module.css'

const CardioLog = ({ cardioLog, setTotalCardio }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState(cardioLog.date)
    const [name, setName] = useState(cardioLog.name)
    const [duration, setDuration] = useState(cardioLog.duration)
    const [edit, setEdit] = useState(false)

    const deleteWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/cardio/${cardioLog.id}/`, {
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
            const response = await fetch('http://127.0.0.1:8000/api/cardio/')
            const data = await response.json()
            setTotalCardio(data)
        }
        getLog()
    }

    const editWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/cardio/${cardioLog.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'date': date,
                'name': name,
                'duration': duration,
            })
        })

        if (response.status === 201 || 200) {
            console.log('Workout Edited!')
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/cardio/')
            const data = await response.json()
            setTotalCardio(data)
        }
        getLog()
        setEdit(false)
    }

    if (edit) {
        return (
            <Box className={styles['cardio-log']}>
                <Box>
                    <Button className={styles['button-edit']} onClick={editWorkout}>Save</Button>
                    <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                </Box>
                <Typography>Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Workout: <input value={name} onChange={(e) => setName(e.target.value)}></input></Typography>
                <Typography>Duration: <input value={duration} onChange={(e) => setDuration(e.target.value)}></input></Typography>
            </Box>
        )
    }

    return (
        <Box className={styles['cardio-log']}>
            <Button className={styles['button-edit']} onClick={() => setEdit(true)}>Edit</Button>
            <Box className={styles['content-container']}>
                <Typography sx={{ fontWeight: 325 }}>Date: {date}</Typography>
                <Typography sx={{ fontWeight: 325 }}>Workout: {name}</Typography>
                <Typography sx={{ fontWeight: 325 }}>Duration: {duration}</Typography>
            </Box>
        </Box>
    )
}

export default CardioLog