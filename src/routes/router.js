import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyReview from "../Components/MyReview/MyReview";
import Register from "../Components/Register/Register";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/servicebylimit"),
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
        path: "myreview",
        element: <MyReview></MyReview>,
      },
      {
        path: "addservice",
        element: <AddService></AddService>,
      },
    ],
  },
]);
