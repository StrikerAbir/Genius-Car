import React from "react";
import person from "../../../assets/icons/person.svg";
import wench from "../../../assets/icons/Wrench.svg";
import box from "../../../assets/icons/deliveryt.svg";
const State = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border border-orange-600 rounded-lg shadow-xl mb-20">
      <div class="grid row-gap-8 sm:grid-cols-3 justify-items-center">
        <div>
          <img src={box} alt="" />
          <div>
            <p class="font-bold">We are open monday-friday</p>
            <h6 class="text-2xl font-bold text-deep-purple-accent-400">
              7:00 am - 9:00 pm
            </h6>
          </div>
        </div>
        <div>
          <img src={person} alt="" />
          <div>
            <p class="font-bold">Have a question?</p>
            <h6 class="text-2xl font-bold text-deep-purple-accent-400">
              +2546 251 2658
            </h6>
          </div>
        </div>
        <div>
          <img src={wench} alt="" />
          <div>
            <p class="font-bold">Need a repair? our address</p>
            <h6 class="text-2xl font-bold text-deep-purple-accent-400">
              Liza Street, New York
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
