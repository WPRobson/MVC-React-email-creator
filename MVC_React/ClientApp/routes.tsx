import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { App } from './components/App';

let test: string ="this is only a test"
export const routes = <App>


    <Route
        exact path='/'
        render={(routeProps) => (
            <Home {...routeProps} {...test} />
        )}
    />
</App>;
