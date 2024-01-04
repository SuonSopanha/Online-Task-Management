import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/config";
import { updateWork } from "../../firebase/usersCRUD";


const Kindofwork = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    updateWork(auth.currentUser.uid, option);
    navigate("/app");
  };

  return (
    <>
      <div class="p-10">
        <div>
          <p class="mb-4 text-3xl font-medium">What kind of work do you do?</p>
        </div>
        <div class="mt-10">
          <p class="font-medium ">
            These will help us tailor PAS for you. We may also reach out to help
            you find the right PAS
          </p>
          <p class="font-medium ">products for your team.</p>
        </div>
        <div class="mb-4 mt-6">
          <p class="text-sm font-medium ">
            Select all that apply:
          </p>
        </div>
        <div>
          <button onClick={() => {handleOptionClick('Project or Program Management')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Project or Program Management</p>
          </button>
          <button onClick={() => {handleOptionClick('Marketing')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Marketing</p>
          </button>
          <button onClick={() => {handleOptionClick('Information Technology')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Information Technology (IT)</p>
          </button>
          <button onClick={() => {handleOptionClick('Operations')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Operations</p>
          </button>
          <button onClick={() => {handleOptionClick('Engineering')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Engineering</p>
          </button>
          <button onClick={() => {handleOptionClick('Product management')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Product management</p>
          </button>
          <button onClick={() => {handleOptionClick('Design')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Design</p>
          </button>
          <button onClick={() => {handleOptionClick('Comunications')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Comunications</p>
          </button>
          <button onClick={() => {handleOptionClick('Finace or Accounting')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Finace or Accounting</p>
          </button>
          <button onClick={() => {handleOptionClick('Atministrative Assistant')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Atministrative Assistant</p>
          </button>
          <button onClick={() => {handleOptionClick('Human Resources')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Human Resources</p>
          </button>
          <button onClick={() => {handleOptionClick('Customer Experience')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Customer Experience</p>
          </button>
          <button onClick={() => {handleOptionClick('Research and Development')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Research and Development</p>
          </button>
          <button onClick={() => {handleOptionClick('Data or Analytics')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Data or Analytics</p>
          </button>
          <button onClick={() => {handleOptionClick('Sales')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Sales</p>
          </button>
          <button onClick={() => {handleOptionClick('Legal')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Legal</p>
          </button>
          <button onClick={() => {handleOptionClick('Education Professional')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Education Professional</p>
          </button>
          <button onClick={() => {handleOptionClick('Healthcare Professional')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Healthcare Professional</p>
          </button>
          <button onClick={() => {handleOptionClick('Fundraising')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Fundraising</p>
          </button>
          <button onClick={() => {handleOptionClick('Other')}}class="focus:shadow-outline m-1 rounded-xl border-2 p-2 bg-glasses backdrop-blur-12 bg-opacity-50 border-gray-400 hover:border-sky-500 dark:text-gray-800">
            <p href="#">Other</p>
          </button>
        </div>
        <button class="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
          <p href="#">Continue</p>
        </button>
        <button class="mt-8 h-10 w-28 font-medium dark:text-gray-600">
          <p href="#">Skip</p>
        </button>
      </div>
    </>
  );
};

export default Kindofwork;