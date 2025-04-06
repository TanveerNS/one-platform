import { createTheme } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#dfdfdf',
            main: '#d8d8d8',
            dark: '#979797',
            contrastText: '#000',
        },
        
      },
  });