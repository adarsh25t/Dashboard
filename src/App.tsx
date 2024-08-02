import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardLayout from './components/DashboardLayout';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#F5F5F5',
    },
    secondary: {
      main: '#202028',
    },
    background: {
      default: '#141416',
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