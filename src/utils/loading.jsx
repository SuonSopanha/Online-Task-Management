import React from "react";
import { useState, useEffect } from "react";

const LoadingBalls = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBounce((prevBounce) => !prevBounce);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center justify-center space-x-2">
        <div
          className={`w-4 h-4 rounded-full animate-bounce ${
            bounce ? "dark:bg-violet-400" : "dark:bg-violet-500"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full animate-bounce ${
            bounce ? "dark:bg-violet-400" : "dark:bg-violet-500"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full animate-bounce ${
            bounce ? "dark:bg-violet-400" : "dark:bg-violet-500"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full animate-bounce ${
            bounce ? "dark:bg-violet-400" : "dark:bg-violet-500"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full animate-bounce ${
            bounce ? "dark:bg-violet-400" : "dark:bg-violet-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBalls;
