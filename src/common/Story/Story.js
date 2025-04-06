import React from 'react';

import { styled } from '@mui/material/styles';
import { Card, Box, Grid, Avatar, Badge, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { StyledAvatar, StyledBox, StyledBadge } from '../StyledCollection';
import { useStyles } from './StyledStory'



export default function Story() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Stack direction="row" spacing={2}>
                <StyledBox>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                </StyledBox>
                <StyledBox>
                    <StyledAvatar

                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    >
                        {/* <CircularProgress style={{ width: '80px', height: '80px', }} /> */}
                    </StyledAvatar>

                    <Typography variant="caption" color="text.secondary">
                        Name
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <StyledAvatar

                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    >
                        {/* <CircularProgress style={{ backgroundColor:'#323232', width: '80px', height: '80px', }} /> */}
                    </StyledAvatar>
                    <Typography variant="caption" color="text.secondary">
                        Name
                    </Typography>
                </StyledBox>
            </Stack>
        </Card>
    );
}
