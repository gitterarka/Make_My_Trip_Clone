// import logo from './logo.jpg';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
//import Flight from './pages/flight/Flight';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/> 
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/flight" element={<Flight/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
