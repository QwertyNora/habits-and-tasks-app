// Tasks.js
import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewTask from "./NewTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Nav />

      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
      <NewTask addTask={addTask} />
      <Footer />
    </>
  );
};

export default Tasks;
