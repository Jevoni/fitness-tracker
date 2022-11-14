import { Route, Routes } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import WeightTraining from './pages/WeightTraining';
import Cardio from './pages/Cardio';
import Supplements from './pages/Supplements';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/weights' element={<WeightTraining />} />
        <Route exact path='/cardio' element={<Cardio />} />
        <Route exact path='/supplements' element={<Supplements />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </Box>
  );
}

export default App;
