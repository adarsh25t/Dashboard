import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import { grey } from '@mui/material/colors';

const Sidebar: React.FC = () => {
  return (
    <Box width={100} bgcolor={grey[900]} p={2}>
      <List>
        <ListItem >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
        </ListItem>
        {/* Add more list items as needed */}
      </List>
    </Box>
  );
};

export default Sidebar;