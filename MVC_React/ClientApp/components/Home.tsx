import * as React from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router';
import { Link, NavLink, RouteProps } from 'react-router-dom';

import { HtmlBuilder } from './Email Builder/HTML Editor/HtmlBuilder'

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

let newTo = {
    pathname: "/htmlbuilder/1111",
    param1: "Par1"
};

export class Home extends React.Component<any, HomeState>  {
    constructor() {
        super();

    }

    public render() {

        return <div className='' style={{ height: '100%' }}>

            <Table data={products} />

        </div>;
    }
}



export const TableRow = (props: any) => {

    return (
        <tr>
            <td key={props.name}>{props.id}</td>
            <td key={props.id}>{props.name}</td>
            <td><Link to={{pathname: '/emailcreator/'+props.id}}><button className="btn btn-danger">Edit</button></Link></td>
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
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((tableRow: any) => <TableRow key={tableRow.id} {...tableRow} />)}
                </tbody>
            </table>
        );
    }
}

