import { Box } from '@mui/material';
import React from 'react'
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';
import Header from './Header/Header';

const DashboardLayout: React.FC = () => {
    return (
        <Box display="flex" height="100vh">
          <Sidebar />
          <Box flex={1} display="flex" flexDirection="column">
            <Header />
            <DashboardContent />
          </Box>
        </Box>
      ); 
}

export default DashboardLayout;