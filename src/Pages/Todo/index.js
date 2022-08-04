import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

const Todo = () => {
  const [todo, setTodo] = useState(['First Task']);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("task")} />
        <input type="submit" />
      </form>

      <div className='container'>
        <div className='header'>
          MY TASKS
        </div>
        <div className='task'>
          {todo} 
        </div>
      </div>
    </>
  );
}

export default Todo;
