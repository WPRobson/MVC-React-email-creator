import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Proterties } from './HTML Builder/Properties';
import { MainViewer } from './HTML Builder/MainViewer';

interface HomeState {
    backGroundColour: string;
    floatingColumn: boolean;
    floatingColumnColour: string;
    markDownContent: string;
    textColour: string;
    textSize: string;
    fontType: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor() {
        super();
        this.state = {
            backGroundColour: "#ffffff",
            floatingColumn: false,
            floatingColumnColour: "#00aaaa",
            markDownContent: "<p>Email content<p>",
            textColour: '#000000',
            textSize: '14',
            fontType: 'Arial, Helvetica, sans-serif'
        };
    }



    public render() {
        return <div className='row' style={{ height: '100%' }}>
            <div className='col-sm-2' style={{ height: '100%' }}>
                <Proterties backGround={this.state.backGroundColour} changeBackgroundColor={this.changeBackGrondColour}
                    floatingColumn={this.state.floatingColumn}
                    changeFloatingColumn={this.changeFloatingColumn}
                    floatingColumnColour={this.state.floatingColumnColour}
                    changeFloatingColumnColor={this.changeFloatingColoumnColour}
                    markDownContent={this.state.markDownContent}
                    setMarkDownText={this.setMarkDownText}
                    textColour={this.state.textColour}
                    changeTextColour={this.changeTextColour}
                    textSize={this.state.textSize}
                    changeTextSize={this.changeTextSize}
                    fontType={this.state.fontType}
                />
            </div>

            <div className='col-sm-10' style={{ height: '100%' }}>
                <MainViewer backGround={this.state.backGroundColour}
                    floatingColumn={this.state.floatingColumn}
                    floatingColumnColour={this.state.floatingColumnColour}
                    markDownContent={this.state.markDownContent}
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

    setMarkDownText = (markdownText: string) =>
        {
        this.setState({ markDownContent: markdownText}) 
            

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


}
