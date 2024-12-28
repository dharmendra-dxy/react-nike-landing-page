import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import {arrowRight} from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img 
          src={offer} 
          alt="offer"
          width={773}
          height={687}
          className="object-contain" 
          />
      </div>


      <div className="flex flex-1 flex-col">

        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalized lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
          
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your experience with unbeatable deal. From premium sections to incredible saving, we offer unparlleled value that set us apart. 
        </p>
        <p className="mt-6  lg:max-w-lg info-text">
          Navigate a realm of possibilites designed to fullfill your unique desires, surpassing the loftiest experiences. Your journey with us is nothing short of exception.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button 
            label="Learn more" 
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>

      </div>

    </section>
  );
};

export default SpecialOffer;
