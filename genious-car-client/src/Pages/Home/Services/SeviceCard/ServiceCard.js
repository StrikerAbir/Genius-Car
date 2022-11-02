import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id,img,price,title } = service;
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
            <Link to={`/checkout/${_id}`} className="btn bg-orange-600 hover:bg-orange-700 border-none">
              Order
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;