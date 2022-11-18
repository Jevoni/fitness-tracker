import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        let response = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json()

        console.log(`data: ${data}`)
        navigate('/summary')
    }

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#dbc3e4'
        }}>
            <Box sx={{
                color: 'white',
                height: '60%',
                width: '35%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#9b59b6',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0px 0px 3px 1px black',
            }}>
                <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '30px' }}>Fitness Tracker</Typography>
                <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <input type='text'
                        value={firstName}
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px' }} />
                    <input type='text'
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                    <input type='email'
                        value={email}
                        placeholder='Email'
                        autoComplete='username'
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                    <input type='password'
                        value={password}
                        placeholder='Password'
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginTop: '2px', marginBottom: '2px' }} />
                    <input type='password'
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        autoComplete='new-password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ height: '35px', fontSize: '15px', marginTop: '2px' }} />
                    <Button variant='filled' type="submit" style={{ fontWeight: 'bold', color: 'black', backgroundColor: '#dbc3e4', marginTop: '20px', alignSelf: 'center', width: '30%', border: '1px solid black', textTransform: 'none' }}>Sign Up</Button>
                </form>
                <Typography style={{ marginTop: '15px' }}>Have an account? <Link to='/' style={{ color: 'black', fontWeight: 'bold', textDecorationLine: 'none' }}>Log In</Link></Typography>
            </Box>
        </Box>
    )
}

export default SignUp