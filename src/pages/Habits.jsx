import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Habits = () => {
  const habits = getFromLocalStorage("habits");
  const [showEditStreak, setShowEditStreak] = useState(false);

  const handleEditStreak = (index) => {
    setShowEditStreak(!showEditStreak);
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
                  Streak: {habit.streak}{" "}
                  <button onClick={() => handleEditStreak()}>
                    {showEditStreak ? "Hide" : "Edit streak"}
                  </button>
                </li>
              </ul>
              {showEditStreak && <div>This will get shown</div>}
            </div>
          ))}
      </div>
      <Link to="/NewHabit"><button>Add New Habit</button></Link>
      <Footer />
    </>
  );
};

export default Habits;


