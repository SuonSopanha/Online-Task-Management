import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";

const CompleteBox = ({IsComplete,OnChange}) => {
  const [isComplete, setIsComplete] = useState(IsComplete);

  const handleCompleteClick = () => {
    setIsComplete(!isComplete);
    OnChange(!isComplete);
  };

  useEffect(() => {
    // Call OnChange after the component has re-rendered
    OnChange(isComplete);
  }, [IsComplete]);

  return (
    <span
      className={`flex flex-row items-center px-2 py-1 font-normal leading-tight text-sm sm:text-base ${
        isComplete
          ? "text-green-700 bg-green-100 border-green-700"
          : "text-yellow-700 bg-yellow-100 border-yellow-900"
      } rounded-xl cursor-pointer hover:bg-opacity-80`}
      onClick={handleCompleteClick}
    >
      {isComplete ? <FaCheckCircle className="mr-2" /> : <FaMinusCircle className="mr-2" />}
      {isComplete ? "Completed" : "Complete"}
    </span>
  );
};

export default CompleteBox;
