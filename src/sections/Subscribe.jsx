import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col max-sm:items-stretch gap-4">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input flex-1"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
