import React, { useState } from 'react';
import '../styles/app.css';

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 
        if (taskName.trim() !== '') {
            addTask({ name: taskName, id: Date.now() });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome da Tarefa"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
}

export default TaskForm;
