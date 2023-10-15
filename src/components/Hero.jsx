import React from 'react';
import TextShine from './TextShine';

const Hero = () => {
  return (
    <section className="my-10">
      <div className="flex ml-[148px] gap-10">
        <img
          src="/images/background.webp"
          className=" h-[400px] object-contain rounded-2xl"
        />
        <div className="flex flex-col items-center justify-center">
          <TextShine name={"VALORANT"} />
          <p className="max-w-[475px] leading-7 mx-auto mt-3 text-gray-600 text-center">
            VALORANT is a character-based 5v5 tactical shooter set on the global
            stage. Outwit, outplay, and outshine your competition with tactical
            abilities, precise gunplay, and adaptive teamwork.
            <br />
            This site will give a basic info related to valorant such as maps,
            agents and also the eSports events and matches going around the
            world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero