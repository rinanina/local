import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';

import { Routes } from 'features/Routes';
import { LanguageContext } from 'features/Language';

import GlobalStyle from './styles/global';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <>
            <GlobalStyle />
            <LanguageContext>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </LanguageContext>
        </>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
