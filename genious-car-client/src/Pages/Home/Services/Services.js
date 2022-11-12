import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./SeviceCard/ServiceCard";


const Services = () => {
  const [isAsc, setIsAsc] = useState(true);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();

  useEffect(() => {
    fetch(`https://genious-car-server-wheat.vercel.app/services?search=${search}&order=${isAsc?'asc':'desc'}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [isAsc,search]);


  const handleSearch = () => {
    const value=(searchRef.current.value);
    setSearch(value)
  }
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
        <div className="w-full flex justify-center">
          <div>
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-md input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          className="my-5 btn btn-sm border p-1 rounded  bg-white text-orange-600 hover:border-none hover:text-white border-orange-600 hover:bg-orange-600"
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
