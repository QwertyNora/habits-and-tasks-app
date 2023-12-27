import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Styles from "../styles/NewTasks.module.css";
import Footer from "../components/Footer";
import bgimage from "../pics/undraw_accept_tasks_re_09mv.svg";
import undraw from "../pics/undraw_next_tasks_re_5eyy.svg";

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
      <Nav />
      <div className={Styles.tasksWrapper}>
        <div className={Styles.tasksText}>
          <h3>Add new Task</h3>

          <h1 className={Styles.newTaskH1}>New task</h1>
          <p>On this page you can add a new Task!</p>
          <div className={Styles.bgImage}>
            <img className={Styles.svgImage} src={bgimage} alt="" />
          </div>
        </div>
        <div className={Styles.testTwo}>
          <form onSubmit={handleCreateTask}>
            <div className={Styles.labelContainer}>
              <label className={Styles.labelNewTask}>
                Title:
                <input
                  className={Styles.inputTitle}
                  type="text"
                  placeholder="Add Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <br />
              <label className={Styles.labelNewTask}>
                Task Type:
                <select
                  value={taskType}
                  onChange={(e) => setTaskType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="work related">Work related</option>
                  <option value="for fun">for fun</option>
                  <option value="Chores">Chores</option>
                </select>
              </label>
              <br />

              <label className={Styles.input}>
                Due Date:
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className={Styles.btnContainer}>
              <button type="button" onClick={handleSuggestRandomActivity}>
                Get Random Activity
              </button>

              <button type="submit">Create Task</button>
              <Link to={{ pathname: "/tasks" }}>
                <button>See all tasks</button>
              </Link>
            </div>
          </form>
          <div className={Styles.newTaskContainer}>
            {latestTask && (
              <div className={Styles.task}>
                <h2>New Added Task: </h2>
                <br />
                <p>Title: {latestTask.title}</p>
                <br />
                <p>Task Type: {latestTask.taskType}</p>
                <br />
                <p>Due Date: {latestTask.dueDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewTask;
