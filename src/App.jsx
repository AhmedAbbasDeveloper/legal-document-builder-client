import React from 'react';

import {
  Box,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <Container component="main" maxWidth="sm">
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Legal Document Generator
            </Typography>

            <Form />
          </Paper>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
