import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#BF0105',
            contrastText: '#ffffff',
        },
        secondary: pink,
    },
});

export default theme;