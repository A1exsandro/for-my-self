import React, { useState } from 'react';
import './styles.css';

const Todo = () => {
  const [todo, setTodo] = useState(['First Task']);

  return (
    <div className='container'>
      <div className='header'>
        MY TASKS
      </div>
      <div className='task'>
        {todo}
      </div>
    </div>
  );
}

export default Todo;
