import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Note, EditNote, CreateNote } from "./pages";
/* import dummyNotes from "./dummy_notes"; */
import "./App.css";

import { useState,useEffect } from "react";

import React from "react";

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))

  }, [notes])
  


  return (
    <main id="app">
      <BrowserRouter basename="/notes-app">
        <Routes>
          <Route path="/" element={<Note notes={notes}/>}></Route>
          <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
          <Route path="/edit-note/:id" element={<EditNote  notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
