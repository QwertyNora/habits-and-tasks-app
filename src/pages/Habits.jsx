import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage, setInLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Habits = () => {
  const [habits, setHabits] = useState(getFromLocalStorage("habits"));
  const [showEditStreak, setShowEditStreak] = useState(false);
  const [sortPriority, setSortPriority] = useState();

  useEffect(() => {
    setHabits(getFromLocalStorage("habits"));
  }, []);

  const handleEditStreak = (index) => {
    setShowEditStreak(index);
  };

  const incrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak = Number(updatedHabits[index].streak) + 1;
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const decrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak = Math.max(0, updatedHabits[index].streak - 1);
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const resetStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak = 0;
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const getFilteredHabits = () => {
    if (sortPriority === "High to Low") {
      return habits.slice().sort((a, b) => a.priority - b.priority);
    } else if (sortPriority === "Low to High") {
      return habits.slice().sort((a, b) => b.priority - a.priority);
    }
    // Default: return origin. array
    return habits.slice();
  };

  const handlePriorityChange = (event) => {
    setSortPriority(event.target.value);
  };
  return (
    <>
      <Nav />
      <div>
        <h2>Habits:</h2>
        <label htmlFor="filterPriority">Filter by Priority:</label>
        <select
          id="filterPriority"
          name="filterPriority"
          onChange={handlePriorityChange}
        >
          <option>Select filter</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
        {getFilteredHabits().map((habit, index) => (
          <div key={index}>
            <h2>{habit.title}</h2>
            <ul>
              <li>Priority: {habit.priority === "3" ? "Low" : habit.priority === "2" ? "Mid" : "High"}</li>
              <li>
                Streak:
                <button onClick={() => decrementStreak(index)}>-</button>
                {habit.streak}
                <button onClick={() => incrementStreak(index)}>+</button>
                <button onClick={() => resetStreak(index)}>Reset</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Link to="/NewHabit">
        <button>Add New Habit</button>
      </Link>
      <Footer />
    </>
  );
};

export default Habits;
