import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../pages/Blogs/Blogs";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-marketplace-server-gamma.vercel.app/allToy"),
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-gamma.vercel.app/allToy/${params.id}`
          ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoutes>
            <div className="text-6xl text-center mt-20">
              My Toys Page Is Coming
            </div>
          </PrivateRoutes>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
