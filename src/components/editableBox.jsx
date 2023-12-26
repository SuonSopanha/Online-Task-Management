import React, { useState, useEffect } from "react";

const EditableBox = ({ init, OnChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(init);

  const handleBoxClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
    OnChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsEditing(false);
    }
  };

  useEffect(() => {
    // Call OnChange after the component has re-rendered
    OnChange(description);
  }, [init]);

  return (
    <div
      onClick={handleBoxClick}
      className={`description-box w-full h-40 rounded-xl border-blue-500 hover:border hover:ring-blue-500 hover:ring-1 text-sm  ${
        isEditing
          ? "editing description-box w-full h-40 rounded-sm border-blue-500 hover:border"
          : "description-box w-full h-40 rounded-sm border-blue-500 hover:border"
      }`}
    >
      {isEditing ? (
        <textarea
          type="text"
          value={description}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="block p-2.5 w-full text-sm text-gray-900 h-40 bg-glasses backdrop-blur-12  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here..."
        />
      ) : (
        <div className="break-words">{description}</div>
      )}
    </div>
  );
};

export default EditableBox;
