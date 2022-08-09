import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Pages/Todo";
import './App.css';
import Words from './Pages/Words';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Students from './Pages/Students';
import Nouns from './Pages/Nouns';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="words" element={<Words />} />
          <Route path="todo" element={<Todo />} />
          <Route path="students" element={<Students />} />
          <Route path="nouns" element={<Nouns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
