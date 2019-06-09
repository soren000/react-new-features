import React from 'react';

const NoteForm = ( { addNote, title, setTitle, body, setBody }) => {
    return (
        <form onSubmit={addNote}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button>
                Add Note
            </button>
        </form>
    )
}

export { NoteForm as default };