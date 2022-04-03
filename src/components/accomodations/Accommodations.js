import React, { useEffect, useState } from "react";
import Accomodation from './Accomodation'
import { getAllAccoms, getPlaces } from "../../service/service";




function Accommodations() {

  const [places, SetPlaces] = useState([])
  const [select, SetSelect] = useState('')
  const [accomms, SetAccomms] = useState([])
  const [pgSize, SetPgSize] = useState(5)

  useEffect(() => {
    getPlaces().then(res => {
      SetPlaces(res.data)
    })
  },[])

  useEffect(() => {
    getAllAccoms(select, pgSize).then(res => {
      SetAccomms(res.data)
      
    })
  },[select,pgSize])
  



  return (
    <>
    <div className='row mb-4'> 
    <div className='col-6'>
        Sort By City: <select className="px-3" onChange={(e) => {
          SetSelect(e.target.value)
          
        }}>
          <option value=''>All</option>
          {places.map((e, key) => {
            return <option key={key} value={e.city}>{e.city}</option>
          })}
        </select>

    </div>
    <div className="col">
          Rating From:<input type='number' value={1} className='mx-3'/>
          Rating To: <input type='number' value={5}/>
    </div>
    </div>
    <div className='row'>
    <div className="col d-flex align-items-center flex-column">
      {accomms.map(accomm => <Accomodation key={accomm._id} accomm={accomm}/>)}
          {accomms.length >= pgSize ? <button className="btn btn-secondary my-3" onClick={() => {
            SetPgSize(prev => {
               prev += 5
               return prev
            })
          }}>Load More</button>
        : 
        ''}
    </div>
    </div>
    
    </>
  )
}

export default Accommodations