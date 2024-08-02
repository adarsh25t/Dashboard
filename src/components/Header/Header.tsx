import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Tooltip, Avatar, Menu, MenuItem, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderUserProfile from './HeaderUserProfile';
import { grey } from '@mui/material/colors';
import { useTheme } from '@emotion/react';


const Header: React.FC = () => {


    const IconComponent = ({ children }: { children: React.ReactNode }) => {
        return (
            <IconButton
                sx={{
                    color: 'primary.light',
                    background: grey[800],
                    '&:hover': {
                        color: grey[900],
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
        <AppBar position="static" style={{ backgroundColor: "#202028",boxShadow:'none',padding:'5px 0px' }}>
            <Toolbar>
                <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' }}}>
                    <InputBase
                        placeholder="Search…"
                        sx={{ color: grey[400], background: grey[800], borderRadius: '5px', padding: '5px',minWidth:"350px" }}
                        startAdornment={<SearchIcon sx={{paddingRight:"5px"}}/>}
                    />
                </Box>
                <Box display="flex" gap={3}>
                    <Box display="flex" gap={1}>
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
