import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from "react";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      sched: "Feb 6th 5:00pm",
      iscompleted: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      sched: "Feb 6th 5:00pm",
      iscompleted: false,
    },
    {
      id: 3,
      text: "Food Shooping",
      sched: "Feb 6th 5:00pm",
      iscompleted: true,
    },
  ]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
