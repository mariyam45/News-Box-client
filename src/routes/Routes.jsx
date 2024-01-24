import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/MAin";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Caregory/Category";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:id",
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
