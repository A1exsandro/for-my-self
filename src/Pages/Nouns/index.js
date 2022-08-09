import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

const Nouns = () => {
  const [todoList, setTodoList] = useState(['First Task']);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => setTodoList((previous) => [...previous, data.task]);

  return (
    <div className='nouns'>
      <div className='formNoun'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='in_put' defaultValue="test" {...register("task")} />
          <input className='button' type="submit" />
        </form>
        <div className='info'>There is { todoList.length }</div>
      </div>
      
      <div className='contain'>
        {
          todoList.map((todo, index) => (
            <div key={index} className='noun'>
              {todo}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Nouns;
