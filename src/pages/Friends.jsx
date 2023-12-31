import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Styles from "../styles/Friendes.module.css";

const Friends = () => {
  let [friends, setFriends] = useState([]);
  let [genderFilter, setGenderFilter] = useState("");
  let [maxAge, setMaxAge] = useState("");
  let [minAge, setMinAge] = useState("");
  let [sortCriterion, setSortCriterion] = useState("");
  let [selectedFriend, setSelectedFriend] = useState(null);
  let [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
    setFriends(storedFriends);
  }, []);

  const openModal = (friend) => {
    setSelectedFriend(friend);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFriend(null);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleMaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };

  const handleMinAgeChange = (event) => {
    setMinAge(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriterion(event.target.value);
  };

  const getFilteredFriends = () => {
    return friends
      .filter((friend) => {
        if (genderFilter && friend.gender !== genderFilter) {
          return false;
        }
        if (maxAge && friend.dob.age > maxAge) {
          return false;
        }
        if (minAge && friend.dob.age < minAge) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortCriterion === "age") {
          return a.dob.age - b.dob.age;
        } else if (sortCriterion === "firstName") {
          return a.name.first.localeCompare(b.name.first);
        } else if (sortCriterion === "lastName") {
          return a.name.last.localeCompare(b.name.last);
        }
        return 0;
      });
  };

  const generateAgeOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const addFriend = async () => {
    const res = await fetch("https://randomuser.me/api");
    const json = await res.json();
    const newFriend = json.results[0];
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    localStorage.setItem("friends", JSON.stringify([...friends, newFriend]));
  };

  const removeFriend = (index, event) => {
    event.stopPropagation();
    const updatedFriends = [...friends];
    updatedFriends.splice(index, 1);
    setFriends(updatedFriends);
    localStorage.setItem("friends", JSON.stringify(updatedFriends));
  };

  return (
    <>
      <Nav />
      <div className={Styles.friendsWrapper}>
        <div className={Styles.gridContainer}>
          <div className={Styles.girdItem2}>
            <h1>Friends</h1>
          </div>
          <div className={Styles.girdItem3}>
            <select onChange={handleGenderFilterChange}>
              <option value="">Gender:</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select onChange={handleMaxAgeChange} value={maxAge}>
              <option value="">Max Age</option>
              {generateAgeOptions(1, 100)}
            </select>
            <select onChange={handleMinAgeChange} value={minAge}>
              <option value="">Min Age</option>
              {generateAgeOptions(1, 100)}
            </select>
            <select onChange={handleSortChange}>
              <option value="">Sort by:</option>
              <option value="age">Age</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </select>
          </div>
          <div className={Styles.girdItem1}>
            <div className={Styles.addFriends}>
              <button onClick={addFriend}>Add new friend</button>
            </div>
            <ul>
              {getFilteredFriends().map((friend, index) => (
                <li key={index} onClick={() => openModal(friend)}>
                  <img
                    src={friend.picture.thumbnail}
                    alt="User Thumbnail"
                    className={Styles.iconImg}
                  />
                  {`${friend.name.first} ${friend.name.last}`}
                  <div className={Styles.removeBtn}>
                    <button onClick={(event) => removeFriend(index, event)}>
                      Remove friend
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isModalOpen && (
          <div className={Styles.modal}>
            <div className={Styles.modalcontent}>
              <span className={Styles.close} onClick={closeModal}>
                &times;
              </span>
              <img
                src={selectedFriend.picture.large}
                alt={`${selectedFriend.name.first} ${selectedFriend.name.last}`}
              />
              <h2>{`${selectedFriend.name.first} ${selectedFriend.name.last}`}</h2>
              <p>Email: {selectedFriend.email}</p>
              <p>Gender: {selectedFriend.gender}</p>
              <p>
                Birthday:{" "}
                {new Date(selectedFriend.dob.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Friends;
