import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  const displayDesktop = () => {
    return (
      <AppBar position="sticky" style={{ top: 0, backgroundColor: '#003366' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            360 Feedback Form
          </Typography>
          <div>
            <Button color="inherit">About</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  };

  return (
    <header>
      {displayDesktop()}
    </header>
  );
};

export default Header;
