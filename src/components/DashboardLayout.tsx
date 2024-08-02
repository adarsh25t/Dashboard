import { Box } from '@mui/material';
import React from 'react'
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';
import Header from './Header/Header';

const DashboardLayout: React.FC = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection="row"
    >
      <Sidebar />
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        overflow="hidden" // Ensure content does not overflow and cause scrolling
      >
        <Header />
        <Box
          flex={1}
          overflow="auto" // Allow scrolling for the dashboard content only
        >
          <DashboardContent />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;