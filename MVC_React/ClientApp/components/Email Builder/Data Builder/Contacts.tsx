import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


declare var Dropzone: any;
declare var fileDropZone: any;

export class Contacts extends React.Component<any, any> {
    constructor() {
        super();


        this.state = {


        };


    }


    public render() {
        return <div style={{ height: '100%' }}>
            <p>contacts</p>


            <form action="/file-upload"
                className="dropzone"
                id="my-awesome-dropzone"></form>


        </div>;
    }

}