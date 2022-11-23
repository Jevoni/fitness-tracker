import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import CardioLog from '../components/CardioLog'

import styles from './styles/Cardio.module.css'

const Cardio = () => {
    const { setIsHome } = useContext(AuthContext)

    useEffect(() => {
        setIsHome(true)
        console.log('useEffect (Cardio)')
    }, [])

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Cardio</Typography>
            <CardioLog />
        </Body>
    )
}

export default Cardio