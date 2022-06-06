import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import { Header } from 'features/Header';

import { routes } from '../config/routes';

const Routes = () => (
    <div>
        <Header />
        <BrowserRoutes>
            {routes.map(({ path, exact, element }) =>
                <Route key={path} path={path} element={element} />)
            }
        </BrowserRoutes>
    </div>
);

export default Routes;
