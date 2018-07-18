import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { HtmlBuilder } from './components/HTML Builder/HtmlBuilder'
import { DraftEditor } from './components/HTML Builder/DraftEditor'
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
