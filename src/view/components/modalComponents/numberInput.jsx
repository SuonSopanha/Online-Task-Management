import React, { useState ,useEffect} from "react";

const NumberInput = ({init,OnChange}) => {
  const [numberValue, setNumberValue] = useState(init);

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
    OnChange(Number(e.target.value));
  };

  useEffect(() => {
    // Call OnChange after the component has re-rendered
    OnChange(Number(numberValue));
  }, [init]);


  return (

      <div className="flex flex-col items-center justify-center">
        <input
          type="number"
          value={numberValue}
          onChange={handleNumberChange}
          className="p-2 border bg-blue-200 rounded-md w-16 focus:outline-none focus:border-blue-500"
        />
      </div>
  );
};

export default NumberInput;
