import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

const SidebarCard = ({ value, text }) => {
    const navigate = useNavigate()
    const buttonClickHandler = (e) => {
        navigate(`/${value}`)
    }
    return (
        <Button onClick={buttonClickHandler} sx={{
            width: '90%',
            height: '70px',
            backgroundColor: '#9b59b6',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: '6px',
            marginLeft: '12px',
            marginRight: '12px',
            borderRadius: '3px',
            textTransform: 'none',
            // border: '1.5px solid black'
        }}>
            <Typography fontSize='16.5px'>{text}</Typography>
        </Button >

    )
}

export default SidebarCard