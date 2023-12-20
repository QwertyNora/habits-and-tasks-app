import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []); // Run only once on component mount

  return (
    <>
      <Nav />
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <h3 key={task.title}>
          {task.title}
          <br />
          <input type="checkbox" value={true} /> Complete Task
        </h3>
      ))}
      <Link to={{ pathname: "/NewTask", state: { tasks } }}>
        <button>Create new task</button>
      </Link>
      <Footer />
    </>
  );
};

export default Tasks;
