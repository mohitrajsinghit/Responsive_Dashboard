// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import UserModal from "./UserModal";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("name");
//   const [modalUser, setModalUser] = useState(null);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     setFilteredUsers(users.filter(user =>
//       user.name.toLowerCase().includes(query) ||
//       user.username.toLowerCase().includes(query)
//     ));
//   };

//   const handleSort = (e) => {
//     const sortBy = e.target.value;
//     setSortOption(sortBy);
//     const sortedUsers = [...filteredUsers].sort((a, b) =>
//       a[sortBy].localeCompare(b[sortBy])
//     );
//     setFilteredUsers(sortedUsers);
//   };

//   const openModal = (user) => {
//     setModalUser(user);
//   };

//   const closeModal = () => {
//     setModalUser(null);
//   };

//   return (
//     <div className="container">
//       <h1>User Dashboard</h1>
//       <input
//         type="text"
//         placeholder="Search by name or username"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <select value={sortOption} onChange={handleSort}>
//         <option value="name">Sort by Name</option>
//         <option value="username">Sort by Username</option>
//       </select>

//       <div className="user-list">
//         {filteredUsers.map(user => (
//           <div
//             key={user.id}
//             className="user-card"
//             onClick={() => openModal(user)}
//           >
//             <h3>{user.name}</h3>
//             <p>@{user.username}</p>
//             <div className="view-details">View Details</div>
//           </div>
//         ))}
//       </div>

//       {modalUser && <UserModal user={modalUser} closeModal={closeModal} />}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserModal from "./UserModal";
import bvid from './assets/bvid.mp4'; // Import the video file

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [modalUser, setModalUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    ));
  };

  const handleSort = (e) => {
    const sortBy = e.target.value;
    setSortOption(sortBy);
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
    setFilteredUsers(sortedUsers);
  };

  const openModal = (user) => {
    setModalUser(user);
  };

  const closeModal = () => {
    setModalUser(null);
  };

  return (
    <div className="container">
      <video autoPlay loop muted className="background-video">
        <source src={bvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>User Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name or username"
        value={searchQuery}
        onChange={handleSearch}
      />
      <select value={sortOption} onChange={handleSort}>
        <option value="name">Sort by Name</option>
        <option value="username">Sort by Username</option>
      </select>

      <div className="user-list">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => openModal(user)}
          >
            <h3>{user.name}</h3>
            <p>@{user.username}</p>
            <div className="view-details">View Details</div>
          </div>
        ))}
      </div>

      {modalUser && <UserModal user={modalUser} closeModal={closeModal} />}
    </div>
  );
}

export default App;
