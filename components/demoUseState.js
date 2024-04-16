import React, { useState } from "react";

const DemoUseState = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);
  const [evenStr, setEvenStr] = useState("This is even");

  setTimeout(() => {
    setCount(count + 1);
    setIsEven(!isEven);
    setEvenStr(!isEven ? "This is even" : "This is odd");
  }, 1000);

  return (
    <div>
      <h1>
        {count} seconds has elapsed. Count is {isEven ? "even" : "odd"}
        <br />
        {evenStr}
      </h1>
      <style jsx>{`
        button {
          padding: 10px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default DemoUseState;
