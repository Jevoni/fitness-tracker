import React, { useState, useEffect, useContext } from 'react'
import { Typography, Box } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import SupplementsInput from '../components/SupplementsInput'
import SupplementsLog from '../components/SupplementsLog'
import LoadingSpinner from '../components/LoadingSpinner'

import styles from './styles/Supplements.module.css'

const Supplements = () => {
    const { setIsHome } = useContext(AuthContext)
    const [totalSupplements, setTotalSupplements] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data = await response.json()
            setResponse(response)
            setTotalSupplements(data)
        }
        getLog()
        setIsHome(true)
        console.log('Supplements (useEffect)')
    }, [])

    if (!totalSupplements?.length && response?.status !== 200) return (
        <Box className={styles['loading-spinner-container']}>
            <LoadingSpinner />
        </Box>
    )

    return (
        <Body>
            <Typography variant='h5' className={`${styles['title']}`}>Supplements</Typography>
            <SupplementsInput
                setTotalSupplements={setTotalSupplements}
            />
            <Box className={styles['supplements-log-container']}>
                {totalSupplements?.map((supplementsLog) =>
                    <SupplementsLog
                        id={supplementsLog.id}
                        supplementsLog={supplementsLog}
                        setTotalSupplements={setTotalSupplements}
                    />
                )}
            </Box>
        </Body>
    )
}

export default Supplements