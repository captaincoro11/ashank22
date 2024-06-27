import { Body } from "./Components/Body";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./index.css";
import Login from "./Components/Login";
import Signin from "./Components/Signin";

function App() {
  return (


     
   
        <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/weather" element={<Body/>}/>
        <Route path="/signin" element={<Signin/>}/>
        
        
   
        </Routes>

        </Router>
    
  );
}

export default App;


