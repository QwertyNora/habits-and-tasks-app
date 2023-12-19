import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewTask from "../pages/NewTask";
import { Link } from "react-router-dom";
import { setTasks } from "./NewTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <>
      <Nav />
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <h3 key={task.title}>{task.title}</h3>
      ))}

      <Link to="/NewTask" setTasks={setTasks}>
        <button>Create a new task</button>
      </Link>

      <Footer />
    </>
  );
};

export default Tasks;
