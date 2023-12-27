import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { setInLocalStorage, getFromLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";
import Styles from "../styles/NewHabits.module.css";

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

  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

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

    const uniqueId = generateUniqueId();

    const newHabit = { id: uniqueId, title, streak: Number(streak), priority };

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
      <div className={Styles.habitsWrapper}>
        <div className={Styles.habitsText}>
          <h3>CREATE A NEW HABIT</h3>
          <h1 className={Styles.habitH1}>New Habit</h1>
          <p>Add your new habits here!</p>
          <p>
            Create a new habit and specify it's priority! Already been
            exercising this habit for a while? No worries, you can add this
            particular habit's starting streak. And if you fall behind andmiss
            aday, or simply got thestreak wrong from the beginning, you can edit
            your streak later on.
          </p>
        </div>
        <div className={Styles.formContainer}>
          <form className={Styles.newHabit} onSubmit={handleFormSubmit}>
            <label htmlFor="title"> Title:</label>
            <input
              className={Styles.inputTitle}
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
              <option value="Low">Low</option>
              <option value="Mid">Mid</option>
              <option value="High">High</option>
            </select>
            <br />
            <div className={Styles.createHabitBtn}>
              <button type="submit">Create Habit</button>
            </div>
            
          </form>
        </div>

        {showRecentHabit && (
          <div>
            <p>{habits[habits.length - 1].title}</p>
            <p>Streak: {habits[habits.length - 1].streak}</p>
            <p>
              Priority:{" "}
              {habits[habits.length - 1].priority === "Low"
                ? "Low"
                : habits[habits.length - 1].priority === "Mid"
                ? "Mid"
                : "High"}
            </p>
          </div>
        )}
      </div>
      <div className={Styles.addDiv}>
        <Link to="/Habits">
          <button className={Styles.addBtn}>Show All Habits</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NewHabit;

// Add a stable identifier (like id) to each habit:
// Make sure each habit has a unique identifier that doesn't change when sorting.
// Update your actions to use this identifier instead of the index:
// Modify the incrementStreak, decrementStreak, and resetStreak functions to accept the habit's identifier (e.g., id) instead of the index.
// Modify your buttons to pass the correct identifier:
// Update the buttons in the getSortedHabits().map section to pass the correct identifier to the corresponding actions.
