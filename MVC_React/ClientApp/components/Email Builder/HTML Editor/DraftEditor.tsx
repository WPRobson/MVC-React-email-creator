import * as React from 'react';
import { RouteComponentProps } from 'react-router';


import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface EditorStateProps {

    editorState: EditorState;
    placeholder?: string;
    spellCheck?: boolean;



}


declare var showdown: any; // magic

export class DraftEditor extends React.Component<any, any>
{

    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(), placeholder: 'Place content here', spellcheck: true

        };


    }

    public render() {

        return <div>
            <div id="EditorControls" style={{width:'100%'}}>
                <button onClick={this._onBoldClick.bind(this)}><i className="fas fa-bold"></i> </button>

                <button onClick={this._onUnderlineClick.bind(this)}><i className="fas fa-underline"></i></button>

                <button onClick={this.onItalicClick.bind(this)}><i className="fas fa-italic"></i></button>

                <button onClick={this._onInsertTableClick.bind(this)}><i className="fas fa-table"></i></button>

                <button onClick={this._onInsertPagebreak.bind(this)}> Break line</button>

                <button onClick={this._onInsertHeading.bind(this)}><i className="fas fa-heading"></i></button>

                <button onClick={this._onInsertHyperlink.bind(this)}><i className="fas fa-link"></i></button>

                <button onClick={this._onInsertUnOrderdList.bind(this)}><i className="fas fa-list-ul"></i></button>

                <button onClick={this._onInsertOrderdList.bind(this)}><i className="fas fa-list-ol"></i></button>


            </div>
            <Editor editorState={this.state.editorState} onChange={this.onChange} placeholder={this.state.placeholder} spellCheck={this.state.spellcheck} />

        </div>


    }

    onChange = (editorState: EditorState) => {
        this.setState({ editorState });
        this.ConventMarkdownToHtml(editorState.getCurrentContent().getPlainText());

    }


    _onBoldClick() {
        this.appendOrAddnewMarkdown('__', '__')
    }

    _onUnderlineClick() {
        this.appendOrAddnewMarkdown('<u>', '</u>')
    }

    onItalicClick() {
        this.appendOrAddnewMarkdown('*', '*')
    }

    _onInsertTableClick() {
        const editorState = this.state.editorState;
        const selection = editorState.getSelection();
        const contentState = editorState.getCurrentContent();
        const ncs = Modifier.insertText(contentState, selection,
            ` | Heading     | Heading    |
| ----------- | ----------- |
| item  1     | item 3      |
| item 2      | item 4      |`
        );
        const es = EditorState.push(editorState, ncs, 'insert-fragment');
        this.setState({ editorState: es })
    }

    _onInsertPagebreak() {
        this.appendOrAddnewMarkdown('</br>', '')
    }

    _onInsertHeading() {
        this.appendOrAddnewMarkdown('#', '')
    }

    _onInsertHyperlink() {
        this.appendOrAddnewMarkdown('[Google](https://google.co.uk)', '')
    }

    _onInsertOrderdList() {
        this.appendOrAddnewMarkdown(`1. item 1 (keep the space between number and the item)
2. item 2
3. item 3`, '')
    }

    _onInsertUnOrderdList() {
        this.appendOrAddnewMarkdown(`- First item (keep space between dash and the item)
- Second item
- Third item`, '')
    }




    ConventMarkdownToHtml = (text: string) => {

        var converter = new showdown.Converter({ tables: true, strikethrough: true }),

            html = converter.makeHtml(text);

        this.setState({
            markdownText: text
        })

        this.props.setMarkdown(text)

        this.props.setHtml(html);

    }

    UpdateMarkdown = (value: string) => {

        this.setState({
            markdownText: value

        })

    }


    appendOrAddnewMarkdown = (startTag: string, endTag: string) => {
        const editorState = this.state.editorState;
        const selection = editorState.getSelection();
        const contentState = editorState.getCurrentContent();
        let selectedText: any = this._getTextSelection(contentState, selection, '');

        let ncs = null;
        if (selectedText == "" && endTag != "") {
            ncs = Modifier.replaceText(contentState, selection, startTag + 'Text here' + endTag);
        }
        else {
            ncs = Modifier.replaceText(contentState, selection, startTag + selectedText + endTag);
        }

        const es = EditorState.push(editorState, ncs, 'insert-fragment');
        this.setState({ editorState: es })

    }


    _getTextSelection(contentState: any, selection: any, blockDelimiter: any) {
        blockDelimiter = blockDelimiter || '\n';
        var startKey = selection.getStartKey();
        var endKey = selection.getEndKey();
        var blocks = contentState.getBlockMap();

        var lastWasEnd = false;
        var selectedBlock = blocks
            .skipUntil(function (block: any) {
                return block.getKey() === startKey;
            })
            .takeUntil(function (block: any) {
                var result = lastWasEnd;

                if (block.getKey() === endKey) {
                    lastWasEnd = true;
                }

                return result;
            });

        return selectedBlock
            .map(function (block: any) {
                var key = block.getKey();
                var text = block.getText();

                var start = 0;
                var end = text.length;

                if (key === startKey) {
                    start = selection.getStartOffset();
                }
                if (key === endKey) {
                    end = selection.getEndOffset();
                }

                text = text.slice(start, end);
                return text;
            })
            .join(blockDelimiter);
    }


}