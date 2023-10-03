import React from 'react';

function TaskItem({ task }) {
    return (
        <li>
            <strong>{task.name}</strong>
            {/* Detalhes */}
        </li>
    );
}

export default TaskItem;
