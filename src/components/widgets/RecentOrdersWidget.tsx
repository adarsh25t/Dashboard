import { Box, Typography } from '@mui/material'
import React from 'react'
import OrderTable from './OrderTable'


function RecentOrdersWidget() {
  return (
    <Box bgcolor={'secondary.main'} p={2} sx={{ height: "450px", overflowY: "scroll",borderRadius: '10px' }}>
        <Typography variant='h6' fontWeight={700} color={'primary.light'}>Recent Orders</Typography>
        <OrderTable />
    </Box>
  )
}

export default RecentOrdersWidget