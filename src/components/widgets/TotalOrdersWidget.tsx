import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import { CardItemProps } from '../../lib/type';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TotalOrdersWidget: React.FC = () => {

  const CardItem: React.FC<CardItemProps> = ({ title, value, icon, percentage, iconBgColor, iconColor, percentageColor }) => {
    return (
      <Card sx={{
        backgroundColor: "secondary.main",
        color: "primary.light",
        borderRadius: "10px",
        '&:hover': {
          backgroundColor: "secondary.light",
          transition: 'all 0.4s ease',
          cursor: "pointer",
          color: "secondary.main",
        }
      }}>
        <CardContent>
          <Box sx={{
            padding: "10px",
            backgroundColor: iconBgColor,
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            color: iconColor,
          }}>
            {icon}
          </Box>
          <Typography variant="subtitle2" sx={{ marginTop: "5px", fontWeight: 400, fontFamily: "Poppins" }}>{title}</Typography>
          <Box display="flex" justifyContent="space-between" alignItems={"center"} mt={1.3}>
            <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "Poppins" }}>{value}</Typography>
            <Typography variant="subtitle1" color={percentageColor} sx={{ fontWeight: 400, fontFamily: "Poppins" }}>
              {percentageColor === "green" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              {percentage}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={3}>
          <CardItem
            title={"Total Orders"}
            value={"75"}
            icon={<StorefrontOutlinedIcon />}
            percentage={"3%"}
            iconBgColor={"rgba(72, 98, 255, 0.24)"}
            iconColor={"#4C55FF"}
            percentageColor={"green"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardItem
            title={"Total Delivered"}
            value={"70"}
            icon={<ShoppingBagOutlinedIcon />}
            percentage={"3%"}
            iconBgColor={"rgba(67, 160, 71, 0.3)"}
            iconColor={"#43A047"}
            percentageColor={"red"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardItem
            title={"Total Cancelled"}
            value={"05"}
            icon={<ShoppingBagOutlinedIcon />}
            percentage={"3%"}
            iconBgColor={"rgba(255, 138, 101, 0.28)"}
            iconColor={"#FF8A65"}
            percentageColor={"green"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardItem
            title={"Total Revenue"}
            value={"$12k"}
            icon={<CurrencyExchangeOutlinedIcon />}
            percentage={"3%"}
            iconBgColor={"rgba(192, 33, 96, 0.23)"}
            iconColor={"#C02160"}
            percentageColor={"red"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TotalOrdersWidget