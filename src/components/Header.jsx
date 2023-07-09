import React from 'react';

import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ pb: 1.25 }}>
      <AppBar position="relative" sx={{ p: 1.4 }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Legal Document Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
