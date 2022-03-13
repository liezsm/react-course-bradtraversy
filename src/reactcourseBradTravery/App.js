import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";

import React from "react";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      sched: "Feb 6th 5:00pm",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      sched: "Feb 6th 5:00pm",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Food Shooping",
      sched: "Feb 6th 5:00pm",
      isCompleted: false,
    },
  ]);
  const [shouldAdd, setShouldAdd] = useState(false);
  //   todo delete task

  const deleteTask = (id) => {
    console.log(id);
    setTask((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  //    todo add a new Task

  const addTask = (newTask) => {
    console.log(newTask);
  };

  //   todo toggle reminder

  const toggleReminder = (id) => {
    setTask((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    });
  };

  // todo trigger if add btn is click we will show the form

  const addIsClick = () => {
    setShouldAdd(!shouldAdd);
  };
  return (
    <div className='container'>
      <Header isAddClick={addIsClick} />
      {shouldAdd && <AddTask addTask={addTask} />}

      {tasks.length == 0 && <h1> There are no tasks!</h1>}
      {tasks && (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          addTask={addTask}
          toggleReminder={toggleReminder}
        />
      )}
    </div>
  );
};

export default App;
