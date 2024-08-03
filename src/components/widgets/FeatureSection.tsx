import { Box, Typography } from '@mui/material'
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import React from 'react'
import { FeatureSectionProps } from '../../lib/type';


const FeatureSection: React.FC = () => {

    const FeatureItem: React.FC<FeatureSectionProps> = ({ title, iconColor, iconBgColor, icon }) => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Box sx={{
                        width: '45px',
                        height: '45px',
                        backgroundColor: iconBgColor,
                        color: iconColor,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {icon}
                    </Box>
                    <Typography variant="subtitle1" color={'primary.light'}>{title}</Typography>
                </Box>
                <Box sx={{
                    width: '25px',
                    height: '25px',
                    backgroundColor: 'secondary.light',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'primary.light',

                }}>
                    <KeyboardArrowRightTwoToneIcon />
                </Box>
            </Box>
        )
    }

    return (
        <Box
            bgcolor={'secondary.main'}
            p={2}
            sx={{ borderRadius: '10px', minHeight: "100%" }}
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            gap={2.5}
        >
            <FeatureItem
                iconBgColor={'rgba(255, 138, 101, 0.3)'}
                title={'Goals'}
                iconColor={'#FF5722'}
                icon={<MyLocationTwoToneIcon />}
            />
            <FeatureItem
                iconBgColor={'rgba(92, 107, 192, 0.37)'}
                title={'Popular Dishes'}
                iconColor={'#1976D2'}
                icon={<RamenDiningOutlinedIcon />}
            />
            <FeatureItem
                iconBgColor={'rgba(0, 188, 212, 0.31)'}
                title={'Menus'}
                iconColor={'#00BCD4'}
                icon={<LunchDiningTwoToneIcon />}
            />
        </Box>
    )
}

export default FeatureSection