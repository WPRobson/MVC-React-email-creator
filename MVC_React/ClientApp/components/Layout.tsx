import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <NavMenu />
            <div className='container-fluid' style={{ height: '100%' }} id="EmailMainContainer">
                {this.props.children}
            </div>
        </div>;
    }
}