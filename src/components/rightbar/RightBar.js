import React from 'react';
import Divider from '@mui/material/Divider';
// import StatsBoxSlider from '../../common/StatsBoxSlider';

import TrendingSummary from '../../common/TrendingSummary';
import Progress from '../section/widget/Progress';
import StatsBoxSlider from '../../common/stats/StatsBoxSlider';

function RightBar() {
      
  return (
    <>
    <StatsBoxSlider />
    {/* <StatsBoxSlider /> */}
    <Progress />
    <Divider style={{height:'100px',}} />
    <TrendingSummary />
    <Divider style={{height:'300px',}} />
  </>
    );
}

export default RightBar;
