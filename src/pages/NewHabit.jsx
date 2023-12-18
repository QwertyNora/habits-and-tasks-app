import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const NewHabit = () => {
  const [title, setTitle] = useState(null);
  const [streak, setStreak] = useState(null);
  const [priority, setPriority] = useState(null);
  const [habit, setHabit] = useState({});

  return (
    <>
      <Nav />
      <h1>New Habit</h1>
      <form>
        <label for="title"> Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label for="streak">Streak:</label>
        <input
          type="number"
          name="streak"
          id="streak"
          placeholder="0"
          value={streak}
          onChange={(e) => setStreak(e.target.value)}
        />

        <label for="priority">Priority</label>
        <select id="priority" name="priority">
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
      </form>
      <Footer />
    </>
  );
};

export default NewHabit;
