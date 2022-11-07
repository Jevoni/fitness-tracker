import { Route, Routes } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
