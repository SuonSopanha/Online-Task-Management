import React from "react";

const UserProfilePic = ({ name,size }) => {
  //generate random profile color by using name
  const generateProfileColor = (name) => {
    const profileColors = [
      'blue', // Blue
      'red', // Red
      'green', // Green
      'orange', // Orange
      'purple', // Purple
      // Add more colors as needed
    ];
  
    // Convert name to hash to determine the index in the array
    const hashCode = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return Math.abs(hash);
    };
  
    const index = hashCode(name) % profileColors.length;
  
    // Return the selected color
    return profileColors[index];
  };


  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div className={`w-${size} h-${size} rounded-full flex items-center justify-center text-white font-bold text-xs`} style={{ backgroundColor: generateProfileColor(name) }}>
    {getInitials(name)}
    </div>
  );
};

export default UserProfilePic;
