import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const img = ['https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500']

function StatsBoxSlider() {
    return <>
        <Box component="div" sx={{ position: 'relative',  border: '1px dashed grey' }}>
            <Box component="span" sx={{ zIndex: 'tooltip', position: 'absolute', top: 1, right: 1, p: 2, border: '1px dashed grey' }}>
                <Button>Left</Button>
                <Button>Right</Button>
            </Box>

            <Card sx={{ position: 'relative' }}>
                {img.map((i,k) => {
                    return (
                        <div key={k}>
                        <CardMedia
                            
                            component="img"
                            
                            image={i}
                            alt="Paella dish"
                            sx={{ cursor: 'pointer',top:1, left:1,height:{xs: 100, md: 300 },}}
                        />
                        </div>

                    )
                })}

            </Card>
        </Box>
    </>;
}

export default StatsBoxSlider;
