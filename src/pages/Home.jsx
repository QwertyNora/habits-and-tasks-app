import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import MyImage1 from "../pics/checklist-monochromatic.svg"
import MyImage2 from "../pics/information-flow-monochromatic.svg"
import MyImage3 from "../pics/user-profile-monochromatic.svg"
import BackGroundImage from "../pics/undraw_mobile_content_xvgr.svg"
import { SiApple, SiGoogleplay } from "react-icons/si";

const Home = () => {
  const [topTasks, setTopTasks] = useState([]);
  const [topHabits, setTopHabits] = useState([]);
  const [topFriends, setTopFriends] = useState([]);

  const showAlert = () => {
    alert("We are still workin on this feature");
  };

  const getTopItems = (categoryKey, count = 3) => {
    const items = JSON.parse(localStorage.getItem(categoryKey)) || [];

    if (categoryKey === "friends") {
      count = 5;
    }
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
      <div className={Styles.contentContainer}>
    <div className={Styles.textContainer}>
      <h3 className={Styles.headerText}>Improve your everyday routine</h3>
      <div className={Styles.pText}>
      <p>Track your habits and tasks, share your progress with your friends or team!</p>
      </div>
      <div>
        <button onClick={showAlert}><SiApple /> App Store</button>
        <button onClick={showAlert}><SiGoogleplay /> Google Play</button>
      </div>
    </div>
    <div className={Styles.imageContainer}>
      <img src={BackGroundImage} alt="Backgrounds Image"/>
    </div>
  </div>
      <div className={Styles.gridContainer}>
        <div className={Styles.gridItem1}>
          <img src={MyImage1} alt="Tasks image"/>
      <h2>Top Tasks</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topTasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      </div>
      <Link to="/tasks">See all tasks</Link>
      </div>
      <div className={Styles.gridItem2}>
        <img src={MyImage2} alt="Habits image"/>
      <h2>Top Habits</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topHabits.map((habit, index) => (
          <li key={index}>{habit.title}</li>
        ))}
      </ul>
      </div>
      <Link to="/habits">See all habits</Link>
      </div>
      <div className={Styles.gridItem3}>
        <img className={Styles.friendsImg} src={MyImage3} alt="Friends image"/>
      <h2>Top Friends</h2>
      <div className={Styles.listImageWrapper}>
      <ul>
        {topFriends.map((friend, index) => (
          <li key={index}>
            {friend.name.first} {friend.name.last} 
          </li>
        ))}
      </ul>      
      </div>
      <Link to="/friends">See all friends</Link>
      </div>
    </div>   
      <Footer />
      </>
  );
};

export default Home;

