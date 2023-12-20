import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { setInLocalStorage, getFromLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const NewHabit = () => {
  const [title, setTitle] = useState("");
  const [streak, setStreak] = useState(undefined);
  const [priority, setPriority] = useState("");
  const [habits, setHabits] = useState([]);
  const [showRecentHabit, setShowRecentHabit] = useState(false);

  useEffect(() => {
    const storedHabits = getFromLocalStorage("habits");
    if (storedHabits) {
      setHabits(storedHabits);
    }
  }, []);

  const resetForm = () => {
    setTitle("");
    setStreak("");
    setPriority("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !streak || !priority) {
      alert("Please fill in all fields.");
      return;
    }

    const newHabit = { title, streak: Number(streak), priority };

    const updatedHabits = [...habits, newHabit];

    setInLocalStorage("habits", updatedHabits);

    // Update state to trigger re-render
    setHabits(updatedHabits);
    setShowRecentHabit(true);

    resetForm();
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
          <option disabled value="">
            Select priority
          </option>
          <option value="3">Low</option>
          <option value="2">Mid</option>
          <option value="1">High</option>
        </select>
        <br />
        <button type="submit">Create Habit</button>
      </form>

      {showRecentHabit && (
        <div>
          <p>{habits[habits.length - 1].title}</p>
          <p>Streak: {habits[habits.length - 1].streak}</p>
          <p>
            Priority:{" "}
            {habits[habits.length - 1].priority === "3"
              ? "Low"
              : habits[habits.length - 1].priority === "2"
              ? "Mid"
              : "High"}
          </p>
        </div>
      )}
      <Link to="/Habits">
        <button>Show All Habits</button>
      </Link>
      <Footer />
    </>
  );
};

export default NewHabit;
