import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";


const Friends = () => {
  let [friends, setFriends] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState("None");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const json = await res.json();
    const newFriends = json.results;

    setFriends(newFriends);
  };

  const addFriend = async () => {
    const res = await fetch("https://randomuser.me/api");
    const json = await res.json();
    const newFriend = json.results[0];

    setFriends((prevFriends) => [...prevFriends, newFriend]);
    navigate(location.pathname);
  };

  const removeFriend = (index) => {
    const updatedFriends = [...friends];
    updatedFriends.splice(index, 1);

    setFriends(updatedFriends);
    navigate(location.pathname);
  };

  const sortFriends = (key) => {
    const sortedFriends = [...friends];
  
    if (key === "firstName") {
      sortedFriends.sort((a, b) =>
        a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase())
      );
    } else if (key === "lastName") {
      sortedFriends.sort((a, b) =>
        a.name.last.toLowerCase().localeCompare(b.name.last.toLowerCase())
      );
    } else if (key === "age") {
      sortedFriends.sort((a, b) => a.dob.age - b.dob.age);
    }
  
    setFriends(sortedFriends);
    setSortOrder(key);
  };
  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
    sortFriends(option.toLowerCase());
  };

  return (
    <>
      <Nav />
      <h1>Friends</h1>
      <button onClick={addFriend}>Add new friend</button>
      <div>
        <label htmlFor="sortDropdown">Sort by: </label>
        <select
          id="sortDropdown"
          value={selectedSortOption}
          onChange={(e) => handleSortOptionChange(e.target.value)}
        >
          <option value="None">None</option>
          <option value="First">First Name</option>
          <option value="Last">Last Name</option>
          <option value="Age">Age</option>
        </select>
      </div>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <img src={friend.picture.thumbnail} alt="User Thumbnail" />
            {`${friend.name.first} ${friend.name.last}, Age: ${friend.dob.age}, Gender: ${friend.gender}`}
            <button onClick={() => removeFriend(index)}>Remove friend</button>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default Friends;





















// const Friends = () => {
//   let [friends, setFriends] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchFriends();
//   }, []);

//   const fetchFriends = async () => {
//     const res = await fetch("https://randomuser.me/api/?results=10");
//     const json = await res.json();
//     const newFriends = json.results;

//     setFriends(newFriends);
//   };

//   const addFriend = async () => {
//     const res = await fetch("https://randomuser.me/api");
//     const json = await res.json();
//     const newFriend = json.results[0];

//     setFriends((prevFriends) => [...prevFriends, newFriend]);
//     navigate(location.pathname);
//   };

//   const removeFriend = (index) => {
//     const updatedFriends = [...friends];
//     updatedFriends.splice(index, 1);

//     setFriends(updatedFriends);
//     navigate(location.pathname);
//   };

//   return (
//     <>
//       <Nav />
//       <h1>Friends</h1>
//       <button onClick={addFriend}>Add new friend</button>
//       <button>Sort</button>
//       <button>Filter</button>
//       <ul>
//         {friends.map((friend, index) => (
//           <li key={index}>
//             <img src={friend.picture.thumbnail} alt="User Thumbnail" />
//             {`${friend.name.first} ${friend.name.last}, Age: ${friend.dob.age}, Gender: ${friend.gender}`}
//             <button onClick={() => removeFriend(index)}>Remove friend</button>
//           </li>
//         ))}
//       </ul>
//       <Footer />
//     </>
//   );
// };

// export default Friends;