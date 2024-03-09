import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root/Root"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Category from "../Pages/Category/Category";
import Products from "../Pages/Products/Products";
import Details from "../Pages/Details/Details";
import Private from "../Components/shared/Private/Private";
import MyCart from "../Pages/MyCart/MyCart";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          {
            path: "/category/:categoryName",
            element: <Products />,
          }
        ]
      },
      {
        path: "/product/:categoryName/:id",
        element: <Details />,
      },
      {
        path: "/myCart",
        element: <Private><MyCart></MyCart></Private>,
      },
      {
        path: "/checkOut",
        element: <Private><CheckOut></CheckOut></Private>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

export default router;