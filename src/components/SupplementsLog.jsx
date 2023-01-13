import React, { useState, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AuthContext from '../context/AuthContext'
import { BsThreeDotsVertical } from 'react-icons/bs'

import styles from './styles/Supplements.module.css'

const SupplementsLog = ({ supplementsLog, setTotalSupplements }) => {
    const { authTokens } = useContext(AuthContext)
    const [date, setDate] = useState(supplementsLog.date)
    const [dossage, setDossage] = useState(supplementsLog.dossage)
    const [supplement, setSupplement] = useState(supplementsLog.name)
    const [edit, setEdit] = useState(false)

    const deleteWorkout = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/supplement/${supplementsLog.id}/`, {
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
            const response = await fetch('http://127.0.0.1:8000/api/supplement/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
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
                'Authorization': 'Bearer ' + String(authTokens?.access)
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
            const response = await fetch('http://127.0.0.1:8000/api/supplement/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
            const data = await response.json()
            setTotalSupplements(data)
        }
        getLog()
        setEdit(false)
    }

    if (edit) {
        return (
            <Box className={`${styles['supplements-log']} ${styles['inputbox']} ${styles['reverse']} `}>
                <Box className={styles['button-container']}>
                    <Button className={styles['button-edit']} onClick={editWorkout}>Save</Button>
                    <Button className={styles['button-remove']} onClick={deleteWorkout}>Remove</Button>
                </Box>
                <Box className={styles['content-container']}>
                    <Typography>Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input></Typography>
                    <Typography>Supplement: <input value={supplement} onChange={(e) => setSupplement(e.target.value)}></input></Typography>
                    <Typography className={styles.numbers}>Dossage: <input value={dossage} onChange={(e) => setDossage(e.target.value)}></input></Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Box className={styles['supplements-log']}>
            <BsThreeDotsVertical className={styles['vertical-button']} onClick={() => setEdit(true)} />
            <Button className={styles['button-edit']} onClick={() => setEdit(true)}>Edit</Button>
            <Box className={styles['content-container']}>
                <Typography><span>Date:</span> {date}</Typography>
                <Typography><span>Supplement:</span> {supplement}</Typography>
                <Typography><span>Dossage:</span> {dossage}</Typography>
            </Box>
        </Box>
    )
}

export default SupplementsLog