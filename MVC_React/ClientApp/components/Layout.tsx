import * as React from 'react';
import { NavMenu } from './NavMenu';
import { App } from './App'

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            
            <div className='container-fluid' style={{ height: '100%' }} id="EmailMainContainer">
                <p>ji</p>
              <App />
            </div>
        </div>;
    }
}
