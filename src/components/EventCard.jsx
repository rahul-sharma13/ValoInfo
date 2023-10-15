import React from "react";

const EventSection = ({ para, head }) => (
    <div className="">
      <p className="text-accent-foreground">{para}</p>
      <h2 className="text-gray-500 font-thin">{head}</h2>
    </div>
  );
  
  const EventCard = ({ events, startIndex, endIndex }) => {
    // console.log(startIndex);
    return (
      <>
        {events.slice(startIndex, endIndex).map((event, index) => (
          <div
            className="bg-accent text-black h-28 tracking-wider max-w-screen-2xl  flex justify-between mb-4"
            key={index}
          >
            {/* Name and details up-down */}
            <div className="mx-3 my-auto">
              {/* name */}
              <div className="font-semibold text-[18px] mb-2 text-accent-foreground">
                {event.event_name}
              </div>
              {/* details */}
              <div className="flex text-[14px] gap-10">
                {/* prize */}
                <EventSection para={event.prize_pool} head={"Prize Pool"} />
                {/* dates */}
                <EventSection para={event.dates} head={"Dates"} />
                {/* region */}
                <EventSection para={event.region} head={"Region"} />
              </div>
            </div>
            <div
              className="w-24 flex p-4 dark:bg-[#334155] bg-[#cbd5e1]"
            >
              <img
                src={event.event_logo}
                className="h-22 w-22 object-contain mx-auto"
              />
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default EventCard;