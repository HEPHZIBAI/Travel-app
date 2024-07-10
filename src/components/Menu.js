import React from 'react'
import  Box from '@mui/material/Box'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PlaceIcon from '@mui/icons-material/Place';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import InfoIcon from '@mui/icons-material/Info';

const Menu = () => {
  return (
    <Box flex={1} mt={2} sx={{width:{xs:'100px',sm:'none'}}}>
      <Box position='fixed'>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon >
              <AirplanemodeActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Plan Your Trip" sx={{display:{xs:'none', sm:'block'}}} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Things To Do" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ExploreIcon/>
            </ListItemIcon>
            <ListItemText primary="Explore" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityNewIcon/>
            </ListItemIcon>
            <ListItemText primary="Facts" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PlaceIcon/>
            </ListItemIcon>
            <ListItemText primary="Places" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LocalActivityIcon/>
            </ListItemIcon>
            <ListItemText primary="Tickets" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="Help" sx={{display:{xs:'none', sm:'block'}}}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Menu