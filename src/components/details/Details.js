import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getReviews } from "../../service/service";
import defaultImage from "../../assets/images copy/hotel-default.jpg";
import Rating from "@mui/material/Rating";
import Review from "./Review";

function Details() {
  const { id } = useParams();
  const [detail, SetDetail] = useState([]);
  const [review, SetReview] = useState([]);
  const imgUrl = "http://localhost:3000/image";




  useEffect(() => {
    getDetails(id).then((res) => {
      SetDetail(res.data);
    });
  }, []);



  useEffect(() => {
    getReviews(id).then((res) => {
      SetReview(res.data);
    });
  }, []);

  let avgRating = review.reduce((a,b,i,arr) => a + (b.rating/arr.length),0)



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
            <h5>{detail.name} </h5>
            <span>
              {detail.country}, {detail.city}
            </span>
            <p>{detail.address}</p>
            <p>{detail.description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col my-4">
            <h5 className="text-center">Rating:</h5>
            <div className="text-center">
              <Rating
                name="half-rating-read"
                value={Number(detail.rating)}
                precision={0.5}
                readOnly
                size="large"
              />
            </div>
          </div>
          <div className="col my-4">
            <h5 className="text-center">Average Review:</h5>
            <div className="text-center">
              <Rating
                name="half-rating-read"
                value={Number(avgRating)}
                precision={0.5}
                readOnly
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-4">Reviews</h3>
      {review.map((revs) => (
        <Review review={revs} key={revs._id} />
      ))}
    </div>
  );
}

export default Details;
