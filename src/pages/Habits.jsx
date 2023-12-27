import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getFromLocalStorage, setInLocalStorage } from "../HelperFunctions";
import { Link } from "react-router-dom";
import Styles from "../styles/Habits.module.css";
import Button from "../styles/Button.module.css";

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
      <div className={Styles.habitsWrapper}>
        <div className={Styles.habitsText}>
          <h3>TRACK YOUR HABITS</h3>
          <h1 className={Styles.habitH1}>Habits</h1>
          <p>
            Here is an overview of your current habits. You're able to keep
            track of the priority and streak of your different habits. Stay up
            to date and edit your streak!{" "}
          </p>
        </div>
        {/* <div className={Styles.filterText}>
          <h3>Filter or sort your habits:</h3>
        </div> */}
        <div className={Styles.selectContainer}>
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <label htmlFor="sortStreak">Sort by Streak:</label>
            <select
              id="sortStreak"
              name="sortStreak"
              onChange={handleSortStreak}
            >
              <option value="">Select</option>
              <option value="HighLow">High to Low</option>
              <option value="LowHigh">Low to High</option>
            </select>
          </div>
        </div>
        <div className={Styles.habitsContainer}>
          {getSortedHabits().map((habit, index) => (
            <div className={Styles.habit} key={index}>
              <h2 className={Styles.habitH2}>{habit.title}</h2>
              <ul>
                <li>
                  Priority:
                  {habit.priority}
                </li>
                <li>
                  Streak:
                  <button
                    className={Button.buttonLowKey}
                    onClick={() => decrementStreak(habit.id)}
                  >
                    -
                  </button>
                  {habit.streak}
                  <button
                    className={Button.buttonLowKey}
                    onClick={() => incrementStreak(habit.id)}
                  >
                    +
                  </button>
                  <button
                    className={Button.buttonLowKey}
                    onClick={() => resetStreak(habit.id)}
                  >
                    Reset
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className={Styles.addDiv}>
          <Link to="/NewHabit">
            <button className={Styles.addBtn}>Add New Habit</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Habits;
