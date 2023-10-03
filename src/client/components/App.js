import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../styles/app.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
