import { Box, Tooltip, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react'

const pData = [
  { value: 4000 }, { value: 3000 }, { value: 2000 },
  { value: 2780 }, { value: 1890 }, { value: 2390 },
  { value: 3490 }, { value: 4000 }, { value: 3000 },
  { value: 2000 }, { value: 2780 }, { value: 1890 },
  { value: 2390 }, { value: 3490 }, { value: 4000 },
  { value: 3000 }, { value: 2000 }, { value: 2780 },
];


const xLabels = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];

function ActivityWidget() {
  return (
    <Box bgcolor={'secondary.main'} p={2} sx={{ borderRadius: '10px' }}>
      <Typography variant='h6' fontWeight={700} color={'primary.light'}>Activity</Typography>

      <BarChart
        height={150}
        series={[
          { data: pData, label: 'pv', id: 'pvId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        
      />
      
    </Box>
  )
}

export default ActivityWidget