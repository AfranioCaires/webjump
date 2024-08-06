import { Link, createBrowserRouter, useParams } from "react-router-dom";
import App from "../App.tsx";
import Error404 from "./error404/error404.tsx";
import Home from "./home/home.tsx";
import Contact from "./contact/contact.tsx";
import Product from "./product/product.tsx";
import { useCategories } from "../context/categoriesContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    handle: {
      crumb: () => <Link to="/">Página inicial</Link>,
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contact />,
        handle: {
          crumb: () => <Link to="/contato">Contato</Link>,
        },
      },
      {
        path: "/produtos/:categoria",
        element: <Product />,
        handle: {
          crumb: () => {
            const { categories } = useCategories();
            const urlParam = useParams();
            const categoria = categories.find(
              (category) => category.path === urlParam.categoria,
            )?.name;
            return (
              <Link to={`/produtos/${urlParam.categoria}`}>{categoria}</Link>
            );
          },
        },
      },
    ],
  },
]);

export default router;
