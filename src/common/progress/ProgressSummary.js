import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {Card,Box,Grid} from '@mui/material';
import {styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent:'space-around',
    alignItems:'center',
    textAlign:'center',
  }
}));

const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  display:'flex', 
  position:'relative', 
  alignItems:'center', 
  margin:'auto', 
  '& .MuiCircularProgress-svg':{
      '& .MuiCircularProgress-circle':{
      },
  },
}));

function CircularProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <>
    <Card>
    <Box sx={{ position: 'relative', display: 'flex', border: '1px dashed grey' }}>
      <CustomCircularProgress  color="success" size='8em' variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{fontSize:'2em'}} variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      </Box>

      
      <Box
        sx={{
          textAlign:'center',
          
        }}
      >
        <div className="progress-arc-summary">
        <div className="progress-arc-summary-info">
          <p className="progress-arc-summary-title">Profile Completion</p>

          <p className="progress-arc-summary-subtitle">Marina Valentine</p>

          <p className="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
        </div>
        </div>
      </Box>
      <Grid className={classes.grid} container>
        <Grid xm={4}>7<br/>
        Post
        </Grid>
        <Grid xm={4}>6<br/>
        Followers
        </Grid>
        <Grid xm={4}>6<br/>
        Following
        </Grid>
      </Grid>
      </Card>
    </>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressSummary() {
  const [progress, setProgress] = React.useState(70);



  return (
  <CircularProgressWithLabel value={progress} />
  );
}




