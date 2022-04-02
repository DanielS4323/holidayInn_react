
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../../assets/images copy/hotel-default.jpg"
import Rating from '@mui/material/Rating';

    

function Accomodation({ accomm }) {
  const imgUrl = "http://localhost:3000/image";

  
  



  return (
    <Link to={`/details/${accomm._id}`}>
      <div className="row my-2" style={{cursor:'pointer'}}>
        <div className="col-6 text-center">
         
            <img className="img-fluid" style={{height:'300px', width:'450px'}} src={accomm.image ? `${imgUrl}/${accomm.image}` : `${defaultImage}`} />
            <h5>{accomm.name}</h5>
            <p>
              {accomm.city}, {accomm.country}
            </p>
            <p>{accomm.address}</p>
            <Rating name="half-rating-read" size="large" value={Number(accomm.rating)} precision={0.5} readOnly />
          </div>
      </div>
     
    </Link>
  );
}

export default Accomodation;
