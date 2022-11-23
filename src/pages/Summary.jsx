import React, { useEffect, useContext } from 'react'
import { Box, Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import styles from './styles/Summary.module.css'

const Summary = () => {
    const { setIsHome } = useContext(AuthContext)

    useEffect(() => {
        setIsHome(true)
        console.log('useEffect (Summary)')
    }, [])

    return (
        <Body sx={{ backgroundColor: 'white' }}>
            <Typography className={`${styles['title']}`}>Summary</Typography>
            <Typography variant='h2' textAlign='center'> Coming Soon...</Typography>
            {/* <div>
                <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent weight training logs: </Typography>
                <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                </Box>
            </div>
            <div>
                <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent cardio logs: </Typography>
                <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                </Box>
            </div>
            <div>
                <Typography sx={{ fontWeight: 'bold', marginLeft: '5px' }}>Recent supplements logs:</Typography>
                <Box sx={{ border: '1px solid black', margin: '5px', backgroundColor: 'white', height: '150px' }}>
                </Box>
            </div> */}
        </Body>
    )
}

export default Summary