import Home from "./components/home/Home";
import React, { useEffect, useState } from "react";
import coverLogo from "../src/assets/images copy/cover.jpg"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import About from "./components/about/About";
import Accommodations from "./components/accomodations/Accommodations";
import AddNew from '../src/components/addNew/AddNew'
import { getAllAccoms } from "./service/service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {


  const [accomms, SetAccomms] = useState([])
  const [select, SetSelect] = useState('')
  let filter = accomms.filter(city => city.city.includes(select))
  
  console.log(select);
  // useEffect(() => {
  //   getAllAccoms().then(res => {
  //     SetAccomms(res.data)
  //     // console.log(res.data);
  //   })
  // },[])


  useEffect(() => {
    getAllAccoms().then(res => {
      SetAccomms(res.data)
      
    })
  },[])


  return (
  <>
  <div className="container">
    <div className="row">
    <Router>
     <img src={coverLogo} alt="" className="img-fluid" />
     <Home/>
    <Routes>
    <Route path="/accommodations" element={<Accommodations accomms={accomms} SetSelect={SetSelect}/>}/>
    <Route path="/add" element={<AddNew/>}/>
    <Route path="/about" element={<About/>}/>
    
    </Routes>
    </Router>
    </div>
    
  </div>
    </>
  );
}

export default App;
