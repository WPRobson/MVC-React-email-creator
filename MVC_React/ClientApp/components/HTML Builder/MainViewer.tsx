import * as React from 'react';


interface ViewerProps {
    backGround: string;
    floatingColumn: boolean;
    floatingColumnColour: string;
    HTML: string;
    textColour: string;
    textSize: string;
    fontType: string;
}

export class MainViewer extends React.Component<ViewerProps> {


    public render() {
        return <div className="container-fluid" style={{ backgroundColor: this.props.backGround, height: '100%', border: "0.5px solid black" }} >
            <div className="container" style={{ backgroundColor: this.props.floatingColumnColour, height: '100%' }} hidden={!this.props.floatingColumn}>
                
                <div dangerouslySetInnerHTML={{ __html: this.props.HTML }} style={{ color: this.props.textColour, fontSize: `${this.props.textSize}px`, fontFamily: this.props.fontType}}/>
                
            </div>
        </div>;
    }



}