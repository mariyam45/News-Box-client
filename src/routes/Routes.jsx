import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayouts from "../layouts/LoginLayouts";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Caregory/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoutes from "./PrivateRoutes";

// const url = "/api";

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
      { path: "/terms", element: <Terms></Terms> },
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
          fetch(
            `https://news-box-server-2pqk.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://news-box-server-2pqk.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
