import * as React from 'react';
import { RouteComponentProps } from 'react-router';







export class Insertmarkdown extends React.Component<any, any>{


    //constructor() {
    //    super();
    //    this.state = { contentInput: "Email content", markdownText: "" };
    //}

    public render() {
        return <div id="InsertContent" className="row">
            <div className="col-sm-6">
                <div className="InsertOption">
                    <label>Line Break</label> <button className="btn btn-info">Insert</button>
                </div>
                <div className="InsertOption ">
                    <label>HyperLink</label> <button className="btn btn-info">Insert</button>
                </div>
            </div>

            <div className="col-sm-6">
            <div className="InsertOption ">
                <label>Bullet Point</label> <button className="btn btn-info">Insert</button>
                </div>
                <div className="InsertOption ">
                    <label>Formatted link</label> <button className="btn btn-info">Insert</button>
                </div>
            </div>

            <p>These are some basic elements you can insert into your layout, but more options are availible by using markdown such as text formatting. See the cheat sheet tab for deatils.</p>


        </div>

          

    }




}