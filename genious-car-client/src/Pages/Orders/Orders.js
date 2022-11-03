import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import checkout from "../../assets/images/checkout/checkout.png";
import OrderRow from "./OrderRow/OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
 console.log(orders);
 console.log(user);
  useEffect(() => {
    fetch(`http://localhost:1000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <div className="relative">
        <div className="carousel-img">
          <img src={checkout} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">Order Cart</h1>
          <h2 className="text-4xl font-bold  text-orange-600 my-5">
            {user?.displayName}
          </h2>
          <h4 className="text-xl font-semibold text-white">{user?.email}</h4>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {orders.map((order) => 
              <OrderRow key={order._id} order={order}></OrderRow>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
