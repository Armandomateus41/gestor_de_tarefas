import React, { useState } from "react";
import { Task } from "./types/Task";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./styles/App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
