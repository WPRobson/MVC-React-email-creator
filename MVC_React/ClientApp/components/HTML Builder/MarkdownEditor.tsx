import * as React from 'react';
import { RouteComponentProps } from 'react-router';





declare var showdown: any; // magic

export class MarkdownEditor extends React.Component<any, any>{


    constructor() {
        super();
        this.state = { contentInput: "Email content" };
    }

    public render() {
        return <div>

            <ul className="nav nav-tabs">
                <li className="nav-item active">
                    <a data-toggle="tab" className="nav-link active" href="#controlsContent" aria-expanded="true" aria-selected="true">Content</a>
                </li>

                <li className="nav-item">
                    <a data-toggle="tab" className="nav-link" href="#ImagesContent">Images</a>
                </li>
                <li className="nav-item">
                    <a data-toggle="tab" className="nav-link" href="#CheatSheetcontent">Cheat sheet</a>
                </li>
            </ul>


            <div className="tab-content">
                <div id="controlsContent" className="tab-pane active">
                    <label>Content (Markdown)</label>
                    <textarea className="form-control" rows={20} onChange={(event) => this.ConventMarkdownToHtml(event.target.value)} > </textarea>
                </div>


            </div>

        </div>

    }




    ConventMarkdownToHtml = (text: string) => {

        var converter = new showdown.Converter(),

            html = converter.makeHtml(text);


        this.props.setMarkDownText(html);

    }

}