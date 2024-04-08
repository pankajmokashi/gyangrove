import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";

function Shows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
        );
        setData(response.events);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const formattedDate = (dateString) => {
    var date = new Date(dateString);
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="shows">
      <div className="title">
        Recommended Shows <BsArrowRight />
      </div>
      <div className="shows-container">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="show" key={index}>
              <div className="line1">
                {/* <div className="name">{item.eventName}</div> */}
                <div className="name">Make Agree</div>
                <div className="date">{formattedDate(item.date)}</div>
              </div>
              <div className="line2">
                <div className="city">
                  <MdLocationOn />
                  {item.cityName}
                </div>
                <div>
                  {item.weather.substring(0, item.weather.length - 1) +
                    "\u00B0" +
                    item.weather.substring(item.weather.length - 1)}{" "}
                  | {Number.parseInt(item.distanceKm / 100)}Km
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

export default Shows;
