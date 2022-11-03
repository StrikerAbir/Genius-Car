import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import checkout from "../../assets/images/checkout/checkout.png";
import toast, { Toaster } from "react-hot-toast";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {_id, title, price } = service;
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const first = form.first.value;
        const last = form.last.value;
        const name = `${first} ${last}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const message= form.message.value;
        
        const order = { 
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch("http://localhost:1000/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Place order.');
                    toast.success("Successfully Ordered!");
                } else {
                    toast.error("Failed to Order!");
                }
            })
        .catch(err=> console.error(err))

    }
    
    
  return (
    <div>
      <div className="relative">
        <div className="carousel-img">
          <img src={checkout} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">Checkout</h1>
          <h2 className="text-4xl font-bold  text-orange-600 my-5">{title}</h2>
          <h4 className="text-xl font-semibold text-white">Price : ${price}</h4>
        </div>
          </div>
          
      <div className="flex justify-center  bg-[#F3F3F3] rounded-lg my-10">
        <form onSubmit={handlePlaceOrder} className="mt-10 w-11/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input name='first'
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full "
              required
            />
            <input name='last'
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full "
              required
            />
            <input name='phone'
              type="text"
              placeholder="Your Phone"
              className="input input-bordered w-full "
              required
            />
            <input name='email'
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="my-10">
                      <textarea
                          name='message'
              className="textarea textarea-bordered w-full h-52"
              placeholder="Your Message"
            ></textarea>
            <div className="pt-5">
              <input
                className="btn bg-orange-600 hover:bg-orange-700 border-none w-full"
                type="submit"
                value="Place Your Order"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
