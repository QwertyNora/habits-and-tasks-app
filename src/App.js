// App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import NewHabit from "./pages/NewHabit";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import Friends from "./pages/Friends";
import { useState } from "react";

function App() {
  // Byter statet t app så data sparas(Victor)
  // const [tasks, setTasks] = useState([]);

  // Adding new task
  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  // tasks={tasks} addTask={addTask}
  // addTask={addTask}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/newhabit" element={<NewHabit />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
