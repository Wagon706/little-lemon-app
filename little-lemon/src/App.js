import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<ReservationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

