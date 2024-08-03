import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderUserProfile from './HeaderUserProfile';
import { blue, grey } from '@mui/material/colors';
import Barmenu from './Barmenu';


const Header: React.FC = () => {

    const IconComponent = ({ children }: { children: React.ReactNode }) => {
        return (
            <IconButton
                sx={{
                    color: 'primary.light',
                    height: 40,
                    background: grey[800],
                    '&:hover': {
                        color: blue[700],
                        background: grey[700],
                        transition: 'all 0.7s ease',
                    },
                }}
            >
                {children}
            </IconButton>
        );
    };

    return (
        <AppBar
            style={{
                backgroundColor: "#202028",
                boxShadow: 'none',
                padding: '5px 0px',
                position: "sticky",
                display: 'flex',
                justifyContent: 'center',

            }}

        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <InputBase
                        placeholder="Search…"
                        sx={{ color: grey[400], background: grey[800], borderRadius: '5px', padding: '5px', minWidth: "350px" }}
                        startAdornment={<SearchIcon sx={{ paddingRight: "5px" }} />}
                    />
                </Box>

                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Barmenu />
                </Box>

                <Box display="flex" gap={3}>
                    <Box gap={1} sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                        <IconComponent>
                            <MailOutlineIcon />
                        </IconComponent>

                        <IconComponent>
                            <SettingsIcon />
                        </IconComponent>

                        <IconComponent>
                            <NotificationsIcon />
                        </IconComponent>
                    </Box>

                    <Box>
                        <HeaderUserProfile />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
