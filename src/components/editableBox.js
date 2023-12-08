import React, { useState } from "react";

const EditableBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("Click to edit");

  const handleBoxClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsEditing(false);
    }
  };

  return (
    <div className={`description-box w-full h-40 rounded-sm border-blue-500 hover:border  ${isEditing ? "editing description-box w-full h-40 rounded-sm border-blue-500 hover:border" : "description-box w-full h-40 rounded-sm border-blue-500 hover:border"}`}>
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="description-box w-full h-40 rounded-sm border-blue-500 hover:border"
        />
      ) : (
        <div onClick={handleBoxClick}>{description}</div>
        
      )}
    </div>
  );
};

export default EditableBox;
