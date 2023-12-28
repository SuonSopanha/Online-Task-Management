import { collection, updateDoc, doc, setDoc, getDoc } from "firebase/firestore";

import { auth, db } from "./config";

const usersCollectionRef = collection(db, "users");

//get user by id
const getUserByID = async (id) => {
  const data = await getDoc(doc(db, "users", id));
  return data.data();
};

//create user by custom id by passing email and photo url
const createUser = async (id, email, photoUrl) => {
  try {
    const newField = {
      email: email,
      photoUrl: photoUrl,
      fullName: "",
      work: "",
      objective: "",
    };

    // Create a DocumentReference using doc() with the custom ID
    const customIdDocRef = doc(usersCollectionRef, id);

    // Use setDoc with the DocumentReference
    await setDoc(customIdDocRef, newField);

    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

//create user by custom id by passing email only

//update user by adding full name
const updateUser = async (id, fullName) => {

  try {
    const newField = {
      fullName: fullName,
    };
    const userRef = doc(usersCollectionRef, id);
    await updateDoc(userRef, newField);
    console.log("Full name updated successfully");
  } catch (error) {
    console.error("Error updating full name:", error);
  }
};

//udate user by adding work
//update user by adding work
const updateWork = async (id, work) => {
  try {
    const newField = {
      work: work,
    };
    const userRef = doc(usersCollectionRef, id);
    await updateDoc(userRef, newField);
    console.log("Work updated successfully");
  } catch (error) {
    console.error("Error updating work:", error);
  }
};

//update user by adding objective
const updateObjective = async (id, objective) => {
  try {
    const newField = {
      objective: objective,
    };
    const userRef = doc(usersCollectionRef, id);
    await updateDoc(userRef, newField);
    console.log("Objective updated successfully");
  } catch (error) {
    console.error("Error updating objective:", error);
  }
};

export { getUserByID, createUser, updateUser, updateWork, updateObjective };
