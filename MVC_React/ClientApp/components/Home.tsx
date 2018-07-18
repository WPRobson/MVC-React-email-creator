import * as React from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router';
import { Link, NavLink, RouteProps } from 'react-router-dom';

import { HtmlBuilder } from './HTML Builder/HtmlBuilder'

interface HomeState {

    redirect: boolean;
}

let products = [{
    name: "Kitcat email",
    id: 1
}, {
    name: "Turtle Email",
    id: 2
}, {
    name: "V12 kangeroo Email",
    id: 3
}];


export class Home extends React.Component<any, HomeState>  {
    constructor() {
        super();

    }

  

    public render() {

        return <div className='' style={{ height: '100%' }}>

            <Table data={products} />

            <NavLink to={'/htmlbuilder:1212'}  exact activeClassName='active'>
                <span className='glyphicon glyphicon-envelope'></span> Email creator
                                </NavLink>
            


            

        </div>;
    }
}



export const TableRow = (props: any) => {

    return (
        <tr>
            <td key={props.name}>{props.id}</td>
            <td key={props.id}>{props.name}</td>
        </tr>

    );


}


class Table extends React.Component<any> {

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email Name</th>


                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((tableRow: any) => <TableRow key={tableRow.id} {...tableRow} />)}
                </tbody>
            </table>
        );
    }
}

class testRoute extends React.Component<any> {

    render() {
        return (
            <p>test</p>
        );
    }
}
