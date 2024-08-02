import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material'
import React from 'react'

function ActivityWidget() {
  return (
    <Box bgcolor={'secondary.main'} p={2} sx={{ borderRadius: '10px' }}>
      <Typography variant='h6' fontWeight={700} color={'primary.light'}>Activity</Typography>

      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        height={150}
      />
    </Box>
  )
}

export default ActivityWidget