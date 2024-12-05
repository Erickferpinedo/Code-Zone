import React from 'react';

const ProfilePictureUploader = ({ profilePicture, setProfilePicture }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h3>Change Profile Picture</h3>
      {profilePicture && <img src={profilePicture} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />}
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ProfilePictureUploader;