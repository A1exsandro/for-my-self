import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

const Words = () => {
  const [wordList, setWordList] = useState([{word: 'Love', translation: 'Amor'}]);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setWordList((previous) => [...previous, data])
  };
  

  return (
    <div className='containerWord'>
      <div className='menu'>
        <div>Menu</div>
        <div>Noun</div>
        <div>Adjective</div>
        <div>Verb</div>
        <div>Adverb</div>
        <div>Preposition</div>
        <div>Conjunction</div>
        <div>Pronoun</div>
        <div>Number</div>
        <div>Interjection</div>
      </div>

      <div className='main'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='in_word' defaultValue="Word" {...register("word")} />
          <input className='in_translation' defaultValue="Translation" {...register("translation")} />
          <input className='button' type="submit" />
        </form>
        <div className='header'>
          MY TASKS
        </div>
        <div className='info'>There is { wordList.length }</div>
        {
          wordList.map((word, index) => (
            <div key={index} className='card'>
              <div className='face front'>{ word.translation }</div>
              <div className='face back'>{ word.word }</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Words;
