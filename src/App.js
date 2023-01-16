import React from "react";

import { Home, About, Services, Process, Clients, Contact, Footer } from './components'

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navv from "./components/Navv";
import Register from "./components/Register";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";

// import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
   
    <Router>
    <Navv/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
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