export const postNote = note => {
  // return fetch(`${process.env.API_URL}/api/v1/notes`);
  return fetch('http://localhost:7890/api/v1/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
    .then(res => res.json());
};

export const fetchNotes = () => {
  return fetch('http://localhost:7890/api/v1/notes')
    .then(res => res.json())
    .then(notes => notes.map(note => {
      const date = new Date(note.createdAt);
      const dateString = date.toLocaleString();
      return {
        ...note,
        id: note._id,
        createdAt: dateString
      };
    }));
};

export const deleteNoteById = (id) => {
  return fetch(`http://localhost:7890/api/v1/notes/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json());
};
