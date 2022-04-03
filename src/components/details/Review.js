import React from "react";
import Rating from '@mui/material/Rating';


function Review({review}) {
  return (
  
      <>

      
      <div className="container col-sm-6">
        <Rating
          name="half-rating-read"
          value={Number(review.rating)}
          precision={0.5}
          readOnly
        />
        <p>{review.review}</p>
      </div>
    </>
  );
}

export default Review;
