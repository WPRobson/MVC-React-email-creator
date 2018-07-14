import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Proterties } from './HTML Builder/Properties';
import { MainViewer } from './HTML Builder/MainViewer';
import { MarkdownEditor } from './HTML Builder/MarkdownEditor';

interface HomeState {
    backGroundColour: string;
    floatingColumn: boolean;
    floatingColumnColour: string;
    HTML: string;
    textColour: string;
    textSize: string;
    fontType: string;
    markdown: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor() {
        super();
        this.state = {
            backGroundColour: "#ffffff",
            floatingColumn: false,
            floatingColumnColour: "#efefef",
            HTML: "<p>Email content<p>",
            textColour: '#000000',
            textSize: '14',
            fontType: 'Arial, Helvetica, sans-serif',
            markdown: "Email content"
        };
    }



    public render() {
        return <div className='' style={{ height: '100%' }}>

           

            <Proterties backGround={this.state.backGroundColour} changeBackgroundColor={this.changeBackGrondColour}
                floatingColumn={this.state.floatingColumn}
                changeFloatingColumn={this.changeFloatingColumn}
                floatingColumnColour={this.state.floatingColumnColour}
                changeFloatingColumnColor={this.changeFloatingColoumnColour}
                HTML={this.state.HTML}
                setMarkDownText={this.setHtml}
                textColour={this.state.textColour}
                changeTextColour={this.changeTextColour}
                textSize={this.state.textSize}
                changeTextSize={this.changeTextSize}
                fontType={this.state.fontType}
                changeTextFont={this.changeTextFont}
               
            />
        
            
            <div className='col-sm-3' style={{ height: '100%', border: "0.5px solid black" }}>
                <MarkdownEditor setHtml={this.setHtml} markdown={this.state.markdown} setMarkdown={this.setMarkdown} /> 
            </div>

            <div className='col-sm-9' style={{ height: '100%' }}>
                <MainViewer backGround={this.state.backGroundColour}
                    floatingColumn={this.state.floatingColumn}
                    floatingColumnColour={this.state.floatingColumnColour}
                    HTML={this.state.HTML}
                    textColour={this.state.textColour}
                    textSize={this.state.textSize}
                    fontType={this.state.fontType}
                />
            </div>
        </div>;
    }


    changeBackGrondColour = (color: string) => {
        this.setState({
            backGroundColour: color
        });

    }


    changeFloatingColoumnColour = (color: string) => {
        this.setState({
            floatingColumnColour: color
        });

    }

    changeFloatingColumn = () => {
        this.setState({
            floatingColumn: !this.state.floatingColumn
        });

    }

    setHtml = (html: string) =>
        {
        this.setState({ HTML: html}) 
            

        }

    setMarkdown = (markdown: string) => {
        this.setState({ markdown: markdown })


    }


    changeTextColour = (color: string) => {
        this.setState({
            textColour: color
        });

    }

    changeTextSize = (size: string) => {
        this.setState({
            textSize: size
        });

    }

    changeTextFont = (font: string) => {
        this.setState({
            fontType : font
        });

    }


}
