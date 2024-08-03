import React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { data } from '../../assets/chartData';
import { CustomBarProps } from '../../lib/type';
import SelectBarchart from './SelectBarchart';

const CustomBar: React.FC<CustomBarProps> = ({ fill, x, y, width, height }) => {
  const radius = 15; // Radius for top and bottom border

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

const ActivityWidget: React.FC = () => {
  return (
    <Box bgcolor={'secondary.main'} p={2} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h6' fontWeight={700} color={'primary.light'}>Activity</Typography>
        <SelectBarchart />
      </Box>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          width={900}
          height={150}
          data={data}
          margin={{ top: 15 }}
        >
          <CartesianGrid strokeDasharray="1 9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar 
            dataKey="pv" 
            fill="#1976d2"
            shape={(props: any) => <CustomBar {...props} />}
          />
          <Bar 
            dataKey="uv" 
            fill="#1976d2"
            shape={(props: any) => <CustomBar {...props} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityWidget;
