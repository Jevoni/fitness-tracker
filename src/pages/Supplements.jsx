import React, { useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import SupplementsLog from '../components/SupplementsLog'

import styles from './styles/Supplements.module.css'

const Supplements = () => {
    const { setIsHome } = useContext(AuthContext)

    useEffect(() => {
        setIsHome(true)
        console.log('useEffect (Supplements)')
    }, [])

    return (
        <Body>
            <Typography className={`${styles['title']}`}>Supplements</Typography>
            <SupplementsLog />
        </Body>
    )
}

export default Supplements