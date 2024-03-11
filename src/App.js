import React from "react";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Customerlogin from "./Components/Customer_login.jsx";
import Customerregister from "./Components/Customerregister.jsx";
import Farmerlogin from "./Components/farmer_login.jsx";
import Farmerregister from "./Components/farmerregister.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
<Router>
    <div>
      <NavBar/>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />   
        <Route exact path="/Customerlogin" element={<Customerlogin />} />
        <Route exact path="/Customerregister" element={<Customerregister/>}/>
        <Route exact path="/farmerlogin" element={< Farmerlogin/>} />
        <Route exact path="/farmerregister" element={<Farmerregister />} />
      </Routes>
        
      
      </div>
  </Router>
  );
}

export default App;
