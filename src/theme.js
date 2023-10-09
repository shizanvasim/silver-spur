import { createTheme } from '@mui/material/styles';
import "@fontsource/merriweather";
import "@fontsource/raleway";


const theme = createTheme({
    palette: {
        primary: {
            main: '#E6E6E6',
        },
        secondary: {
            main: '#6C6C6B',
        },
    },
    typography: {
        fontFamily: 'Raleway',
        default: {
            fontFamily: 'Raleway',
            color: '#6C6C6B',
        },
        h1: {
            fontFamily: 'Raleway',
        },
        h2: {
            fontFamily: 'Raleway',
        },
        h3: {
            fontFamily: 'Raleway',
        },
        h4: {
            fontFamily: 'Raleway',
        },
        h5: {
            fontFamily: 'Raleway',
        },
        h6: {
            fontFamily: 'Raleway',
        },
        body1: {
            fontFamily: 'Merriweather',
        },
        body2: {
            fontFamily: 'Merriweather',
        }
    },
    spacing: 8,
});

export default theme;
