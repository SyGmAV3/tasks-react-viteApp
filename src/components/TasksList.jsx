import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import {TaskContext} from '../context/taskContext'

function TasksList() {
  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas por realizar</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
