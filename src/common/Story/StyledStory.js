import { makeStyles } from '@mui/styles';

            /*-----------------------
                Story Custom Styles
            -----------------------*/

export const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
        backgroundColor: "#f1f",
        '& .MuiAvatar-root': {
            
        }
    },
    grid: {

        [theme.breakpoints.down('md')]: {

        },

    }
}));