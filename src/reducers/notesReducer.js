import { ADD_NOTE, SET_NOTES, DELETE_NOTE } from '../actions/notesActions';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case ADD_NOTE:
      return [...state, payload];
    case SET_NOTES: 
      return payload;
    case DELETE_NOTE:
      return state.filter(note => note._id !== payload);
    default: 
      return state;
  }
}
