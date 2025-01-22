// "use client"

// import React, { useState, useRef, useEffect, } from 'react';
// // import "jodit-react/examples/app.css"
// import dynamic from 'next/dynamic';
// const JoditEditor = dynamic(() => import('jodit-react'), {
//     ssr: false,  // Disable server-side rendering for this component
//   });

// const TextEditor = ({onchange}) => {

//     const editor = useRef(null);
//     const [content, setContent] = useState('');

//     console.log(content)

//     return (
//         <div>
//             <JoditEditor
//                  ref={editor}
//                  value={content}
//                  tabIndex={1}
//                  onChange={(newContent) => {
//                     setContent(newContent);
//                     const plainText = newContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
//                     onchange(plainText); // Pass plain text to the parent
//                 }}
//             />
//         </div>
//     )
// }

// export default TextEditor

"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Disable server-side rendering
});

const TextEditor = ({ onChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent) => {
    setContent(newContent); // Update editor content
    const plainText = newContent.replace(/<[^>]+>/g, ""); // Strip HTML tags
    onChange && onChange(plainText); // Call parent callback if provided
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        onChange={handleEditorChange} // Trigger on change
      />
    </div>
  );
};

export default TextEditor;

