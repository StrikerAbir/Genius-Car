import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete, handleStatus }) => {
  const { _id, service, customer, price, serviceName, email, phone, status } =
    order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`https://genious-car-server-wheat.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
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
              <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
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
        {status ? (
          <>
            <button className="btn btn-outline text-green-600">{status}</button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleStatus(_id)}
              className="btn btn-sm bg-orange-600 hover:bg-orange-700 border-none"
            >
              Pending
            </button>
          </>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
