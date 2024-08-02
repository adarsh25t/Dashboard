import { Box, Grid } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'
import TotalOrdersWidget from './widgets/TotalOrdersWidget'
import ActivityWidget from './widgets/ActivityWidget'
import RecentOrdersWidget from './widgets/RecentOrdersWidget'
import FeedbackWidget from './widgets/FeedbackWidget'
import ProfiltWidget from './widgets/ProfiltWidget'
import FeatureSection from './widgets/FeatureSection'

const DashboardContent: React.FC = () => {
  return (
    <Box flex={1} display="flex" flexDirection="column" gap={2} bgcolor={'background.default'}>
      <Box p={3}>
        <h1 className='text-2xl font-bold mb-4 text-white'>Dashboard</h1>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            <TotalOrdersWidget />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfiltWidget />
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <ActivityWidget />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FeatureSection />
          </Grid>


          <Grid item xs={12} sm={6} md={8}>
            <RecentOrdersWidget />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeedbackWidget />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default DashboardContent