import * as React from 'react';
import { RouteComponentProps } from 'react-router';



declare var showdown: any; // magic

export class Proterties extends React.Component<any, any>{

    constructor() {
        super();
        this.state = { contentInput: "Email content" };
    }

    public render() {
        return <div className="container-fluid propertiesBar">


            <label>Background Colour</label>
            <input type="color" value={this.props.backGround} onChange={(event) => { this.props.changeBackgroundColor(event.target.value) }} />

            
            <label className="form-check-label">Floating column</label>
            <input className="form-check-input" type="checkbox" checked={this.props.floatingColumn} id="defaultCheck1" onChange={(event) => { this.props.changeFloatingColumn() }}  disabled />
      

            <label>Floating Column colour</label>
            <input type="color" value={this.props.floatingColumnColour} disabled={!this.props.floatingColumn} onChange={(event) => { this.props.changeFloatingColumnColor(event.target.value) }} />


            <label>Text Colour</label>
            <input type="color" value={this.props.textColour} onChange={(event) => { this.props.changeTextColour(event.target.value) }} />

            <label>Font Size</label>
            <input type="text" value={this.props.textSize} onChange={(event) => { this.props.changeTextSize(event.target.value) }} />


            <label>Font Type </label>
            <select className="custom-select" onChange={(event) => this.props.changeTextFont(event.target.value)}>
                <option defaultValue ="Arial, Helvetica, sans-serif" >Arial, Helvetica, sans-serif</option>
                <option value="Georgia, serif">Georgia, serif</option>
                <option value="Palatino Linotype, Book Antiqua, Palatino, serif">Palatino Linotype, Book Antiqua, Palatino, serif</option>
                <option value="Times New Roman, Times, serif">Times New Roman, Times, serif</option>
                <option value="Arial Black, Gadget, sans-serif">Arial Black, Gadget, sans-serif</option>
                <option value="Comic Sans MS, cursive, sans-serif">Comic Sans MS, cursive, sans-serif</option>
                <option value="Impact, Charcoal, sans-serif">Impact, Charcoal, sans-serif</option>
                <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">Lucida Sans Unicode, Lucida Grande, sans-serif</option>
                <option value="Tahoma, Geneva, sans-serif">Tahoma, Geneva, sans-serif</option>
                <option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet MS, Helvetica, sans-serif"</option>
                <option value="Verdana, Geneva, sans-serif">Verdana, Geneva, sans-serif</option>
                <option value="Courier New, Courier, monospace">Courier New, Courier, monospace</option>
                <option value="Lucida Console, Monaco, monospace">Lucida Console, Monaco, monospace</option>
            </select>


        </div >;
    }

}
