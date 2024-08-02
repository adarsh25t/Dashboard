import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import GridViewIcon from '@mui/icons-material/GridView';
import { blue, grey } from '@mui/material/colors';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ListItemComponentProps } from '../lib/type';



const ListItemComponent: React.FC<ListItemComponentProps> = ({ children, selected, onClick }) => {
    return (
        <ListItem
            onClick={onClick}
            sx={{ width: "60px" }}
        >
            <ListItemIcon sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: selected ? blue[600] : grey[400],
                '&:hover': {
                    color: blue[600]
                },
                transition: "all 0.7s ease",
                cursor: "pointer",
                "&.Mui-selected": {
                    color: blue[600],
                },

            }}>
                {children}
            </ListItemIcon>
        </ListItem>
    );
}

const MobileSlider: React.FC = () => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Box
            bgcolor={'secondary.main'}
            sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                borderRadius: "10px",
                marginTop: "10px",

            }}>

            <List sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

            }}
            >
                <ListItemComponent
                    selected={selectedIndex === 0}
                    onClick={() => handleListItemClick(0)}
                >
                    <HomeIcon />
                </ListItemComponent>

                <ListItemComponent
                    selected={selectedIndex === 1}
                    onClick={() => handleListItemClick(1)}
                >
                    <BarChartIcon />
                </ListItemComponent>

                <ListItemComponent
                    selected={selectedIndex === 2}
                    onClick={() => handleListItemClick(2)}
                >
                    <LocalMallOutlinedIcon />
                </ListItemComponent>

                <ListItemComponent
                    selected={selectedIndex === 3}
                    onClick={() => handleListItemClick(3)}
                >
                    <AccountBalanceWalletOutlinedIcon />
                </ListItemComponent>

                <ListItemComponent
                    selected={selectedIndex === 4}
                    onClick={() => handleListItemClick(4)}
                >
                    <AssignmentTurnedInOutlinedIcon />
                </ListItemComponent>
            </List>
        </Box>
    );
};

export default MobileSlider;