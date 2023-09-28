import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/layout";
import ListPage from "./pages/list";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const MateriRestRouter = () => {
  return <RouterProvider router={route} />;
};

export default MateriRestRouter;
