import * as React from 'react';


interface ViewerProps {
    backGround: string;
    floatingColumn: boolean;
    floatingColumnColour: string;
    markDownContent: string;
    textColour: string;
}

export class MainViewer extends React.Component<ViewerProps> {


    public render() {
        return <div className="container-fluid" style={{ backgroundColor: this.props.backGround, height: '100%', border: "0.5px solid black" }} >
            <div className="container" style={{ backgroundColor: this.props.floatingColumnColour, height: '100%' }} hidden={!this.props.floatingColumn}>
                
                <div dangerouslySetInnerHTML={{ __html: this.props.markDownContent }} style={{color: this.props.textColour}}/>
                
            </div>
        </div>;
    }



}