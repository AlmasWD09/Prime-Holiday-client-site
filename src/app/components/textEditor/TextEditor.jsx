"use client"

import React, { useState, useRef, useEffect, } from 'react';
import JoditEditor from 'jodit-react';
// import "jodit-react/examples/app.css"

const TextEditor = ({onchange}) => {
    console.log(typeof onchange, 'line------> 8')
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
                    const plainText = newContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
                    onchange(plainText); // Pass plain text to the parent
                }}
            />
        </div>
    )
}

export default TextEditor
