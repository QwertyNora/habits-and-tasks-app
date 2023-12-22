import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NewTask = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  const [latestTask, setLatestTask] = useState(null);

  const [title, setTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!title || !taskType || !dueDate) {
      alert("Input field is empty!");
      return;
    }

    const newTask = { title, taskType, dueDate };
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    setLatestTask(newTask);

    // Uppdatera state och localStorage
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTitle("");
    setTaskType("");
    setDueDate("");
  };

  const handleSuggestRandomActivity = () => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.activity);
      })
      .catch((error) => {
        console.error("Error fetching suggested activity:", error);
      });
  };

  return (
    <>
      <h1>New Task</h1>
      <h2>Create New Task</h2>
      <form onSubmit={handleCreateTask}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Task Type:
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Jobbrelaterat">Jobbrelaterat</option>
            <option value="fun">fun</option>
            <option value="Sysslor">Sysslor</option>
          </select>
        </label>
        <br />
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={handleSuggestRandomActivity}>
          Get Random Activity
        </button>

        <button type="submit">Create Task</button>
        <Link to={{ pathname: "/tasks" }}>
          <button>See all tasks</button>
        </Link>
      </form>
      {latestTask && (
        <div>
          <h2>New Added Task: </h2>
          <p>Title: {latestTask.title}</p>
          <p>Task Type: {latestTask.taskType}</p>
          <p>Due Date: {latestTask.dueDate}</p>
        </div>
      )}
    </>
  );
};

export default NewTask;
