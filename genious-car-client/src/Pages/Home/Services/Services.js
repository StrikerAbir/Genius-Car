import React, { useEffect, useState } from "react";
import ServiceCard from "./SeviceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
    
  return (
    <div className="my-28">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Service</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="py-5">
          The majority have suffered alteration in some form, by injected
          humour, <br />
          or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button className="btn btn-outline hover:bg-orange-600 text-orange-600">
          See More
        </button>
      </div>
    </div>
  );
};

export default Services;
