import { faTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>
        {task.text} <faTimes />
      </h3>
    </div>
  );
};

export default Task;
