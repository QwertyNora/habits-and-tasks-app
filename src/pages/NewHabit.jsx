import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Habits from "./Habits";

const NewHabit = () => {
  const [title, setTitle] = useState(null);
  const [streak, setStreak] = useState(null);
  const [priority, setPriority] = useState(null);
  const [habits, setHabits] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !streak || !priority) {
      alert("Please fill in all required fields.");
      return;
    }

    setHabits([...habits, { title, streak, priority }]);

    setTitle(null);
    setStreak(null);
    setPriority(null);
    
  };
  return (
    <>
      <Nav />
      <h1>New Habit</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="streak">Streak:</label>
        <input
          type="number"
          name="streak"
          id="streak"
          placeholder="0"
          value={streak}
          onChange={(e) => setStreak(e.target.value)}
        />
        <br />
        <label htmlFor="priority">Priority</label>
        <select
          value={priority}
          id="priority"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
        <br />
        <button type="submit">Create Habit</button>
      </form>

      <Habits habits={habits}/>
      <Footer />
    </>
  );
};

export default NewHabit;
