import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { HtmlBuilder} from './HTML Builder/HtmlBuilder'

interface HomeState {
    
   
   
}


export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor() {
        super();
        this.state = {
          
            
        };
    }


    public render() {
        return <div className='' style={{ height: '100%' }}>

            <p>home</p>
        
        </div>;
    }



   


}
