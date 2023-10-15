import axios from "axios";
import { useEffect, useState } from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TextShine from "./TextShine";
import { Link } from "react-router-dom";

const Agents = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true"; //filtering to not show the duplicated sova.
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.data);
        setAgents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <div className="text-center mt-5">
        <TextShine name={"Agents"} />
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {agents.map((agent, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-5xl h-[500px] mx-auto mb-6 flex tracking-wider">
              {/* left */}
              <div className="">
                <img
                  src={agent?.fullPortrait}
                  className="h-[512px] w-[512px] object-contain"
                />
              </div>
              {/* right */}
              <div className=" my-auto">
                <Link to={`/${agent.uuid}`}>
                <p className="text-[18px] font-bold cursor-pointer">
                  {agent?.displayName}
                  <span className=" text-gray-600">
                    ({agent?.developerName})
                  </span>
                </p>
                </Link>
                <p>{agent?.role?.displayName}</p>

                <div className="max-w-[475px] mt-5 text-[14px] leading-7">
                  {agent?.description}
                </div>

                <p className="text-[12px] mt-4 text-gray-500">
                  (click on agent name to get ability details)
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Agents;