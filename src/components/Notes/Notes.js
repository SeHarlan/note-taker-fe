import React, { useEffect } from 'react';
import withList from '../../HOCs/WithList';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../selectors/notesSelectors';
import { setNotes } from '../../actions/notesActions';
import { deleteNote } from '../../actions/notesActions';

const Note = ({ title, body, createdAt, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (currentId) => {
    dispatch(deleteNote(currentId));
  };
  return (
    <section>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => handleDelete(id)}>delete note</button>
      <em>Created at {createdAt}</em>
    </section>
  );
};
Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(getNotes);
  const NotesList = withList(Note);

  useEffect(() => dispatch(setNotes()), []);

  return (
    <NotesList list={notes}/>
  );
};

export default Notes;
