import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage, setInLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Habits = () => {
  const [habits, setHabits] = useState(getFromLocalStorage("habits"));
  const [showEditStreak, setShowEditStreak] = useState(false);

  useEffect(() => {
    setHabits(getFromLocalStorage("habits"));
  }, []);

  const handleEditStreak = (index) => {
    setShowEditStreak(index);
  };

  const decrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak = Math.max(0, updatedHabits[index].streak - 1);
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const incrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak += 1;
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const resetStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak = 0;
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  return (
    <>
      <Nav />
      <div>
        {habits &&
          habits.map((habit, index) => (
            <div key={index}>
              <h2>{habit.title}</h2>
              <ul>
                <li>Priority: {habit.priority}</li>
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
