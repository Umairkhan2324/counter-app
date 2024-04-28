"use client";
import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const Increment = () => {
    return setValue(value + 1);
  };
  const decrement = () => {
    return setValue(value - 1);
  };
  const resetValue = () => {
    return setValue(value * 0);
  };

  return (
    <div className="justify-center">
      <div className=" px-5 py-5">{value}</div>
      <button
        className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-sm px-4 py-5"
        onClick={() => Increment()}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-sm px-4 py-5"
        onClick={() => decrement()}
      >
        -
      </button>
      <button
        className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-sm px-4 py-5"
        onClick={() => resetValue()}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
