import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const { data } = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderUserCards = () => {
    return users.map((user) => {
      return (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>User Cards</h1>
      <button onClick={fetchUsers}>Get Users</button>
      <div className="user-cards">{renderUserCards()}</div>
    </div>
  );
}

export default App;
