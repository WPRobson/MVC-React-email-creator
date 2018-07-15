import * as React from 'react';
import { RouteComponentProps } from 'react-router';







export class Insertmarkdown extends React.Component<any, any>{


    //constructor() {
    //    super();
    //    this.state = { contentInput: "Email content", markdownText: "" };
    //}

    public render() {
        return <div id="InsertContent">
            <div className="">
                
                    <div className="InsertOption">
                        <label>Line Break</label> <button className="btn btn-info" onClick={this.InsertLineBreak}>Insert</button>
                    </div>
                    <div className="InsertOption ">
                        <label>HyperLink</label> <button className="btn btn-info" onClick={this.InsertHyperlink}>Insert</button>
                    </div>
                

                
                    <div className="InsertOption ">
                        <label>Bullet Point</label> <button className="btn btn-info">Insert</button>
                    </div>

                    <div className="InsertOption ">
                    <label>Table</label> <button className="btn btn-info" onClick={this.InsertTable}>Insert</button>
                    </div>

                

            </div>

            <p>These are some basic elements you can insert into your layout, but more options are availible by using markdown or HTML (such as text formatting). See the cheat sheet tab for deatils.</p>


        </div>

    }

    InsertLineBreak = () => {
        let newMarkdown: string = this.props.markdown;

        newMarkdown += '\n</br>'



        this.props.ConventMarkdownToHtml(newMarkdown)
    }


    InsertHyperlink = () => {
        let newMarkdown: string = this.props.markdown;

        newMarkdown += '\n[Google](https://www.google.com/)\n'


        this.props.ConventMarkdownToHtml(newMarkdown)
    }



    InsertTable = () => {
        let newMarkdown: string = this.props.markdown;

        newMarkdown += `\n

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>



        \n`


        this.props.ConventMarkdownToHtml(newMarkdown)
    }

}