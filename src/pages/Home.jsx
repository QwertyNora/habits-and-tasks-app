import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import MyImage1 from "../pics/checklist-monochromatic.svg"
import MyImage2 from "../pics/information-flow-monochromatic.svg"
import MyImage3 from "../pics/user-profile-monochromatic.svg"
import BackGroundImage from "../pics/scrum-board-outline.svg"


const Home = () => {
  const [topTasks, setTopTasks] = useState([]);
  const [topHabits, setTopHabits] = useState([]);
  const [topFriends, setTopFriends] = useState([]);

  const showAlert = () => {
    alert("We are still workin on this feature");
  };

  const getTopItems = (categoryKey, count = 3) => {
    const items = JSON.parse(localStorage.getItem(categoryKey)) || [];
    return items.slice(0, count); 
  };

  useEffect(() => {
    setTopTasks(getTopItems("tasks"));
    setTopHabits(getTopItems("habits"));
    setTopFriends(getTopItems("friends"));
  }, []);

  return (
    <>
      <Header />
      <div className={Styles.tasksWrapper}>
      <div className={Styles.contentContainer}>
        <div className={Styles.pText}>
          <h3>Invest in your habits</h3>
          <div className={Styles.textAndImage}>
          <p>
            Från ett vinterparadis kommer det tre vännerna Victor, Nora och
            Daniel. Dem bestämde sig en dag för att skapa en app som skulle göra
            livet lättare för alla företag och privat personer i landet. Deras
            vison var att skapa ett sätt att lösa och organiser din vardag på
            ett nytt och fräsht sätt. Det slog sina smarta huvuden ihop och med
          </p>
          <img src={BackGroundImage} alt="Backgrounds Image"/>
          </div>
          <div>
            <button onClick={showAlert}>App Store</button>
            <button onClick={showAlert}>Google Play</button>
          </div>
        </div>
      </div>
      <div className={Styles.gridContainer}>

        <div className={Styles.gridItem1}>
      <h2>Top Tasks</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topTasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      <img src={MyImage1} alt="Tasks image"/>
      </div>
      <Link to="/tasks">Go to tasks</Link>
      </div>

      <div className={Styles.gridItem2}>
      <h2>Top Habits</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topHabits.map((habit, index) => (
          <li key={index}>{habit.title}</li>
        ))}
      </ul>
      <img src={MyImage2} alt="Habits image"/>
      </div>
      <Link to="/habits">Go to habits</Link>
      </div>

      <div className={Styles.gridItem3}>
      <h2>Top Friends</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topFriends.map((friend, index) => (
          <li key={index}>
            {friend.name.first} {friend.name.last} 
          </li>
        ))}
      </ul>
      <img src={MyImage3} alt="Friends image"/>
      </div>
      <Link to="/friends">Go to friends</Link>
      </div>
    </div>
    </div>
      <Footer />
    </>
  );
};

export default Home;
