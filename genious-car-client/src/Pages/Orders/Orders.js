import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import checkout from "../../assets/images/checkout/checkout.png";
import OrderRow from "./OrderRow/OrderRow";
import toast from "react-hot-toast";

const Orders = () => {
  const { user,logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
 console.log(orders);
 console.log(user);
  useEffect(() => {
    fetch(`http://localhost:1000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
         return logOut()
        }
        return res.json()
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);
    
    const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure? want to remove order.");
      if (proceed) {
        fetch(`http://localhost:1000/orders/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Order removed");
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
      }
    };

    const handleStatus = id => {
        fetch(`http://localhost:1000/orders/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ status: "Approved" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = orders.filter((order) => order._id !== id);
              const approved = orders.find((order) => order._id === id);
              approved.status = "Approved";
              const newOrders = [...remaining, approved];
              setOrders(newOrders);
            }
          });
    }
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
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                    handleDelete={handleDelete}
                    handleStatus={handleStatus}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
