import * as React from 'react';
import { RouteComponentProps } from 'react-router';

//interface PropertiesProps {
//    backGround: string;
//    floatingColumn: boolean;
//    changeFloatingColumn: any;
//    changeBackgroundColor: any;
//    floatingColumnColour: any;
//    contentInput: string;
//    changeFloatingColumnColor: any;


//}



declare var showdown: any; // magic

export class Proterties extends React.Component<any, any>{

    constructor() {
        super();
        this.state = { contentInput: "Email content" };
    }

    public render() {
        return <div className="container-fluid">


            <div className="form-group">
                <label>Background Colour</label>
                <input type="color" id="head" name="color" value={this.props.backGround} className="form-control" onChange={(event) => { this.props.changeBackgroundColor(event.target.value) }} />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={(event) => { this.props.changeFloatingColumn() }} />
                <label className="form-check-label" >
                    Floating column
                        </label>
            </div>

            <div className="form-group" hidden={!this.props.floatingColumn}>
                <label hidden={!this.props.floatingColumn} >Floating Column colour</label>
                <input type="color" id="head" name="color" value={this.props.floatingColumnColour} className="form-control" hidden={!this.props.floatingColumn} onChange={(event) => { this.props.changeFloatingColumnColor(event.target.value) }} />
            </div>
            <br />
            <div className="form-group">
                <label>Content (Markdown)</label>
                <textarea className="form-control" rows={10} value={this.state.contentInput} onChange={(event) => this.updateMarkdownContent(event.target.value)} >
                    Email content here
                </textarea>
                <button onClick={() => { this.ConventMarkdownToHtml() }}>Save</button>
            </div>

            <div className="form-group">
                <label>Text Colour</label>
                <input type="color" value={this.props.textColour} className="form-control" onChange={(event) => { this.props.changeTextColour(event.target.value) }} />
            </div>


            <div className="form-group">
                <label>Font Size</label>
                <input type="text" value={this.props.textSize} className="form-control" onChange={(event) => { this.props.changeTextSize(event.target.value) }} />
            </div>

            <div className="form-group">
                <label>Font Type </label>
                <select className="custom-select form-control">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>


        </div>;
    }


    ConventMarkdownToHtml = () => {

        var converter = new showdown.Converter(),

            html = converter.makeHtml(this.state.contentInput);


        this.props.setMarkDownText(html);

    }


    updateMarkdownContent = (newMarkDown: string) =>
    {
        this.setState({ contentInput: newMarkDown})

    }


}
