import React, { useState,useEffect } from "react";

const EditableTaskName = ({ initialName, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(initialName == undefined ? "Name" : initialName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onNameChange(editedName);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  useEffect(() => {
    // Call onNameChange after the component has re-rendered
    onNameChange(editedName);
  }, [initialName]);

  return (
    <>
      {isEditing ? (
        <div className="pl-4">
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange} 
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
            className={`w-full h-full text-xl sm:text-3xl font-semibold cursor-pointer focus:outline-none`}
          />
        </div>
      ) : (
        <h3
          className="w-full pl-4 text-2xl sm:text-3xl font-semibold cursor-pointer transform transition-transform hover:scale-105"
          onClick={handleEditClick}
        >
          {editedName}
        </h3>
      )}
    </>
  );
};

const TaskName = ({ name, onNameChange }) => {
  return <EditableTaskName initialName={name} onNameChange={onNameChange} />;
};

export default TaskName;
