import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Habits = ({habits}) => {
  return (
    <>
      <Nav />
      <h1>Habits</h1>
      {habits && habits.map((habit) => {
        return (
          <>
          <p>{habit.title}</p>
          <p>Streak: {habit.streak}</p>
          <p>Priority: {habit.priority}</p>
          </>
        )
      })}
      <Footer />
    </>
  );
};

export default Habits;
