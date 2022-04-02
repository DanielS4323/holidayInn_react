import React, { useEffect, useState } from "react";
import Accomodation from './Accomodation'
import { getAllAccoms, getPlaces } from "../../service/service";




function Accommodations() {

  const [places, SetPlaces] = useState([])
  const [select, SetSelect] = useState('')
  const [accomms, SetAccomms] = useState([])

  useEffect(() => {
    getPlaces().then(res => {
      SetPlaces(res.data)
    })
  },[])

  useEffect(() => {
    getAllAccoms(select).then(res => {
      SetAccomms(res.data)
      
    })
  },[select])
  



  return (
    <>
    <div className='row'> 
    <div className='col-4'>
        <select onChange={(e) => {
          SetSelect(e.target.value)
          
        }}>
          <option value=''>All</option>
          {places.map((e, key) => {
            return <option key={key} value={e.city}>{e.city}</option>
          })}
        </select>

    </div>
    </div>
    <div className='row'>
    <div className="col d-flex align-items-center flex-column">
      {accomms.map(accomm => <Accomodation key={accomm._id} accomm={accomm}/>)}
    </div>
    </div>
    
    </>
  )
}

export default Accommodations