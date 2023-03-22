import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateDate } from "../components";


import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    //retor home
    navigate("/");
  };

  const handleDelete = () =>{
    const newNotes = notes.filter(item => item.id != id)//todos menos este id

    setNotes(newNotes)
    navigate("/")
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowRoundBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete} >
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};

export default EditNote;
