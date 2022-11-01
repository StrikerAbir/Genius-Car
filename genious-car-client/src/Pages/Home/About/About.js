import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={person} alt=''
            className="w-4/5 rounded-lg shadow-2xl"
          />
          <img
            src={parts} alt=''
            className="w-3/5 right-5 top-1/2 absolute rounded-lg shadow-2xl border-8"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field.
          </h1>
          <p className="pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-600 hover:bg-orange-700 border-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
