import {
  collection,
  updateDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  addDoc,
  onSnapshot
} from "firebase/firestore";

import { auth, db } from "./config";

const getRtTaskByUserID = async (id,setChange) => {
  const q = query(collection(db, "tasks"), where("user_id", "==", auth.currentUser.uid));
  onSnapshot(q, (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    setChange(tasks);
  });
}

const getRtTaskByAssigneeID = async (id,setChange) => {
  const q = query(collection(db, "tasks"), where("assignee_id", "==", auth.currentUser.uid));
  onSnapshot(q, (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    setChange(tasks);
  });
}

const getRtTaskByProjectID = async (id,setChange) => {
  const q = query(collection(db, "tasks"), where("project_id", "==", id));
  onSnapshot(q, (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    setChange(tasks);
  });
}

//createRtTask
const createRtTask = async (data) => {
  await addDoc(collection(db, "tasks"), data);
};

//updateRtTaskByID
const updateRtTaskByID = async (id, data) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, data);
};

const deleteRtTaskByID = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};


export { getRtTaskByUserID,getRtTaskByAssigneeID,updateRtTaskByID,deleteRtTaskByID,createRtTask,getRtTaskByProjectID };
