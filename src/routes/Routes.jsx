import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AllFoodItems from "../pages/allfoodItems/AllFoodItems";
import Main from "../layout/Main";
import MyProfile from "../layout/MyProfile";
import AddFood from "../pages/MyProfile/AddFood/AddFood";
import MyAddedFood from "../pages/MyProfile/MyAddedFood/MyAddedFood";
import Error from "../pages/Error/Error";
import UpdateFood from "../pages/MyProfile/updateFood/UpdateFood";
import SingleFoodPage from "../pages/singleFoodPage/SingleFoodPage";
import Order from "../pages/orderPage/Order";
import MyOrder from "../pages/MyProfile/MyOrder/MyOrder";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../pages/blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFood",
        element: <AllFoodItems></AllFoodItems>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/foods/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoutes>
            <Order></Order>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
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
  {
    path: "/my-profile",
    element: (
      <PrivateRoutes>
        <MyProfile></MyProfile>
      </PrivateRoutes>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "add-food",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-added-food",
        element: (
          <PrivateRoutes>
            <MyAddedFood></MyAddedFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-orderer-food",
        element: (
          <PrivateRoutes>
            <MyOrder></MyOrder>
          </PrivateRoutes>
        ),
      },
      {
        path: "update-food/:id",
        element: (
          <PrivateRoutes>
            <UpdateFood></UpdateFood>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },
    ],
  },
]);
