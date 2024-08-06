import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import { useCategories } from "../../context/categoriesContext";
import Error404 from "../error404/error404";

function Product() {
  const { categories } = useCategories();
  const urlParam = useParams();
  const categoria = categories.find(
    (category) => category.path === urlParam.categoria,
  )?.name;

  if (!categoria) {
    return <Error404 />;
  }

  return (
    <>
      <aside className="flex flex-col gap-4 px-4 py-6">
        <Breadcrumbs />
        <section className="border bg-white">
          <h1></h1>
        </section>
      </aside>
      <section>
        <h1></h1>
      </section>
    </>
  );
}

export default Product;
