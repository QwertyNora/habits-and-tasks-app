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
          </>
        )
      })}
      <Footer />
    </>
  );
};

export default Habits;
