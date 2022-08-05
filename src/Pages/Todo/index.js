import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

const Todo = () => {
  const [todoList, setTodoList] = useState(['First Task']);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => setTodoList((previous) => [...previous, data.task]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='in_put' {...register("task")} />
        <input className='button' type="submit" />
      </form>

      <div className='container'>
        <div className='header'>
          MY TASKS
        </div>
        {
          todoList.map((todo, index) => (
            <div key={index} className='task'>
              {todo}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Todo;
