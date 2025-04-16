import React from "react";
import Button from "../components/Button.jsx";
import { shoe8 } from "../assets/images/index.js";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <section
          id="home"
          className="w-full gap-10 max-container flex xl:flex-row flex-col justify-center min-h-screen  "
        >
          <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">{" "}
            We Provide You <span className="text-coral-red">Super!</span>
            <span className="text-coral-red"> Shoes</span></h2>
            <p className="mt-4 lg:max-w-lg info-text">
              Experience superquality like never before with Nike cutting-edge
              craftsmanship—designed for those who demand performance,
              precision, and power in every step. Engineered with advanced
              materials and innovative technology, each pair ensures unmatched
              comfort, durability, and style that goes the distance. 
                      </p>
                      <p className="mt-6 lg:max-w-lg info-text" > Our Dedication to detail and excellence ensures your satisfaction </p>

                      <div className="mt-11 ">
                      <Button label="View Details" />
                      </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center"><img src={shoe8} alt="Shoe 8" width={570} height={522} className="object-contain" /></div>
        </section>
      </div>
    </section>
  );
};

export default SuperQuality;
