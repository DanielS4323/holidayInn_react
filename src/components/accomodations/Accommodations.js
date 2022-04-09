import React, { useEffect, useState } from "react";
import Accomodation from "./Accomodation";
import { getAllAccoms, getPlaces } from "../../service/service";

function Accommodations() {
  const [places, SetPlaces] = useState([]);
  const [select, SetSelect] = useState("");
  const [accomms, SetAccomms] = useState([]);
  const [pgSize, SetPgSize] = useState(5);
  const [ratingFrom, SetRatingFrom] = useState(1);
  const [ratingTo, SetRatingTo] = useState(5);

  useEffect(() => {
    getPlaces().then((res) => {
      SetPlaces(res.data);
    });
  }, []);

  useEffect(() => {
    getAllAccoms(select, pgSize, ratingFrom, ratingTo).then((res) => {
      SetAccomms(res.data);
    });
  }, [select, pgSize, ratingFrom, ratingTo]);

  return (
    <>
      <div className="row mb-4">
        <div className="col-6">
          Sort By City:{" "}
          <select
            className="px-3"
            onChange={(e) => {
              SetSelect(e.target.value);
            }}
          >
            <option value="">All</option>
            {places.map((e, key) => {
              return (
                <option key={key} value={e.city}>
                  {e.city}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col">
          Rating From:
          <input
            type="number"
            value={ratingFrom}
            onChange={(e) => SetRatingFrom(e.target.value)}
            min={1}
            max={5}
            className="mx-3"
          />
          Rating To:{" "}
          <input
            type="number"
            min={1}
            max={5}
            value={ratingTo}
            onChange={(e) => SetRatingTo(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center flex-column">
          {accomms.map((accomm) => (
            <Accomodation key={accomm._id} accomm={accomm} />
          ))}
          {accomms.length >= pgSize ? (
            <button
              className="btn btn-secondary my-3"
              onClick={() => {
                SetPgSize((prev) => {
                  prev += 5;
                  return prev;
                });
              }}
            >
              Load More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Accommodations;
