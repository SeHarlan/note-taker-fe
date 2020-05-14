import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../actions/notesActions';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNote({ title, body }));
    setTitle('');
    setBody('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} placeholder="Note Title"/>
      <textarea value={body} onChange={({ target }) => setBody(target.value)} placeholder="Note Body"/>
      <button>Save Note</button>
    </form>
  );
};

export default Form;
