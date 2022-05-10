import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/continuelist';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/trailingspace';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/wrap/hardwrap';

function setUpEditor(reference: HTMLTextAreaElement) {
  return Codemirror.fromTextArea(reference, {
    theme: 'material',
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: true,
    fixedGutter: true,
    coverGutterNextToScrollbar: true,
    showCursorWhenSelecting: true,
    electricChars: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    lineWrapping: true,
    styleActiveLine: true,
    dragDrop: true,
  });
}

export default setUpEditor;
