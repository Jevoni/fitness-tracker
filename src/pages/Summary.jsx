import React, { useEffect, useContext, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AuthContext from '../context/AuthContext'

import WorkoutLog from '../components/WorkoutLog'
import Body from '../layout/Body'

import styles from './styles/Summary.module.css'
import SummaryLog from '../components/SummaryLog'

const Summary = () => {
    const { setIsHome } = useContext(AuthContext)
    const [totalWeight, setTotalWeight] = useState(null)
    const [totalCardio, setTotalCardio] = useState(null)
    const [totalSupps, setTotalSupps] = useState(null)
    // const [response, setResponse] = useState(null)

    useEffect(() => {
        const getLogs = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/weight/')
            const data = await response.json()
            setTotalWeight(data)
            // setResponse(response)
            const response2 = await fetch('http://127.0.0.1:8000/api/cardio/')
            const data2 = await response2.json()
            setTotalCardio(data2)

            const response3 = await fetch('http://127.0.0.1:8000/api/supplement/')
            const data3 = await response3.json()
            setTotalSupps(data3)
        }
        getLogs()
        setIsHome(true)
        console.log('Summary (useEffect)')
    }, [])

    return (
        <Body sx={{ backgroundColor: 'white' }}>
            <Typography sx={{ fontSize: '23px' }} className={`${styles['title']}`}>Summary</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {totalWeight?.slice(totalWeight.length - 3, totalWeight.length)?.map((workoutLog) =>
                    <SummaryLog
                        key={workoutLog.id}
                        workoutLog={workoutLog}
                        setTotalWorkouts={setTotalWeight}
                        type='weight'
                    />
                )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {totalCardio?.map((workoutLog) =>
                    <SummaryLog
                        key={workoutLog.id}
                        workoutLog={workoutLog}
                        setTotalWorkouts={setTotalSupps}
                        type='cardio'
                    />
                )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {totalSupps?.map((workoutLog) =>
                    <SummaryLog
                        key={workoutLog.id}
                        workoutLog={workoutLog}
                        setTotalWorkouts={setTotalCardio}
                        type='supplement'
                    />
                )}
            </Box>
        </Body>
    )
}

export default Summary

{/* <Typography variant='h2' textAlign='center'> Coming Soon...</Typography> */ }
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