import React, { useContext } from 'react';

import NotesContext from '../context/notes-context';

import Note from './Note';

const NoteList = ({ notes, removeNote }) => {
    // const { notes } = useContext(NotesContext);

    return (
        notes.map((note, index) => <Note key={index} title={note.title} body={note.body} index={index} removeNote={removeNote} />)
    )
}

export { NoteList as default };