import React, { useState } from 'react';

const UsernameEditor = ({ username, setUsername }) => {
  const [newUsername, setNewUsername] = useState(username);

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSave = () => {
    setUsername(newUsername);
  };

  return (
    <div>
      <h3>Change Username</h3>
      <input type="text" value={newUsername} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <p>Current Username: {username}</p>
    </div>
  );
};

export default UsernameEditor;