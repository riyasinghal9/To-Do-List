import React, { useState } from "react";
import Task from "../components/task";

const TodoApp = () => {
const [tasks, setTasks] = useState([]);
const [newTaskText, setNewTaskText] = useState("");

const addTask = () => {

    const newTask = {
    id: Date.now(),
    text: newTaskText,
    completed: false,
    };

    let tasksCopy = tasks;
    tasksCopy.push(newTask);
    setTasks(tasksCopy);
    setNewTaskText("");
};

const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    );
};

const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
};

return (
    <div>
    <h1>ToDo App</h1>
    <div>
        <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
    </div>
    <div>
        {tasks.map((task) => (
        <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
        />
        ))}
    </div>
    </div>
);
};

export default TodoApp;
