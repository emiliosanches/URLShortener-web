import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Homepage';
import { Documentation } from './pages/Documentation';
import { DocumentationAbout } from './pages/Documentation/info/about';


export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/documentation" component={Documentation} exact />
            <Route path="/documentation/info/about" component={DocumentationAbout} exact />
        </BrowserRouter>
    )
} 