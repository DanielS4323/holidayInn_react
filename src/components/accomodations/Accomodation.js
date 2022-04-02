
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../../assets/images copy/hotel-default.jpg"
import Rating from '@mui/material/Rating';

    

function Accomodation({ accomm }) {
  const imgUrl = "http://localhost:3000/image";

  
  



  return (
    <Link className="row my-2" to={`/details/${accomm._id}`} style={{cursor:'pointer',textDecoration:'none'}}>
      
        <div className="col text-center">
         
            <img className="img-fluid" src={accomm.image ? `${imgUrl}/${accomm.image}` : `${defaultImage}`} />
            <h5>{accomm.name}</h5>
            <p>
              {accomm.city}, {accomm.country}
            </p>
            <p>{accomm.address}</p>
            <Rating name="half-rating-read" size="large" value={Number(accomm.rating)} precision={0.5} readOnly />
     
      </div>
     
    </Link>
  );
}

export default Accomodation;
