import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { Home } from './Home'
import { HtmlBuilder } from './HTML Builder/HtmlBuilder'


let test: string = "YAY!";
export class App extends React.Component<any,any> {
    public render() {
        return <div>
            <NavMenu />
            <div className='container-fluid' style={{ height: '100%' }} id="EmailMainContainer">
                <Route
                    exact path='/'
                    render={() => (
                        <Home something={test} />
                    )}
                    />
                <Route
                     path='/htmlbuilder:id'
                    render={() => (
                        <HtmlBuilder something={test} />
                    )}
                />
            </div>

            
        </div>;
    }
}
