import React, { useState, useEffect, useReducer } from 'react';

import { notesReducer } from '../reducers/notes';

import NoteList from './NoteList';
import NoteForm from './NoteForm';

import NotesContext from '../context/notes-context';

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const notesArray = JSON.parse(localStorage.getItem('notesArray'));
        dispatch({ type: 'POPULATE_NOTES', notes: notesArray})
    }, [])

    useEffect(() => {
        localStorage.setItem('notesArray', JSON.stringify(notes));
    }, [notes])

    const addNote = (e) => {
        e.preventDefault();

        dispatch({ 
            type: 'ADD_NOTE', 
            note: {
                title,
                body
            }
        })

        setTitle('');
        setBody('');
    }

    const removeNote = (title) => {
       dispatch({type: 'REMOVE_NOTE', title })
    }
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <p>Add note</p>
            <NoteForm addNote={addNote} title={title} setTitle={setTitle} body={body} setBody={setBody} />
            <NoteList notes={notes} removeNote={removeNote} />
        </NotesContext.Provider>
    )
}

export default NoteApp;