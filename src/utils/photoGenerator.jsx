import React from 'react';

const UserProfilePic = ({ name}) => {

   //generate random  rainbow color 
  const generateRandomColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
  };


  const getInitials = (name) => {
    const names = name.split(' ');
    return names
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: generateRandomColor(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
      }}
    >
      {getInitials(name)}
    </div>
  );
};

export default UserProfilePic;
