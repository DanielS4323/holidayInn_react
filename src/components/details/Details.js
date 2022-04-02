import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../service/service";
import defaultImage from "../../assets/images copy/hotel-default.jpg"

function Details() {
  const { id } = useParams();
  const [detail, SetDetail] = useState([]);
  const imgUrl = "http://localhost:3000/image"

  useEffect(() => {
    getDetails(id).then((res) => {
      SetDetail(res.data);
    });
  }, []);

  return (
    <>
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
              <h5>{detail.name}</h5>
              <span>
                {detail.country}, {detail.city}
              </span>
              <p>{detail.address}</p>
              <p>{detail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
