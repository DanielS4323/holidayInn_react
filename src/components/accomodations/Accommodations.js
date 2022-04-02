import React, { useEffect, useState } from "react";
import Accomodation from './Accomodation'
import {v4 as uuidv4} from 'uuid'
import { getPlaces } from "../../service/service";




function Accommodations({accomms, SetSelect}) {

  const [places, SetPlaces] = useState([])


  useEffect(() => {
    getPlaces().then(res => {
      SetPlaces(res.data)
    })
  },[])

  



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
    {accomms.map(accomm => <Accomodation key={accomm._id} accomm={accomm}/>)}
    </div>
    
    </>
  )
}

export default Accommodations