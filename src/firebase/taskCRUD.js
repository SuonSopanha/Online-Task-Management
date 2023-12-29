import {
  collection,
  updateDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { auth, db } from "./config";

const tasksCollectionRef = collection(db, "tasks");
const usersCollectionRef = collection(db, "users");

//get task by user id
const getTaskByUserID = async (id) => {
  const q = query(tasksCollectionRef, where("user_id", "==", id));
  const querySnapshot = await getDocs(q);

  const tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push(doc.data());
  });

  console.log(tasks);
  return tasks;
};

//get task by asignee id
const getTaskByAsigneeID = async (id) => {
  const q = query(tasksCollectionRef, where("assignee_id", "==", id));
  const querySnapshot = await getDocs(q);

  const tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push(doc.data());
  });

  console.log(tasks);
  return tasks;
};

//get create task
const createTask = async (task) => {
  try {
    const newField = {
      title: task.title,
      description: task.description,
      user_id: task.user_id,
      assignee_id: task.assignee_id,
      status: task.status,
      priority: task.priority,
      created_at: task.created_at,
    };

    const docRef = await setDoc(doc(db, "tasks"), newField);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

//update task by id
const updateTask = async (id, task) => {
  try {
    const newField = {
      title: task.title,
      description: task.description,
      user_id: task.user_id,
      assignee_id: task.assignee_id,
      status: task.status,
      priority: task.priority,
      created_at: task.created_at,
    };
    const userRef = doc(tasksCollectionRef, id);
    await updateDoc(userRef, newField);
    console.log("Task updated successfully");
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

//delete task by id
const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(tasksCollectionRef, id));
    console.log("Task deleted successfully");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export { getTaskByUserID, getTaskByAsigneeID };
