import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardLayout from './components/DashboardLayout';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

const App: React.FC = () => {
  return (
  <ThemeProvider theme={theme}>
    <DashboardLayout />
  </ThemeProvider>)
}

export default App;