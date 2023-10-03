import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
    // filtro de prioridades
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;
