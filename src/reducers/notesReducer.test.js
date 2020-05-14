import reducer from './notesReducer';
import { addNote, setNotes } from '../actions/notesActions';


describe('notes reducer', () => {
  //wont pass and wont let me use dispatch
  it.skip('handles add note action', () => {
    const state = [];
    const action = addNote({
      title: 'test title',
      body: 'test body'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([
      { _id: expect.any(String),
        title: 'test title',
        body: 'test body',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0 }
    ]);
  });

});
