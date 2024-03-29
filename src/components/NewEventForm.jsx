import { useState } from "react";
import "./NewEventForm.css";
export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 1000),
    };
    addEvent(event);

    console.log(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handelSubmit}>
      <label>
        <span>Event Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
   
     
      <button>sumbit</button>
    </form>
  );
}
