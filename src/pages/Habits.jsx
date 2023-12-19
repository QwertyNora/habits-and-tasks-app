import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage } from "../HelperFunctions";

const Habits = () => {
  const habits = getFromLocalStorage("habits");

  return (
    <>
      <Nav />
      <div>
        {habits &&
          habits.map((habit, index) => (
            <div key={index}>
              <p>{habit.title}</p>
              <p>Streak: {habit.streak}</p>
              <p>Priority: {habit.priority}</p>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Habits;
