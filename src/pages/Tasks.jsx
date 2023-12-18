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
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>{task.title}</li>
        ))}
      </ul>
      <NewTask addTask={addTask} />
      <Footer />
    </>
  );
};

export default Tasks;
