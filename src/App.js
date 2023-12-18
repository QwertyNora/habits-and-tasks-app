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
  const [tasks, setTasks] = useState([]);

  // Funktion för att lägga till en ny uppgift
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/newhabit" element={<NewHabit />} />
        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} addTask={addTask} />}
        />
        <Route path="/newtask" element={<NewTask addTask={addTask} />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
