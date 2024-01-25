import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayouts from "../layouts/LoginLayouts";
import Main from "../layouts/MAin";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Caregory/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayouts />,
    children: [
      {
        path: "/",
        element: <Navigate to="category/0" />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
