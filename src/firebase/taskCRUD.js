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
  onSnapshot,
  getDoc,
  orWhere,
} from "firebase/firestore";

import { getprojecByID } from "./projectCRUD";
import { auth, db } from "./config";

// const getRtTaskByUserID = async (id, setChange) => {
//   const q = query(collection(db, "tasks"), where("user_id", "==", id));
//   onSnapshot(q, (querySnapshot) => {
//     const tasks = [];
//     querySnapshot.forEach(async (doc) => {
//       const combinedData = {
//         id: doc.id,
//         ...doc.data(),
//       };
//       tasks.push(combinedData);
//     });
//     setChange(tasks);
//   });
// };

// const getRtTaskByAssigneeID = async (id, setChange) => {
//   const q = query(collection(db, "tasks"), where("assignee_id", "==", id));
//   onSnapshot(q, (querySnapshot) => {
//     const tasks = [];
//     querySnapshot.forEach(async (doc) => {
//       const combinedData = {
//         id: doc.id,
//         ...doc.data(),
//       };
//       tasks.push(combinedData);
//     });
//     setChange(tasks);
//   });
// };

const getRtTaskByUserID = async (id, setChange) => {
  const tasks = [];

  // Step 1: Query the "tasks" collection based on "user_id"
  const taskQuery = query(collection(db, "tasks"), where("user_id", "==", id));

  onSnapshot(taskQuery, async (taskQuerySnapshot) => {
    for (const taskDoc of taskQuerySnapshot.docs) {
      const taskData = { id: taskDoc.id, ...taskDoc.data() };

      if (taskData.project_id !== null && taskData.project_id.length == 20) {
        const projectDocRef = doc(db, "projects", taskData.project_id);
        const projectDocSnapshot = await getDoc(projectDocRef);

        if (projectDocSnapshot.exists()) {
          const projectData = projectDocSnapshot.data();

          // Combine task data with project data
          const combinedData = { ...taskData, project: projectData };

          tasks.push(combinedData);
        }
      } else {
        tasks.push(taskData);
      }
      // Step 2: Perform a second query to the "projects" collection based on document ID
    }
    console.log(tasks);
    // Update state or perform other actions after processing all tasks
    setChange([...tasks]);
  });
};

const getRtTaskByAssigneeID = async (id, setChange) => {
  const tasks = [];

  // Step 1: Query the "tasks" collection based on "assignee_id"
  const taskQuery = query(
    collection(db, "tasks"),
    where("assignee_id", "==", id)
  );

  onSnapshot(taskQuery, async (taskQuerySnapshot) => {
    for (const taskDoc of taskQuerySnapshot.docs) {
      const taskData = { id: taskDoc.id, ...taskDoc.data() };

      if (taskData.project_id !== null && taskData.project_id.length === 20) {
        // Step 2: Perform a second query to the "projects" collection based on project_id
        const projectDocRef = doc(db, "projects", taskData.project_id);
        const projectDocSnapshot = await getDoc(projectDocRef);

        if (projectDocSnapshot.exists()) {
          const projectData = projectDocSnapshot.data();

          // Combine task data with project data
          const combinedData = { ...taskData, project: projectData };

          tasks.push(combinedData);
        }
      } else {
        tasks.push(taskData);
      }
    }

    console.log(tasks);
    // Update state or perform other actions after processing all tasks
    setChange([...tasks]);
  });
};

const getRtTaskByProjectID = async (id, setChange) => {
  const q = query(collection(db, "tasks"), where("project_id", "==", id));
  onSnapshot(q, async (querySnapshot) => {
    const tasks = [];

    for (const docSnapshot of querySnapshot.docs) {
      const taskData = docSnapshot.data();
      const assigneeId = taskData.assignee_id;

      // Fetch user data based on assignee_id
      const assigneeRef = doc(db, "users", assigneeId);
      const assigneeDoc = await getDoc(assigneeRef);
      const assigneeData = assigneeDoc.data();

      // Add user data to the task
      const taskWithAssignee = {
        id: docSnapshot.id,
        ...taskData,
        assignee: assigneeData, // Add assignee data to the task
      };

      tasks.push(taskWithAssignee);
    }

    console.log(tasks);
    setChange(tasks);
  });
};

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

//get task count by id




export {
  getRtTaskByUserID,
  getRtTaskByAssigneeID,
  updateRtTaskByID,
  deleteRtTaskByID,
  createRtTask,
  getRtTaskByProjectID,
};
