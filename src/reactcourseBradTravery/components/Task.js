import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={task.isCompleted ? "task reminder" : "task"}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.text}</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className='icon del'
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Task;
