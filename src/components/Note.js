import React from 'react';

import useMousePosition from '../hooks/useMousePosition';

const Note = ({ body, title, removeNote }) => {
    const position = useMousePosition();

    return (
        <div>
            <p>
                {title}
            </p>
            <p>
                {body}
            </p>
            <p>{position.x}, {position.y}</p>
            <button onClick={() => removeNote(title)}>
                X
            </button>
        </div>
    )
}

export default Note;