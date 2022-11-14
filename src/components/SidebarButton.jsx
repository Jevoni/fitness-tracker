import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

const SidebarCard = ({ value, text }) => {
    const navigate = useNavigate()
    const buttonClickHandler = (e) => {
        navigate(`/${value}`)
        console.log('Clicked')
    }
    return (
        <Button onClick={buttonClickHandler} sx={{
            width: '90%',
            height: '70px',
            backgroundColor: '#9b59b6',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px',
            borderRadius: '6px',
            // boxShadow: '0px 0px 2px 1px black',
            textTransform: 'none',
            border: '2px solid black'
        }}>
            <Typography>{text}</Typography>
        </Button>

    )
}

export default SidebarCard