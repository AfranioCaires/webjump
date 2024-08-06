import { Link } from "react-router-dom";
import { useCategories } from "../context/categoriesContext";

function AsideNav() {
  const { categories } = useCategories();

  return (
    <aside className="bg-gray1 px-4 py-6">
      <nav>
        <ol className="list-inside list-disc text-lg">
          <li>
            <Link to="/">Página inicial</Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/produtos/${category.path}`}>{category.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}

export default AsideNav;
