import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const [points, setPoints] = useState([2, 3, 4, 5]);

  const [infor, setInfor] = useState({ name: "Duy", age: 25 });

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  const handleIncrement = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleAddPoint = () => {
    const value = window.prompt();
    // const clonePoints = [...points];
    // clonePoints.push(value);
    // setPoints(clonePoints);
    setPoints((prev) => {
      return [...prev, value];
    });
  };

  const handleChangeName = () => {
    const value = window.prompt();
    const cloneInfor = { ...infor, name: value };
    setInfor(cloneInfor);
  };

  const handleChangeAge = () => {
    const value = window.prompt();
    const cloneInfor = { ...infor, age: value };
    setInfor(cloneInfor);
  };

  const handleMessage = (name) => {
    window.alert("Hello ${name}");
  };
  return (
    <div>
      <button onClick={() => handleMessage("Duy")} className="btn btn-success">
        Click
      </button>
      <hr></hr>
      <div>{count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <hr></hr>
      <div>{points.toString()}</div>
      <button onClick={handleAddPoint}>Add Point</button>
      <hr></hr>
      <div>{infor.name}</div>
      <div>{infor.age}</div>
      <button onClick={handleChangeName}>Change Name</button>
      <button onClick={handleChangeAge}>Change age</button>
    </div>
  );
};

export default State;
