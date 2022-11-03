import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../Context/AuthProvider';
import toast from "react-hot-toast";

const Signup = () => {
    const { user, createUser } = useContext(AuthContext);

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
        .then((result) => {
          const user = result.user;
          form.reset();
          toast.success('Sign in successful.')
          console.log(user);
        })
        .catch((err) => console.error(err));
    };
    return (
      <div className="hero w-full my-20">
        <div className="hero-content flex-col w-full lg:flex-row">
          <div className="lg:w-1/2 flex justify-center">
            <img className="lg:w-3/4 w-1/2" src={img} alt="" />
          </div>
          <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            {/* form */}
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name='name'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-600 hover:bg-orange-700 border-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
                    Already have an account?
              <Link className="text-orange-600 font-bold" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Signup;