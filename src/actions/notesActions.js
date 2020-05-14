import { fetchNotes, postNote, deleteNoteById } from '../services/notesApi';

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = note => dispatch => {
  return postNote(note)
    .then(note => {
      dispatch({
        type: ADD_NOTE,
        payload: note
      });
    });
};

export const SET_NOTES = 'SET_NOTES';
export const setNotes = () => dispatch => {
  return fetchNotes()
    .then(notes => {
      dispatch({
        type: SET_NOTES,
        payload: notes
      });
    });
};

export const DELETE_NOTE = 'DELETE_NOTE';
export const deleteNote = (id) => dispatch => {
  return deleteNoteById(id)
    .then(note => {
      dispatch({
        type: DELETE_NOTE,
        payload: note._id
      });
    });
};
