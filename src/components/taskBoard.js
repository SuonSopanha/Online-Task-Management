// TaskBoard.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Task 1 Description', priority: 'High', status: 'todo', dueDate: '2023-12-31' },
    { id: 2, name: 'Task 2', description: 'Task 2 Description', priority: 'Medium', status: 'inProgress', dueDate: '2023-12-15' },
    { id: 3, name: 'Task 3', description: 'Task 3 Description', priority: 'Low', status: 'done', dueDate: '2023-12-10' },
  ]);

  const moveTask = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-8">Task Board</h1>

      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          <div className="bg-gray-200 p-4 rounded">
            {tasks
              .filter(task => task.status === 'todo')
              .map(task => (
                <div
                  key={task.id}
                  className="bg-white p-4 mb-4 shadow-md rounded"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', task.id)}
                >
                  <p className="text-lg font-semibold mb-2">{task.name}</p>
                  <p className="text-gray-600 mb-2">{task.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Priority: {task.priority}</span>
                    <span>Status: {task.status}</span>
                    <span>Due Date: {task.dueDate}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-1/3">
          {/* In Progress Column */}
        </div>

        <div className="w-1/3">
          {/* Done Column */}
        </div>
      </div>

    </div>
  );
};

export default TaskBoard;
