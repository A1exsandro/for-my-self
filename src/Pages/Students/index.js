import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './styles.css';

const Students = () => {
  const [studentsList, setStudentsList] = useState([
    {
    name: 'Alexsandro', 
    presence: 35,
    }]);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setStudentsList((previous) => [...previous, data])
  };
  

  return (
    <div className='students'>
      <div className='menu'>
        <div>Menu</div>
        <div><Link to="/registers">Registers</Link></div>
      </div>
      <div className='main'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='in_word' defaultValue="Name" {...register("name")} />
          <input className='in_translation' defaultValue="Presence" {...register("presence")} />
          <input className='button' type="submit" />
        </form>

        <div className='container'>
          <div className='header'>
            Students
          </div>
          <div className='info'>There is { studentsList.length }</div>
          {
            studentsList.map((student, index) => (
              <div key={index} className='card'>
                <div className='face front'>{ student.presence }</div>
                <div className='face back'>{ student.name }</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Students;
