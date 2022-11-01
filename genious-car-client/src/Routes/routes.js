import { createBrowserRouter } from "react-router-dom";
import Form from "../Layout/Form";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Form></Form>,
        children: [
            {
                path: '/login',
                element: <Login></Login>

            }
        ]
    }
])