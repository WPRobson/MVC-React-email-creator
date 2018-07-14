import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Insertmarkdown} from "./Insertmarkdown"





declare var showdown: any; // magic

export class MarkdownEditor extends React.Component<any, any>{


    constructor() {
        super();
        this.state = { contentInput: "Email content", markdownText: "" };
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
                    <a data-toggle="tab" className="nav-link" href="#Insertcontent">Insert</a>
                </li>
                <li className="nav-item">
                    <a data-toggle="tab" className="nav-link" href="#CheatSheetcontent">Cheat sheet</a>
                </li>
            </ul>


            <div className="tab-content">
                <div id="controlsContent" className="tab-pane active">
                    <label>Content (Markdown)</label>
                    <textarea className="form-control" rows={20} onChange={(event) => this.ConventMarkdownToHtml(event.target.value)} value={this.props.markdown}> </textarea>
                </div>
                <div id="Insertcontent" className="tab-pane">
                    <Insertmarkdown />
                </div>
                <div id="CheatSheetcontent" className="tab-pane">
                    <a href="https://www.markdownguide.org/cheat-sheet">Markdown cheat cheet</a> 
                </div>


            </div>

        </div>

    }




    ConventMarkdownToHtml = (text: string) => {

        var converter = new showdown.Converter(),

            html = converter.makeHtml(text);

        this.setState({
            markdownText: text
        })

        this.props.setMarkdown(text)

        this.props.setHtml(html);

    }

    UpdateMarkdown = (value: string) =>
    {

        this.setState({
            markdownText: value

        })

    }
}