import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import AuthContext from './context/AuthContext'

import Header from './layout/Header'
import Sidebar from './layout/Sidebar';

import Summary from './pages/Summary';
import Login from './pages/Login';
import WeightTraining from './pages/WeightTraining';
import Cardio from './pages/Cardio';
import Supplements from './pages/Supplements';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

import styles from './App.module.css'

function App() {

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box className={`${styles['main-container']}`}>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/summary' element={<Summary />} />
          <Route exact path='/weights' element={<WeightTraining />} />
          <Route exact path='/cardio' element={<Cardio />} />
          <Route exact path='/supplements' element={<Supplements />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
