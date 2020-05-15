import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Dashboard';

import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import { MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: orange, // For components
        inherit: grey, // For text
        secondary: { // To blend with orange
            main: "#ffffff" // white
        },
    }
});

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}

        {/* Add Theme */}
        <MuiThemeProvider theme={theme}>
            <Dashboard />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
