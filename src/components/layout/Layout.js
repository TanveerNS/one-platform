import React from 'react';
import { Grid, CardMedia, Box } from '@mui/material';
import Feed from '../Feed'
import Story from '../../common/Story/Story'
import RightBar from '../rightbar/RightBar'
import Post from '../section/quickpost/Post';

function Layout() {
  return(
  <Box component="div" >
    <Grid container className={'content p-lr'}>
      <Grid item md={12} sm={12} xs={12}>
        <CardMedia
          component="img"
          width="100%"
          image="/assets/img/banner/banner-bg.png"
          alt="Paella dish"
          sx={{ height: { xs: 86, md: 164, }, }}
        />
        <Story />
      </Grid>
      <Grid item md={8} sm={12} sx={{ pt: { xs: 1, md: 3 }, }}>
        
        <Post />

        <Feed />
        
      </Grid>
      <Grid item md={4} sm={12} sx={{ pt: { xs: 1, md: 3 }, pl: { xs: 0, md: 2 } }}>
        <RightBar />
      </Grid>

    </Grid>
  </Box>
  );
}

export default Layout;
