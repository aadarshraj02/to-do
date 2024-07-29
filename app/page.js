"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
  };

  let renderTask = <h2>No Task Available</h2>;

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center font-bold ">
        The To Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Tasks Here..."
          className="text-2xl border-2 border-zinc-800 m-8 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description Here..."
          className="text-2xl border-2 border-zinc-800 m-8 px-4 py-2"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded-xl m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200"></div>
    </>
  );
};

export default page;
