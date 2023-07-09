import React from 'react';

import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" fontWeight={500} align="center">
          {`Copyright © ${new Date().getFullYear()} Ahmed Abbas`}
        </Typography>
      </Container>
    </Box>
  );
}
