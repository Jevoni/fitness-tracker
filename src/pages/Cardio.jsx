import React, { useState, useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import CardioInput from '../components/CardioInput'
import CardioLog from '../components/CardioLog'
import LoadingSpinner from '../components/LoadingSpinner'

import styles from './styles/Cardio.module.css'

const Cardio = () => {
    const { setIsHome } = useContext(AuthContext)
    const [totalCardio, setTotalCardio] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/cardio/')
            const data = await response.json()
            setResponse(response)
            setTotalCardio(data)
        }
        getLog()
        setIsHome(true)
        console.log('Cardio (useEffect)')
    }, [])

    if (!totalCardio?.length && response?.status !== 200) return (
        <Box className={styles['loading-spinner-container']}>
            <LoadingSpinner />
        </Box>
    )

    return (
        <Body>
            <Typography variant='h5' className={`${styles['title']}`}>Cardio</Typography>
            <CardioInput
                setTotalCardio={setTotalCardio}
            />
            <Box className={styles['cardio-log-container']}>
                {totalCardio?.map((cardioLog) =>
                    <CardioLog
                        key={cardioLog.id}
                        cardioLog={cardioLog}
                        setTotalCardio={setTotalCardio}
                    />
                )}
            </Box>
        </Body>
    )
}

export default Cardio