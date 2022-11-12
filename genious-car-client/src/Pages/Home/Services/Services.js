import React, { useEffect, useState } from "react";
import ServiceCard from "./SeviceCard/ServiceCard";


const Services = () => {
  const [isAsc, setIsAsc] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1000/services?order=${isAsc?'asc':'desc'}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [isAsc]);

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
        <button
          className="my-5 border-2 rounded btn bg-white text-orange-600 hover:border-none hover:text-white border-orange-600 hover:bg-orange-600"
          onClick={() => setIsAsc(!isAsc)}
        >
          Sort by: {isAsc ? "desc" : "asc"}
        </button>
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
