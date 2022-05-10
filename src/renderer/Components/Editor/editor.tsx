import React from 'react';
import CodeMirror from 'codemirror';
import setUpEditor from '../../config/editor';
import './editor.css';

interface Props {
  text: string;
}

class Editor extends React.Component<Props> {
  editor!: HTMLTextAreaElement;

  editorInstence!: CodeMirror.EditorFromTextArea;

  componentDidMount() {
    this.editorInstence = setUpEditor(this.editor);
  }

  componentDidUpdate() {
    const { text } = this.props;
    console.log(text);
    this.editorInstence.setValue(text);
  }

  render() {
    console.log('editior rerendered!');
    return (
      <div className="text-start min-h-full">
        <textarea
          id="my-editor"
          ref={(e) => {
            this.editor = e as HTMLTextAreaElement;
            return this.editor;
          }}
        />
      </div>
    );
  }
}

export default Editor;
