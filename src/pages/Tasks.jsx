// Tasks.jsx
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewTask from "./NewTask";

const Tasks = ({ tasks, addTask }) => {
  return (
    <>
      <Nav />
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <h3 key={task.title}>{task.title}</h3>
      ))}

      <NewTask addTask={addTask} />
      <Footer />
    </>
  );
};

export default Tasks;
