import { Box, Card, CardContent, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react'
import CircularWithValueLabel from './CircularProgressWithLabel';


const ProfiltWidget: React.FC = () => {
  return (
    <Card sx={{
      backgroundColor: "secondary.main",
      color: "primary.light",
      borderRadius: "10px",
      '&:hover': {
        backgroundColor: "secondary.light",
        transition: 'all 0.4s ease',
        cursor: "pointer",
        color: "secondary.main"
      },
      height: { xs: "100%", sm: "100%", md: "150px" },
    }}>

      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant='subtitle1' color={"primary.light"}>Net Profit</Typography>
          <Typography variant='h4' sx={{ fontSize: { xs: "20px", sm: "20px", md: "30px" } }} color="primary.light" fontWeight={"bold"}>$ 6759.25</Typography>
          <Typography variant='subtitle1' color="green">
            <ArrowDropUpIcon />
            3%
          </Typography>
        </Box>
        <CircularWithValueLabel />
      </CardContent>
    </Card>

  )
}

export default ProfiltWidget