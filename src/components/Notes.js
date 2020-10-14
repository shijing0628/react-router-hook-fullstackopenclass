import React from 'react'
import { Link } from 'react-router-dom'


function Notes({ notes }) {
 return (
  <>
   <h1>Notes</h1>
   <ul>
    {notes.map(note =>
     <li key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.content}</Link>
     </li>)}
   </ul>
  </>
 )
}

export default Notes
