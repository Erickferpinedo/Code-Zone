import React, { useState } from 'react';
import ProfilePictureUploader from '../components/Settings Page/ProfilePictureUploader';
import UsernameEditor from '../components/Settings Page/UsernameEditor';

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('DefaultUser');

  return (
    <div>
      <h2>Profile Settings</h2>
      <ProfilePictureUploader profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
      <UsernameEditor username={username} setUsername={setUsername} />
    </div>
  );
};

export default Settings;