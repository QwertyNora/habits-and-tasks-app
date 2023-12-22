import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage, setInLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Habits = () => {
  const [habits, setHabits] = useState(getFromLocalStorage("habits"));
  const [sortPriority, setSortPriority] = useState();
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortStreak, setSortStreak] = useState();

  useEffect(() => {
    setHabits(getFromLocalStorage("habits"));
  }, []);

  const incrementStreak = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
    );
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const decrementStreak = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id
        ? { ...habit, streak: Math.max(0, habit.streak - 1) }
        : habit
    );
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const resetStreak = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, streak: 0 } : habit
    );
    setInLocalStorage("habits", updatedHabits);
    setHabits(updatedHabits);
  };

  const handleFilterPriority = (e) => {
    setFilterPriority(e.target.value);
  };

  const handleSortPriority = (e) => {
    setSortPriority(e.target.value);
  };

  const handleSortStreak = (e) => {
    setSortStreak(e.target.value);
  };

  const filteredHabits = habits.filter((habit) => {
    if (filterPriority === "All") {
      return true;
    } else {
      return habit.priority === filterPriority;
    }
  });

  const getSortedHabits = () => {
    let sortedHabits = filteredHabits.slice();

    if (sortPriority === "HighLow" && filterPriority === "All") {
      sortedHabits.sort((a, b) => {
        let prioA = a.priority === "High" ? 1 : a.priority === "Mid" ? 2 : 3;
        let prioB = b.priority === "High" ? 1 : b.priority === "Mid" ? 2 : 3;
        return prioA - prioB;
      });
    } else if (sortPriority === "LowHigh" && filterPriority === "All") {
      sortedHabits.sort((a, b) => {
        let prioA = a.priority === "High" ? 1 : a.priority === "Mid" ? 2 : 3;
        let prioB = b.priority === "High" ? 1 : b.priority === "Mid" ? 2 : 3;
        return prioB - prioA;
      });
    }
    console.log(sortedHabits);
    if (sortStreak === "HighLow") {
      sortedHabits.sort((a, b) => b.streak - a.streak);
    } else if (sortStreak === "LowHigh") {
      sortedHabits.sort((a, b) => a.streak - b.streak);
    }

    return sortedHabits;
  };

  return (
    <>
      <Nav />
      <div>
        <h2>Habits:</h2>
        <label htmlFor="filterPriority">Filter by Priority:</label>
        <select
          id="filterPriority"
          name="filterPriority"
          value={filterPriority}
          onChange={handleFilterPriority}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Mid">Mid</option>
          <option value="Low">Low</option>
        </select>
        <br />
        <label htmlFor="sortPriority">Sort by Priority:</label>
        <select
          id="sortPriority"
          name="sortPriority"
          onChange={handleSortPriority}
        >
          <option value="">Select</option>
          <option value="HighLow">High to Low</option>
          <option value="LowHigh">Low to High</option>
        </select>
        <br />
        <label htmlFor="sortStreak">Sort by Streak:</label>
        <select id="sortStreak" name="sortStreak" onChange={handleSortStreak}>
          <option value="">Select</option>
          <option value="HighLow">High to Low</option>
          <option value="LowHigh">Low to High</option>
        </select>
        {getSortedHabits().map((habit, index) => (
          <div key={index}>
            <h2>{habit.title}</h2>
            <ul>
              <li>
                Priority:
                {habit.priority}
              </li>
              <li>
                Streak:
                <button onClick={() => decrementStreak(habit.id)}>-</button>
                {habit.streak}
                <button onClick={() => incrementStreak(habit.id)}>+</button>
                <button onClick={() => resetStreak(habit.id)}>Reset</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Link to="/NewHabit">
        <button>Add New Habit</button>
      </Link>
      <Footer />
    </>
  );
};

export default Habits;

// const incrementStreak = (id) => {
//   const updatedHabits = [...habits];
//   let index = updatedHabits.findIndex((habit) => habit.id === id);
//   updatedHabits[index].streak = Number(updatedHabits[index].streak) + 1;
//   setInLocalStorage("habits", updatedHabits);
//   setHabits(updatedHabits);
// };

// const decrementStreak = (id) => {
//   const updatedHabits = [...habits];
//   let index = updatedHabits.findIndex((habit) => habit.id === id);
//   updatedHabits[index].streak = Math.max(0, updatedHabits[index].streak - 1);
//   setInLocalStorage("habits", updatedHabits);
//   setHabits(updatedHabits);
// };

// const resetStreak = (id) => {
//   const updatedHabits = [...habits];
//   let index = updatedHabits.findIndex((habit) => habit.id === id);
//   updatedHabits[index].streak = 0;
//   setInLocalStorage("habits", updatedHabits);
//   setHabits(updatedHabits);
// };
