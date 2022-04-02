import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getReviews } from "../../service/service";
import defaultImage from "../../assets/images copy/hotel-default.jpg"
import Rating from '@mui/material/Rating';
import Review from "./Review";



function Details() {
  const { id } = useParams();
  const [detail, SetDetail] = useState([]);
  const [review, SetReview] = useState([])
  const imgUrl = "http://localhost:3000/image"


  useEffect(() => {
    getDetails(id).then((res) => {
      SetDetail(res.data);
    });
  }, []);



  useEffect(() => {
    getReviews(id).then((res) => {
        SetReview(res.data)
    })
  }, []);




  



  return (
    <div className="container">
      
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid"
              src={detail.image ? `${imgUrl}/${detail.image}` : `${defaultImage}`}
              alt="place"
            />
            
          </div>
          <div className="col-6">
            <div className="container">
              <h5>{detail.name}  </h5>
              <span>
                {detail.country}, {detail.city}
              </span>
              <p>{detail.address}</p>
              <p>{detail.description}</p>
              
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col">
            <h5 className="text-center">Rating:</h5>
        <div className="text-center">
          <Rating
            name="half-rating-read"
            value={Number(detail.rating)}
            precision={0.5}
            readOnly
          />
        </div>

        <div className="col">
          <h5 className="text-center">Average Rating:</h5>
          <div className="text-center">
            <Rating
              name="half-rating-read"
              value={Number(1)}
              precision={0.5}
              readOnly
            />
          </div>
          <h3 className="text-center">Reviews</h3>
              {review.map((revs) => <Review review={revs} key={review._id}/>)}
        </div>
                

     </div>
  
    </div>
    </div>
  );
}

export default Details;
