import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { HtmlBuilder } from './HTML Editor/HtmlBuilder'
import { Contacts } from './Data Builder/Contacts'



export class EmailCreator extends React.Component<RouteComponentProps<{ id: any }>, any> {
    constructor() {
        super();
        this.state = {


        };


    }


    public render() {
        return <div className='' style={{ height: '100%' }}>

            <div style={{ height: '100%' }}>
                <HtmlBuilder />
            </div>

            <p>Id: {this.props.match.params.id}</p>


        </div>;
    }

}
