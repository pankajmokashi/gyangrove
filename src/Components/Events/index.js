import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";

function Events() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const divRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      if (page === 1) {
        try {
          const { data: response } = await axios.get(
            `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`
          );
          setTotalPage(response.totalPages);
          setData((prevData) => [...prevData, ...response.events]);
          setPage(page + 1);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    fetchEvents();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = divRef.current;

      if (scrollHeight - scrollTop <= clientHeight) {
        const fetchEvents = async () => {
          if (page <= totalPage) {
            try {
              const { data: response } = await axios.get(
                `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
              );
              setData((prevData) => [...prevData, ...response.events]);
              setPage(page + 1);
            } catch (error) {
              console.error(error.message);
            }
          }
        };
        fetchEvents();
      }
    };

    const currentDivRef = divRef.current;
    currentDivRef.addEventListener("scroll", handleScroll);

    return () => {
      currentDivRef.removeEventListener("scroll", handleScroll);
    };
  }, [page, totalPage]);

  return (
    <div className="events">
      <div className="title">
        Upcomming Events <BsArrowRight />
      </div>
      <div className="events-container" ref={divRef}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="event" key={index}>
              <div className="event-image">
                <img src={item.imgUrl} alt="eventImage" />
              </div>
              <div className="event-title">
                <div className="line1">
                  <div className="name">{item.eventName}</div>
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
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

export default Events;
