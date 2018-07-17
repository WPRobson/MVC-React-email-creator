import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { HtmlBuilder } from './HTML Builder/HtmlBuilder'

interface HomeState {



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


export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor() {
        super();
        this.state = {


        };
    }


    public render() {
        return <div className='' style={{ height: '100%' }}>

            <p>home</p>

            <Table data={products} />


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
