import { Box } from '@mui/material';
import React from 'react'
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';
import Header from './Header/Header';

const DashboardLayout: React.FC = () => {
    return (
        <Box display="flex" height="auto" >
          <Sidebar />
          <Box flex={1} display="flex" flexDirection="column">
            <Header />
            <DashboardContent />
          </Box>
        </Box>
      ); 
}

export default DashboardLayout;