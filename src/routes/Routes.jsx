import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-food",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
