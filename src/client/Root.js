import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

const baseUrl = process.env.REACT_APP_BASE_URL;
const Root = () => (
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);

export default Root;