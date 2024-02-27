/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function ToDo() {
  const [task, setTask] = useState("");
  const [toDo, setTodo] = useState([]);
  const [editID, setEditID] = useState(0);

  const handleAddTodo = () => {
    if (task !== "") {
      setTodo([...toDo, { list: task, id: Date.now(), status: false }]);
      setTask("");
    }
    if (editID) {
      const editToDo = toDo.find((task) => task.id === editID);
      const updateTodo = toDo.map((e) =>
        e.id === editToDo.id
          ? (e = { id: e.id, list: task })
          : (e = { id: e.id, list: e.list })
      );
      setTodo(updateTodo);
      setEditID(0);
      setTask("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDoneTask = (id) => {
    let e = toDo.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodo(e);
  };

  const handleEditTask = (id) => {
    const editTask = toDo.find((e) => e.id === id);
    setTask(editTask.list);
    setEditID(editTask.id);
  };

  const handleDeleteTask = (id) => {
    setTodo(toDo.filter((e) => e.id !== id));
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
      <div className="m-4 m-lg-5">
        <h1 className="display-5 fw-bold text-dark ">TODO APP</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="What is the task today?"
            value={task}
            onChange={() => setTask(event.target.value)}
            ref={inputRef}
          />
          <button
            type="submit"
            className="btn btn-outline-secondary text-dark"
            id="button-addon2"
            onClick={handleAddTodo}
          >
            {editID ? "EDIT " : "ADD TASK"}
          </button>
        </div>
      </form>

      <div className="list">
        <ul>
          {toDo.map((e) => (
            <li className="list-items">
              <div
                className="list-items-list"
                id={e.status ? "list-items" : ""}
              >
                {e.list}
              </div>
              <span>
                <MdOutlineDownloadDone
                  className="list-items-icons"
                  id="done"
                  title="DONE"
                  onClick={() => handleDoneTask(e.id)}
                />
                <FaEdit
                  className="list-items-icons"
                  id="edit"
                  title="EDIT"
                  onClick={() => handleEditTask(e.id)}
                />
                <MdDeleteOutline
                  className="list-items-icons"
                  id="delete"
                  title="DELETE"
                  onClick={() => handleDeleteTask(e.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
