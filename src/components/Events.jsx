import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import TextShine from "./TextShine";

const Events = () => {
  const url = "api/events";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setEvents(response.data.events);
        // console.log(response.data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <>
      <div className="tracking-wider text-center">
        <TextShine name={"Events"} />
        <p className="mt-4 font-medium text-[18px]">List of events happening around the world.</p>
      </div>
      <div className="flex flex-wrap mt-8 justify-center sm:gap-4">
        <div>
          <EventCard events={events} startIndex={0} endIndex={5} />
        </div>
        <div>
          <EventCard events={events} startIndex={6} endIndex={11} />
        </div>
      </div>
    </>
  );
};

export default Events;
