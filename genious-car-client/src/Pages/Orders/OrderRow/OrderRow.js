import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
    const { service, customer, price, serviceName, email, phone } = order;
    const [orderService,setOrderService]= useState({})
    useEffect(() => {
        fetch(`http://localhost:1000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    },[service])
    return (
      <tr>
        <th>
          <button className="btn btn-circle btn-sm">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          {/* <br /> */}
          {/* <span className="badge badge-ghost badge-sm">
              Desktop Support Technician
            </span> */}
        </td>
        <td>Price: ${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OrderRow;