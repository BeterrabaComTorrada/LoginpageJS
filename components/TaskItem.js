import React from 'react';

function TaskItem({ task }) {
    return (
        <li>
            <strong>{task.name}</strong>
            <p>Categoria: {task.category}</p>
            <p>Prioridade: {task.priority}</p>
            <p>Data de Vencimento: {task.dueDate}</p>
            {/* add */}
        </li>
    );
}

export default TaskItem;
