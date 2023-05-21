import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      <div className="toolbar">
        {/* Add your toolbar buttons here */}
      </div>
      <div className="editor-container">
      <Editor
  editorState={editorState}
  onEditorStateChange={handleEditorChange}
  wrapperClassName="editor-wrapper"
  editorClassName="editor-content"
/>

      </div>
    </div>
  );
};

export default TextEditor;
