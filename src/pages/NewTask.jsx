import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";
// NewTask.jsx

const NewTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!title || !taskType || !dueDate) {
      alert("Input fältet är tomt!");
      return;
    }

    const newTask = { title, taskType, dueDate };
    addTask(newTask);

    setTitle("");
    setTaskType("");
    setDueDate("");
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
            <option value="fun">Rolig aktivitet</option>
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
        <button type="submit">Create Task</button>
      </form>
    </>
  );
};

export default NewTask;
