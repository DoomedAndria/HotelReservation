import {createBrowserRouter, Outlet} from "react-router-dom";
import {AboutUs, ContactUs, Gallery, Home, RoomDetails, Rooms} from "../Pages";
import Login from "../Pages/SIgnUp/Login";
import Register from "../Pages/SIgnUp/Register";


const router = createBrowserRouter([
  {
    path: "/",
    name: 'Home',
    element: <Home/>,
  },
  {
    path: "/rooms",
    name: "Rooms",
    element: <Outlet/>,
    children: [
      {
        path: "",
        element: <Rooms/>
      },
      {
        path: ":id",
        element: <RoomDetails/>
      }
    ]
  },
  {
    path: "/gallery",
    name: "Gallery",
    element: <Gallery/>,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs/>,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs/>,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login/>,
  },
  {
    path: "/register",
    name: "Register",
    element: <Register/>,
  }
]);
export default router;