import React from "react";

import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components'

import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Navv from "./components/NavBar1";
import Register from "./components/Register";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <>
    <Router>
    <Navv/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/process" element={<Process/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/userLogin" element={<UserLogin/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;