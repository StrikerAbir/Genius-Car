import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:1000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
    return (
        <div>
            <h2>order {orders.length}</h2>
        </div>
    );
};

export default Orders;
