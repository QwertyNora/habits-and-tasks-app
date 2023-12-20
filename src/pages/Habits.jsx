import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage, setInLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Habits = () => {
  const [habits, setHabits] = useState(getFromLocalStorage("habits"));
  const [showEditStreak, setShowEditStreak] = useState(false);
  const [sortPriority, setSortPriority] = useState();
  const [sortStreak, setSortStreak] = useState();

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

  const getSortedHabits = () => {
    let sortedHabits = habits.slice();

    if (sortPriority === "High to Low") {
      sortedHabits.sort((a, b) => b.priority - a.priority);
    } else if (sortPriority === "Low to High") {
      sortedHabits.sort((a, b) => a.priority - b.priority);
    }

    if (sortStreak === "High to Low") {
      sortedHabits.sort((a, b) => b.streak - a.streak);
    } else if (sortStreak === "Low to High") {
      sortedHabits.sort((a, b) => a.streak - b.streak);
    }

    return sortedHabits;
  };

  const handlePriorityChange = (event) => {
    setSortPriority(event.target.value);
  };

  const handleStreakChange = (event) => {
    setSortStreak(event.target.value);
  };

  return (
    <>
      <Nav />
      <div>
        <h2>Habits:</h2>
        <label htmlFor="filterPriority">Sort by Priority:</label>
        <select
          id="filterPriority"
          name="filterPriority"
          onChange={handlePriorityChange}
        >
          <option disabled selected hidden>Select</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
        <label htmlFor="filterStreak">Sort by Streak:</label>
        <select
          id="filterStreak"
          name="filterStreak"
          onChange={handleStreakChange}
        >
          <option disabled selected hidden>Select</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
        {getSortedHabits().map((habit, index) => (
          <div key={index}>
            <h2>{habit.title}</h2>
            <ul>
              <li>
                Priority:{" "}
                {habit.priority === "3"
                  ? "Low"
                  : habit.priority === "2"
                  ? "Mid"
                  : "High"}
              </li>
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
