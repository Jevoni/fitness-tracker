import React, { useState, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

import styles from './styles/Supplements.module.css'

const SupplementsInput = ({ setTotalSupplements }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState()
    const [dossage, setDossage] = useState()
    const [supplement, setSupplement] = useState()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/supplement/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'date': date,
                'name': supplement,
                'dossage': dossage,
            })
        })

        if (response.status === 200) {
            console.log('Workout Submitted!')
        } else {
            console.log(response.status)
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data = await response.json()
            setTotalSupplements(data)
        }
        getLog()
    }

    return (
        <form className={styles['supplements-log']} onSubmit={(e) => onSubmitHandler(e)}>
            <Typography>Date: <input required type='date' onChange={(e) => setDate(e.target.value)}></input></Typography>
            <Typography>Supplement: <input required type='text' onChange={(e) => setSupplement(e.target.value)}></input></Typography>
            <Typography>Dossage: <input required type='number' onChange={(e) => setDossage(e.target.value)}></input></Typography>
            <Button className={styles['button-add']} type='submit'>Add</Button>
        </form>
    )
}

export default SupplementsInput