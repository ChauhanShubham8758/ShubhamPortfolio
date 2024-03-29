import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@mantine/core/styles.css';
import "@mantine/notifications/styles.css";
import './index.css';

const theme = createTheme({
  breakpoints: {
    xxs: '320px',
    xs: '425px',
    sm: '768px',
    md: '1024px',
    lg: '1440px',
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
    <Notifications />
      <App/>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
