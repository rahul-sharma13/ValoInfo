import React, { useEffect, useState } from "react";
import TextShine from "./TextShine";
import { useParams } from "react-router-dom";
import axios from "axios";

const AgentPage = () => {
  const params = useParams();
  // console.log(params); params return an object. it holds the value given after colon ":" in dynamic path.
  const url = `https://valorant-api.com/v1/agents/${params.uuid}`;
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.data.abilities);
        setAbilities(response.data.data.abilities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <div className="my-10 font-poppins">
        <div className="text-center mb-5">
          <TextShine name={"ABILITIES"} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-start justify-center gap-10 tracking-wider">
            {abilities.slice(0,2).map((ability, index) => (
              <div key={index}>
                <h2 className="text-[18px] font-bold mb-2">
                  {ability?.slot} : <span className="text-[16px]">{ability?.displayName}</span>
                </h2>
                <div className="max-w-[575px] dark:text-gray-400 ">
                  {ability?.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-start justify-center gap-10">
          {abilities.slice(2,4).map((ability, index) => (
              <div key={index}>
                <h2 className="text-[18px] font-bold mb-2">
                  {ability?.slot} : <span className="text-[16px]">{ability?.displayName}</span>
                </h2>
                <div className="max-w-[575px] dark:text-gray-400">
                  {ability?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPage;