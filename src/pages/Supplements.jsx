import React, { useState, useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import SupplementsInput from '../components/SupplementsInput'

import styles from './styles/Supplements.module.css'

const Supplements = () => {
    const { setIsHome } = useContext(AuthContext)
    const [totalSupplements, setTotalSupplements] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const getSupplementLog = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data = await response.json()
            setResponse(response)
            setTotalSupplements(data)
        }
        getSupplementLog()
        setIsHome(true)
        console.log('useEffect (Supplements)')
    }, [])

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Supplements</Typography>
            <SupplementsInput />
        </Body>
    )
}

export default Supplements