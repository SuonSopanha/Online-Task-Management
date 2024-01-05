import { collection, updateDoc, doc, setDoc, getDoc,getDocs,query,where } from "firebase/firestore";

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
      photoURL: photoUrl,
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
      full_name: fullName,
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


// Function to get user by email
const getUserByEmail = async (email) => {
  try {
    // Create a query to find the user with the specified email
    const q = query(usersCollectionRef, where("email", "==", email));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Check if any documents were found
    if (querySnapshot.empty) {
      console.log("No user found with the specified email");
      return null;
    }

    // Assuming there's only one user with the given email, retrieve the first document
    const userDoc = querySnapshot.docs[0];

    // Return an object containing both user data and user ID
    return { id: userDoc.id, data: userDoc.data() };
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw error;
  }
};

//get user full_name by id 


// Function to get user full_name by id
const getUserFullNameById = async (id) => {
  try {
    const userDoc = await getDoc(doc(usersCollectionRef, id));

    // Check if the document exists
    if (!userDoc.exists()) {
      console.log("No user found with the specified ID");
      return null;
    }

    // Retrieve the user data
    const userData = userDoc.data();

    // Check if the user has a full_Name field
    if (!userData || !userData.full_name) {
      console.log("User does not have a full name");
      return null;
    }

    // Return the full name
    return userData.full_name;
  } catch (error) {
    console.error("Error getting user full name by ID:", error);
    throw error;
  }
};

export { getUserByID, createUser, updateUser, updateWork, updateObjective, getUserByEmail, getUserFullNameById };




