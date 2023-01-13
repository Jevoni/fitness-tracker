import React, { useState, useContext } from 'react'
import { Typography, Button, Box } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/Cardio.module.css'

const CardioInput = ({ setTotalCardio }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState()
    const [name, setName] = useState()
    const [duration, setDuration] = useState()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/cardio/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': name,
                'duration': duration
            })
        })

        if (response.status === 200) {
            console.log('Workout Submitted!')
        } else {
            console.log(response.status)
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/cardio/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
            const data = await response.json()
            setTotalCardio(data)
        }
        getLog()
    }

    return (
        <form className={`${styles['cardio-log']} ${styles.inputbox}`} onSubmit={(e) => onSubmitHandler(e)}>
            <Box className={`${styles['content-container']}`}>
                <Typography>Date: <input required type='date' onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Workout: <input required type='text' onChange={(e) => setName(e.target.value)}></input></Typography>
                <Typography>Duration: <input required type='time' onChange={(e) => setDuration(e.target.value)}></input></Typography>
            </Box>
            <Button className={styles['button-add']} type='submit'>Add</Button>
        </form>
    )
}

export default CardioInput