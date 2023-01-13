import React, { useState, useEffect, useContext } from 'react'
import { Typography, Box } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import SupplementsInput from '../components/SupplementsInput'
import SupplementsLog from '../components/SupplementsLog'
import LoadingSpinner from '../components/LoadingSpinner'

import styles from './styles/Supplements.module.css'

const Supplements = () => {
    const { authTokens } = useContext(AuthContext)
    const [totalSupplements, setTotalSupplements] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/supplement/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                }
            })
            const data = await response.json()
            setResponse(response)
            setTotalSupplements(data)
        }
        getLog()
        console.log('Supplements (useEffect)')
    }, [])

    if (!totalSupplements?.length && response?.status !== 200) return (
        <Box className={styles['loading-spinner-container']}>
            <LoadingSpinner />
        </Box>
    )

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Supplements</Typography>
            <Box sx={{ width: '98%' }}>
                <SupplementsInput
                    setTotalSupplements={setTotalSupplements}
                />
            </Box>
            <Box sx={{ width: '95%' }}>
                <Box className={styles['supplements-log-container']}>
                    {totalSupplements?.map((supplementsLog) =>
                        <SupplementsLog
                            key={supplementsLog.id}
                            supplementsLog={supplementsLog}
                            setTotalSupplements={setTotalSupplements}
                        />
                    )}
                </Box>
            </Box>
        </Body>
    )
}

export default Supplements