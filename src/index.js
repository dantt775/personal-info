import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/routes/Routes.jsx'
import "./assets/scss/main.scss"

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#003368' }, // Purple and green play nicely together.
        secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid #ffffff'
                },
                '&:hover:not($disabled):not($error):not($focused):before': {
                    borderBottom: '2px solid #ffffff'
                },
            },
            disabled: { borderBottom: '1px solid #ffffff' },
            focused: { borderBottom: '1px solid #ffffff' },

        },
        Contact: {
            textField: {
                width: '400px',                
                fontSize: '60px'
            }
        },
       


    },
});



ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Routes />
    </MuiThemeProvider>
    , document.getElementById('app')
);


