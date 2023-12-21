import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Home.module.css"
import MyImage from "../pics//earth - kopia.jpg"

const Home = () => {

  const showAlert = () => {
    alert("We are still workin on this feature");
  };

  return (
    <>
      <Header />
      <div className={Styles.headLine}>
      <h1>Fragment Friends</h1>
      </div>
      <div className={Styles.contentContainer}>
      <div className={Styles.pText}>
        <p>
        Från ett vinterparadis kommer det tre vännerna  Victor, Nora och Daniel.
        Dem bestämde sig en dag för att skapa en app som skulle göra livet lättare
        för alla företag och privat personer i landet. Deras vison var att skapa ett
        sätt att lösa och organiser din vardag på ett nytt och fräsht sätt.
        Det slog sina smarta huvuden ihop och med mycket blod, svett och tårar kom 
        Fragment Friends fram. 
        Med FF Ska du lätt kunna hålla koll på dina vardags syslor och intressen 
        för att lätt kunna gå dag till dag och ha full koll på vad du ska eller vill
        göra! 
        Appen är anpassad för både företagskunder men även privatpersoner. 
        Så registrera dig nu och kom igång med dina nya vardag. På ett bättre sätt.
        För det är DU värd! 
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
      <div className={Styles.toplist}>
        <section className={Styles.listItems}>
          <h2>Topplist Friends</h2>
        <ol>
          <li>content</li>
          <li>content</li>
          <li>content</li>
        </ol>
        </section>
        <section className={Styles.listItems}>
          <h2>Topplist Tasks</h2>
        <ol>
          <li>content</li>
          <li>content</li>
          <li>content</li>
        </ol>
        </section>
        <section className={Styles.listItems}>
          <h2>Topplist Habits</h2>
        <ol>
          <li>content</li>
          <li>content</li>
          <li>content</li>
        </ol>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
