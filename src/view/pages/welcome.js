import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateUser } from "../../firebase/usersCRUD";
import { auth } from "../../firebase/config";

import LoadingBalls from "../../utils/loading.jsx";

const Welcome = () => {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);
      } else {
        // User is signed out.
        console.log("User is signed out");
      }

      setLoading(false);
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleSubmit = async (event) => {
    event.preventDefault();
    //call firebase
    
    
    try {
      await updateUser(auth.currentUser.uid, fullName);
      console.log("User updated successfully");
      navigate("/objective");
    } catch (error) {
      console.error("Error updating user:", error);
    }


  };

  if (loading) {
    return (
      <LoadingBalls/>
    );
  }

  return (
    <>
      <div class="p-10">
        <form onSubmit={handleSubmit}>
          <div>
            <p class="mb-4 text-3xl font-medium">Welcome to PAS!</p>
            <p>You're signing up as {auth.currentUser.email}.</p>
          </div>
          <div class="mt-10">
            <p class="text-xl font-medium">What's your full name?</p>
            <div>
              <input
                class="focus:shadow-outline mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 font-medium leading-tight text-gray-700 shadow focus:border-blue-300 focus:outline-none"
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            class="mt-16 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white"
          >
            Continue
          </button>
        </form>
        <div class=" text-sm mt-28">
          <p class="text-zinc-900 ">
            Wrong account{" "}
            <a
              href="#"
              class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              login
            </a>{" "}
            instead
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
