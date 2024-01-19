// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook'
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<ListBooks/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/add" element={<AddBook/>} />
        <Route path="/search" element={<SearchBooks/>} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </Router>
  );
}

export default App;
