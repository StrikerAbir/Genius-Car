import React from 'react';

const ServiceCard = ({ service }) => {
    const { img,price,title } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions items-center">
            <p className="text-orange-600 font-semibold text-xl">
              Price: ${price}
            </p>
            <button className="btn bg-orange-600 hover:bg-orange-700 border-none">
              Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;