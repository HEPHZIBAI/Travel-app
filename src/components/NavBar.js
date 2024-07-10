import { AppBar, Toolbar, Typography, Avatar, styled, Badge, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RightBar from './RightBar';
import React, { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavBar = () => {
  const [showRightBar, setShowRightBar] = useState(false);

  const handlePhotoClick = () => {
    setShowRightBar(!showRightBar);
  };

  return (
    <>
      <AppBar position='sticky'>
        <StyledToolBar>
          <Typography variant='h5'>Tours</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Button size='small'
              sx={{ display: { xs: 'block', sm: 'none' } }}
              variant='contained'
              color='secondary'
              onClick={handlePhotoClick}
            >
              Photo Gallery
            </Button>
            <Badge badgeContent={4} color="secondary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsActiveIcon color="action" />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
          </Box>
        </StyledToolBar>
      </AppBar>
      {showRightBar && <RightBar />}
    </>
  );
};

export default NavBar;
