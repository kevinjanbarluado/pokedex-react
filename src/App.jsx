import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <CssBaseline />
        <Header />
        <Body />
        <Footer />
      </Box>
    </ThemeProvider>

  );
}

export default App;
