import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { HtmlBuilder} from './HTML Editor/HtmlBuilder'



export class EmailCreator extends React.Component<RouteComponentProps<{ id: any }>, any> {
    constructor() {
        super();
        this.state = {
           

        };


    }


    public render() {
        return <div className='' style={{ height: '100%' }}>

            
            <ul className="nav nav-tabs">
                <li className="nav-item active">
                    <a data-toggle="tab" className="nav-link active" href="#EmailEditor" aria-expanded="true" aria-selected="true">Email Content</a>
                </li>

                <li className="nav-item">
                    <a data-toggle="tab" className="nav-link" href="#DataEditor">Data</a>
                </li>
            </ul>


            <div className="tab-content" style={{ height: '100%' }}>
                <div id="EmailEditor" className="tab-pane active" style={{ height: '100%' }}>
                    <HtmlBuilder />
                </div>
                <div id="DataEditor" className="tab-pane" style={{ height: '100%' }}>
                    <p>data</p>
                </div>



            </div>



            <p>Id: {this.props.match.params.id}</p> 
           

        </div>;
    }

}
