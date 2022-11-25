import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Supplements.module.css'

const SupplementsLog = ({ supplementsLog, setTotalSupplements }) => {
    const [date, setDate] = useState(supplementsLog.date)
    const [dossage, setDossage] = useState(supplementsLog.dossage)
    const [supplement, setSupplement] = useState(supplementsLog.name)
    const [edit, setEdit] = useState(false)

    const deleteWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/supplement/${supplementsLog.id}/`, {
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
            const response = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data = await response.json()
            setTotalSupplements(data)
        }
        getLog()
    }

    const editWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/supplement/${supplementsLog.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'date': date,
                'name': supplement,
                'dossage': dossage,
            })
        })

        if (response.status === 201 || 200) {
            console.log('Supplement Edited!')
        }

        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data = await response.json()
            setTotalSupplements(data)
        }
        getLog()
        setEdit(false)
    }

    if (edit) {
        return (
            <Box className={styles['supplements-log']}>
                <Box>
                    <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                    <Button className={styles['button-edit']} onClick={editWorkout}>Save</Button>
                </Box>
                <Typography>Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input></Typography>
                <Typography>Supplement: <input value={supplement} onChange={(e) => setSupplement(e.target.value)}></input></Typography>
                <Typography>Dossage: <input value={dossage} onChange={(e) => setDossage(e.target.value)}></input></Typography>
            </Box>
        )
    }

    return (
        <Box className={styles['supplements-log']}>
            <Box>
                <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                <Button className={styles['button-edit']} onClick={() => setEdit(true)}>Edit</Button>
            </Box>
            <Typography>Date: {date}</Typography>
            <Typography>Supplement: {supplement}</Typography>
            <Typography>Dossage: {dossage}</Typography>
        </Box>
    )
}

export default SupplementsLog