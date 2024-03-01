import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css'

import { convertToRaw } from 'draft-js';

const EditorComponent = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    const saveContent = () => {
        const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        console.log(content);
    };

    


    return (
        <div className="container">
            <div className="row">
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Text Editor</Link>
                            </li>
                            <li>
                                <Link to="/pdf">PDF Preview</Link>
                            </li>
                            <li>
                                <Link to="/fieldlinker">Field Linker</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-12">
                    <div className="edit-content">
                        <h2>React Draft Wysiwyg</h2>
                    </div>
                    <div className='form'>
                        <label>Text Editor</label>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                        />
                        <button onClick={saveContent}>Save Content</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorComponent;