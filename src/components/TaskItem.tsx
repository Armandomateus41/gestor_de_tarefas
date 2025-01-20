import React from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
    </li>
  );
};

export default TaskItem;
