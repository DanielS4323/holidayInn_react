import Home from "./components/home/Home";
import React, { useEffect, useState } from "react";
import coverLogo from "../src/assets/images copy/cover.jpg"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import About from "./components/about/About";
import Accommodations from "./components/accomodations/Accommodations";
import AddNew from '../src/components/addNew/AddNew'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Details from "./components/details/Details";

function App() {



  return (
  <>
  <div className="container">
    <div className="row">
    <Router>
     <img src={coverLogo} alt="" className="img-fluid" />
     <Home/>
    <Routes>
    <Route path="/accommodations" element={<Accommodations />}/>
    <Route path="/add" element={<AddNew/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/details/:id" element={<Details/>}/>
    
    </Routes>
    </Router>
    </div>
    
  </div>
    </>
  );
}

export default App;
