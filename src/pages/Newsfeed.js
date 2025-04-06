import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/Theme'
import { Grid, Box } from '@mui/material';
import Header from '../components/common/header/Header'
import Layout from '../components/layout/Layout';

function Newsfeed() {
  return (
      <ThemeProvider theme={theme}>
        <Grid container className={''}>
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Layout />
          </Box>
        </Grid>
      </ThemeProvider>
  )
}

export default Newsfeed;
