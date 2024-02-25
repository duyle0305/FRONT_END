/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState();
  const handleAddTask = () => {
    const inputElement = document.getElementById("taskInput");
    const newTask = inputElement.value;

    setTask(newTask);

    window.alert(newTask);
  };

  return (
    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
      <div className="m-4 m-lg-5">
        <h1 className="display-5 fw-bold text-dark ">TODO APP</h1>
        <div className="input-group mb-3">
          <input
            id="taskInput"
            className="form-control"
            placeholder="What is the task today?"
            aria-label="What is the task today?"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleAddTask}
            className="btn btn-outline-secondary text-dark"
            type="button"
            id="button-addon2"
          >
            ADD TASK
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TodoList;
