import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Prototypes from './components/Prototypes';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar title="Daant ki Dukaan"/>
      <div className="container my-3">
    <Routes>
      <Route exact path="/" element ={ <Home />}/>
      <Route path="/about" element ={ <About />}/>
      <Route path="/prototypes" element ={ <Prototypes />}/>
    </Routes>
  </div>
  <Footer/>
  </BrowserRouter>
      
    </>
  );
}

export default App;
