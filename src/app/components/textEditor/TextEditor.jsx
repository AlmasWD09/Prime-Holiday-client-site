"use client"

import React, { useState, useRef, useEffect, } from 'react';
import JoditEditor from 'jodit-react';
// import "jodit-react/examples/app.css"

const TextEditor = ({onchange}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <div>
            <JoditEditor
                 ref={editor}
                 value={content}
                 tabIndex={1}
                 onChange={(newContent) => {
                   setContent(newContent);
                   onchange(newContent); // Update the form value with the editor content
                }}
            />
        </div>
    )
}

export default TextEditor
