import axios from "axios";
import { useEffect, useState } from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TextShine from "./TextShine";

const Maps = () => {
  const url = "https://valorant-api.com/v1/maps";
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.data);
        setMaps(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className="text-center mt-5">
        <TextShine name={"Maps"} />
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {maps.map((map, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-5xl h-[500px] mx-auto mb-6 flex gap-10 tracking-wider">
              {/* left */}
              <div className="">
                <img
                  src={map?.splash}
                  className="h-[512px] w-[512px] object-contain"
                />
              </div>
              {/* right */}
              <div className=" my-auto">
                <p className="text-[18px] font-bold">
                  {map?.displayName}
                  <span className=" text-gray-600">
                    ({map?.tacticalDescription})
                  </span>
                </p>
                <div className="max-w-[475px] mt-5 text-[14px] leading-7">
                  {map?.narrativeDescription}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Maps;