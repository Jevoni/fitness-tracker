import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Box } from '@mui/material'

const SidebarCard = ({ value, text, icon }) => {
    const navigate = useNavigate()
    const buttonClickHandler = (e) => {
        navigate(`/${value}`)
    }
    return (
        <Button onClick={buttonClickHandler}
            sx={{
                width: { xs: '100%', lg: '90%' },
                height: '70px',
                backgroundColor: '#9b59b6',
                color: 'white',
                display: 'flex',
                alignItems: { lg: 'flex-start' },
                flexDirection: { xs: 'row', lg: 'column' },
                justifyContent: 'center',
                margin: { xs: '2px', md: '6px' },
                marginLeft: { xs: '2px', sm: '5px', md: '12px' },
                marginRight: { xs: '2px', sm: '5px', md: '12px' },
                borderRadius: '3px',
                textTransform: 'none',
                border: '1px solid black'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', lg: 'row' }
                }}>
                <Box
                    sx={{
                        paddingLeft: { lg: '3px' },
                        paddingRight: { xs: '0px', lg: '5px' }, paddingTop: { lg: '4px' }
                    }}>
                    {icon}
                </Box>
                <Typography sx={{ fontSize: { xs: '10px', md: '13px', lg: '15.5px' } }}>{text}</Typography>
            </Box>
        </Button >

    )
}

export default SidebarCard