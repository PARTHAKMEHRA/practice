import React, { useState } from 'react';
import styles from './list.module.css'

function UserManagement() {
  const [newUser, setNewUser] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    setNewUser(event.target.value);
  };

  const handleAddUser = () => {
    if (newUser.trim() === '') {
      alert('Please enter a valid user name.');
      return;
    }

    setUserList([...userList, newUser]);
    setNewUser('');
  };

  const handleDeleteUser = (index) => {
    const updatedList = [...userList];
    updatedList.splice(index, 1);
    setUserList(updatedList);
  };

  return (
    <div className={styles.container}>
      <h1>User Management</h1>

      <input
        type="text"
        value={newUser}
        placeholder="Enter user name"
        onChange={handleInputChange}
      />
      <button onClick={handleAddUser} className={styles.btn}>Add User</button>

      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user}

            <button className={styles.btn} 
              onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
