import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedTaskType, setSelectedTaskType] = useState("All");
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);

  const handleTaskCompleteToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    filterTasks(selectedTaskType);
  };

  const filterTasks = (taskType) => {
    const filtered =
      taskType === "All"
        ? tasks
        : tasks.filter((task) => task.taskType === taskType);
    setFilteredTasks(filtered);
  };

  const handleTaskTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedTaskType(selectedType);
    filterTasks(selectedType);
  };

  return (
    <>
      <Nav />
      <h1>Tasks</h1>

      <label>
        Filter by Task Type:
        <select value={selectedTaskType} onChange={handleTaskTypeChange}>
          <option value="All">All</option>
          <option value="Jobbrelaterat">Jobbrelaterat</option>
          <option value="fun">Rolig aktivitet</option>
          <option value="Sysslor">Sysslor</option>
        </select>
      </label>

      {filteredTasks.map((task, index) => (
        <div
          key={index}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          <h3>
            {task.title}
            <br />
            <input
              type="checkbox"
              value={task.completed}
              onChange={() => handleTaskCompleteToggle(index)}
            />
            Complete Task
          </h3>
        </div>
      ))}

      <Link to={{ pathname: "/NewTask", state: { tasks } }}>
        <button>Create new task</button>
      </Link>
      <Footer />
    </>
  );
};

export default Tasks;
