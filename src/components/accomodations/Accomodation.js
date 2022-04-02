
import React, { useEffect, useState } from "react";
import defaultImage from "../../assets/images copy/hotel-default.jpg"


    

function Accomodation({ accomm }) {
  const imgUrl = "http://localhost:3000/image";






  return (
    <>
      <div className="row my-2" style={{cursor:'pointer'}} onClick={()=>{
         
      }}>
        <div className="col-6 text-center">
         
            <img className="img-fluid" style={{height:'300px', width:'450px'}} src={accomm.image ? `${imgUrl}/${accomm.image}` : `${defaultImage}`} />
            <h5>{accomm.name}</h5>
            <p>
              {accomm.city}, {accomm.country}
            </p>
            <p>{accomm.address}</p>
          </div>
    
      </div>
    </>
  );
}

export default Accomodation;
