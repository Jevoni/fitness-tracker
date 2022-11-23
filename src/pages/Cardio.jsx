import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import CardioInput from '../components/CardioInput'

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
            <CardioInput />
        </Body>
    )
}

export default Cardio