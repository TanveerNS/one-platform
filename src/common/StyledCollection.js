import { styled } from '@mui/material/styles';
import { Card, Box, Grid, Avatar, Badge, Typography } from '@mui/material';

                /*-------------------
                        Story
                -------------------*/

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.primary}`,
    width: "80px",
    height: "80px",
    cursor: "pointer",
    backgroundColor: `${theme.palette.primary.main}`,
    transition: `${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })}`,
      '&:hover':{
        backgroundColor: `${theme.palette.secondary.main}`,
        transform: 'scale(1.1)',
      },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));