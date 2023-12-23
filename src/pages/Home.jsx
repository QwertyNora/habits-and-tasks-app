import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Home.module.css";
import MyImage from "../pics//earth - kopia.jpg";
import Tasks from "../pages/Tasks"
import NewTasks from "../pages/NewTask"

const Home = () => {

  const [titles, setTitles] = useState([]);

  const showAlert = () => {
    alert("We are still workin on this feature");
  };

  useEffect(() => {
    const indexes = [0, 1, 2];
    const retrievedTitles = getTitleTopList(indexes);
    setTitles(retrievedTitles);
  }, []);

  const getTitleTopList = (indexes) => {
    return indexes.map(index => {
      const itemString = localStorage.getItem(`item-${index}`); 
      if (itemString) {
        const item = JSON.parse(itemString);
        return item.title;
      }
      return null;
    }).filter(title => title !== null);
  };
  console.log(titles);
  return (
    <>
      <Header />
      <div className={Styles.headLine}>
        <h1>Fragment Friends</h1>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.pText}>
          <p>
            Från ett vinterparadis kommer det tre vännerna Victor, Nora och
            Daniel. Dem bestämde sig en dag för att skapa en app som skulle göra
            livet lättare för alla företag och privat personer i landet. Deras
            vison var att skapa ett sätt att lösa och organiser din vardag på
            ett nytt och fräsht sätt. Det slog sina smarta huvuden ihop och med
            mycket blod, svett och tårar kom Fragment Friends fram. Med FF Ska
            du lätt kunna hålla koll på dina vardags syslor och intressen för
            att lätt kunna gå dag till dag och ha full koll på vad du ska eller
            vill göra! Appen är anpassad för både företagskunder men även
            privatpersoner. Så registrera dig nu och kom igång med dina nya
            vardag. På ett bättre sätt. För det är DU värd!
          </p>
          <div>
            <button onClick={showAlert}>App Store</button>
            <button onClick={showAlert}>Google Play</button>
          </div>
        </div>
        <div className={Styles.myImage}>
          <img src={MyImage} alt="Jorden" />
        </div>
      </div>
      <div>
        <ul>
        {titles.map((title, index) => {
          <li key={index}>{title}</li>
        })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
