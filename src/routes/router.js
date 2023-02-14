import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyReview from "../Components/MyReview/MyReview";
import Register from "../Components/Register/Register";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://snapletics-server.vercel.app/servicebylimit"),
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () => fetch("https://snapletics-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://snapletics-server.vercel.app/services/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
