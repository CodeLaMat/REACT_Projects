import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setNotes(res.data));
  }, []);

  return (
    <div className="noteList">
      <h1 className="noteList_heading">NoteList</h1>

      <ul>
        {notes?.map((note) => (
          <li key={note.id}>
            {note.firstname} {note.lastname}, {note.phone}, {note.role},
            {note.message},
          </li>
        ))}
      </ul>
    </div>
  );
}
