import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Alla uppgifter
  const [filteredTasks, setFilteredTasks] = useState([]); // Uppgifter efter filtrering
  const [selectedTaskType, setSelectedTaskType] = useState("All"); // Den valda uppgiftstypen för filtrering
  const [editingTaskIndex, setEditingTaskIndex] = useState(null); // Index för att redigera en uppgift
  const [editedTask, setEditedTask] = useState({
    title: "",
    taskType: "",
    dueDate: "",
  }); // Den redigerade uppgiften
  //
  const [sortOrder, setSortOrder] = useState({ field: null, ascending: true }); // Sorteringsordning för uppgifterna

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);

  useEffect(() => {
    filterTasks(selectedTaskType);
  }, [tasks, selectedTaskType, sortOrder]);

  // useEffect för att uppdatera 'tasks' och 'filteredTasks' när det finns förändringar i 'tasks', 'selectedTaskType' eller 'sortOrder'
  //
  const handleTaskCompleteToggle = (index) => {
    // Skapar en kopia av den aktuella listan med uppgifter
    const updatedTasks = [...tasks];
    // Inverterar statusen för 'completed' för den specifika uppgiften
    updatedTasks[index].completed = !updatedTasks[index].completed;
    // Uppdaterar tillståndet 'tasks' med den nya listan av uppgifter
    setTasks(updatedTasks);
    // Sparar den uppdaterade listan av uppgifter till localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // Filtrerar och uppdaterar listan av uppgifter baserat på den valda uppgiftstypen
    filterTasks(selectedTaskType);
  };

  const filterTasks = (taskType) => {
    let filtered =
      taskType === "All"
        ? tasks
        : tasks.filter((task) => task.taskType === taskType);

    // A-B B-A sorteringsordningen
    if (sortOrder.field) {
      const compareFn = (a, b) => {
        if (sortOrder.field === "title") {
          return sortOrder.ascending
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        } else if (sortOrder.field === "dueDate") {
          return sortOrder.ascending
            ? new Date(a.dueDate) - new Date(b.dueDate)
            : new Date(b.dueDate) - new Date(a.dueDate);
        }
        return 0;
      };
      filtered = filtered.sort(compareFn);
    }

    setFilteredTasks(filtered);
  };

  const handleTaskTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedTaskType(selectedType);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index);
    setEditedTask({
      title: tasks[index].title,
      taskType: tasks[index].taskType,
      dueDate: tasks[index].dueDate,
    });
  };

  const handleEditChange = (e, field) => {
    setEditedTask((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditingTaskIndex(null);
    setEditedTask({ title: "", taskType: "", dueDate: "" });
  };

  const handleCancelEdit = () => {
    setEditingTaskIndex(null);
  };

  const handleSort = (field) => {
    setSortOrder((prevSortOrder) => ({
      field,
      ascending:
        prevSortOrder.field === field ? !prevSortOrder.ascending : true,
    }));
  };

  return (
    <>
      <Nav />
      <div className={styles.imgWrapper}>
        <div className={styles.taskWrapper}>
          <div className={styles.tasksText}>
            <h3>TRACK YOUR HABITS</h3>
            <h1 className={styles.taskH1}>Tasks</h1>
            <p>Here is an overview of your current tasks.</p>
          </div>

          <label>
            <div className={styles.selectContainer}>
              Filter by Task Type:
              <select
                className={styles.filterTaskType}
                value={selectedTaskType}
                onChange={handleTaskTypeChange}
              >
                <option value="All">All</option>
                <option value="work related">Work related</option>
                <option value="For fun">For fun</option>
                <option value="Chores">Chores</option>
              </select>
            </div>
          </label>
          <div className={styles.tasksContainer}>
            <div className={styles.sortButtons}>
              <button onClick={() => handleSort("title")}>
                Sort by Title{" "}
                {sortOrder.field === "title" &&
                  (sortOrder.ascending ? "A-B" : "B-A")}
              </button>
              <button onClick={() => handleSort("dueDate")}>
                Sort by Due Date-
                {sortOrder.field === "dueDate" &&
                  (sortOrder.ascending ? "Closest" : "Furthest")}
              </button>
            </div>
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                className={
                  styles.taskItem +
                  (task.completed ? ` ${styles.completedTask}` : "")
                }
              >
                {editingTaskIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editedTask.title}
                      onChange={(e) => handleEditChange(e, "title")}
                    />
                    <select
                      value={editedTask.taskType}
                      onChange={(e) => handleEditChange(e, "taskType")}
                    >
                      <option value="work related">Work related</option>
                      <option value="for fun">Fun</option>
                      <option value="Chores">Chores</option>
                    </select>
                    <input
                      type="date"
                      value={editedTask.dueDate}
                      onChange={(e) => handleEditChange(e, "dueDate")}
                    />
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <>
                    <h3 className={task.completed ? styles.completedTask : ""}>
                      {task.title}
                    </h3>
                    <div className={styles.taskDetails}>
                      <p>
                        <strong>Task Type:</strong> {task.taskType}
                      </p>
                      <p>
                        <strong>Due Date:</strong> {task.dueDate}
                      </p>
                    </div>
                    <div className={styles.taskActions}>
                      <input
                        type="checkbox"
                        value={task.completed}
                        onChange={() => handleTaskCompleteToggle(index)}
                      />{" "}
                      Complete task
                      <br />
                      <button
                        className={styles.buttonLowKey}
                        onClick={() => handleDeleteTask(index)}
                      >
                        Delete
                      </button>
                      <button
                        className={styles.buttonLowKey}
                        onClick={() => handleEditTask(index)}
                      >
                        Edit Task
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className={styles.addDiv}>
            <Link to={{ pathname: "/NewTask", state: { tasks } }}>
              <button className={styles.addBtn}>Create new task</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tasks;
