import React from 'react';

import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © Chinoy Law ${new Date().getFullYear()}`}
    </Typography>
  );
}
