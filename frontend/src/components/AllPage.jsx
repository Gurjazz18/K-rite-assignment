import React from 'react'
import { Routes, Route } from "react-router-dom";
import AllNotes from '../Pages/AllNotes';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AllPage = () => {
  return (
    <Routes>
      <Route path="/allnotes" element={<AllNotes />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AllPage
