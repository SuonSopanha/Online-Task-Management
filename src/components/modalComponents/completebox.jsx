import React, { useState } from "react";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";

const CompleteBox = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleCompleteClick = () => {
    setIsComplete(!isComplete);
  };

  return (
    <span
      className={`flex flex-row items-center px-2 py-1 font-normal leading-tight text-sm sm:text-base ${
        isComplete
          ? "text-green-700 bg-green-100 border-green-700"
          : "text-yellow-700 bg-yellow-100 border-yellow-900"
      } rounded-xl cursor-pointer`}
      onClick={handleCompleteClick}
    >
      {isComplete ? <FaCheckCircle className="mr-2" /> : <FaMinusCircle className="mr-2" />}
      {isComplete ? "Completed" : "Complete"}
    </span>
  );
};

export default CompleteBox;
