import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './utils/store';
import { Components } from './utils/material-ui';
import theme from './utils/theme';

const { ThemeProvider, CssBaseline } = Components;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StateProvider>
      <App />
    </StateProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
