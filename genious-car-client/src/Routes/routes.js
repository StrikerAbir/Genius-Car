import { createBrowserRouter } from "react-router-dom";
import Form from "../Layout/Form";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:1000/services/${params.id}`),
      },
      {
        path: '/orders',
        element:<Orders></Orders>
      }
    ],
  },
  {
    path: "/",
    element: <Form></Form>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);