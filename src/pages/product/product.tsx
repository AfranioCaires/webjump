import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import { useCategories } from "../../context/categoriesContext";
import { Product as ProductI } from "../../services/api/interfaces/product";
import { Category } from "../../services/api/interfaces/category";
import ProductCard from "../../components/productCard";
import Pagination from "../../components/ui/pagination";
import { usePaginatedData } from "../../hooks/usePaginatedData";
import Select from "../../components/ui/select";

const colorMap: { [key: string]: string } = {
  Preto: "black",
  Laranja: "orange",
  Amarela: "yellow",
  Rosa: "pink",
  Azul: "blue",
  Bege: "beige",
  Cinza: "gray",
};

function Product() {
  const { categories } = useCategories();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null); // Novo estado para tipo
  const [sortOption, setSortOption] = useState<string>("price");
  const { categoria } = useParams<{ categoria: string }>();

  const selectedCategory = categories.find(
    (category: Category) => category.path === categoria,
  );

  const currentCategoryId = useRef<number | null>(null);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const {
    data: paginatedData,
    loading: loadingProducts,
    error: productsError,
  } = usePaginatedData<ProductI>(
    `http://localhost:8888/api/V1/categories/${selectedCategory?.id}`,
    page,
    perPage,
  );

  useEffect(() => {
    if (selectedCategory && selectedCategory.id !== currentCategoryId.current) {
      currentCategoryId.current = selectedCategory.id;
      setPage(1); // Reset page to 1 when category changes
      setSelectedColor(null);
      setSelectedGender(null);
      setSelectedType(null); // Reset type filter when category changes
      setSortOption("price"); // Reset sort option when category changes
    }
  }, [selectedCategory]);

  const products = Array.isArray(paginatedData?.data) ? paginatedData.data : [];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const colorMatch = !selectedColor || product.color === selectedColor;
    const genderMatch = !selectedGender || product.gender === selectedGender;
    const typeMatch = !selectedType || product.type === selectedType; // Filtrar por tipo
    return colorMatch && genderMatch && typeMatch;
  });

  // Sort products based on selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const uniqueColors = Array.from(
    new Set(
      products
        .map((p) => p.color)
        .filter((color): color is string => color !== undefined),
    ),
  );

  const uniqueGenders = Array.from(
    new Set(
      products
        .map((p) => p.gender)
        .filter((gender): gender is string => gender !== undefined),
    ),
  );

  const uniqueTypes = Array.from(
    new Set(
      products
        .map((p) => p.type)
        .filter((type): type is string => type !== undefined),
    ),
  ); // Tipos únicos

  const hasColors = uniqueColors.length > 0;
  const hasGenders = uniqueGenders.length > 0;
  const hasTypes = uniqueTypes.length > 0; // Verificar se há tipos

  if (!selectedCategory) {
    return (
      <div className="col-span-full flex min-h-[70vh] items-center justify-center text-3xl font-semibold">
        <p>Categoria não encontrada.</p>
      </div>
    );
  }

  if (loadingProducts) {
    return (
      <div className="col-span-full flex min-h-[70vh] items-center justify-center text-3xl font-semibold">
        Carregando produtos...
      </div>
    );
  }

  if (productsError) {
    return (
      <div className="col-start-2 min-h-screen">
        Erro ao carregar produtos: {productsError}
      </div>
    );
  }

  return (
    <>
      <aside className="flex flex-col gap-5">
        <Breadcrumbs />

        <section className="border border-gray1 bg-white px-4 py-6">
          <h1 className="mb-4 text-2xl font-bold text-red2">
            {`Filtre por`.toUpperCase()}
          </h1>
          <h2 className="mb-3 text-lg font-bold text-blue1">
            {`Categorias`.toUpperCase()}
          </h2>
          <ol className="list-inside list-disc text-base text-gray5">
            {categories.map((category: Category) => (
              <li key={category.id}>
                <Link to={`/produtos/${category.path}`}>{category.name}</Link>
              </li>
            ))}
          </ol>

          {hasColors && (
            <>
              <h2 className="mb-3 mt-10 text-lg font-bold text-blue1">
                {`CORES`.toUpperCase()}
              </h2>
              <div className="flex flex-wrap gap-2">
                {uniqueColors.map((color) => (
                  <button
                    key={color}
                    className={`h-6 w-12 cursor-pointer ${
                      color === selectedColor ? "ring-2 ring-red1" : ""
                    }`}
                    style={{ backgroundColor: colorMap[color] || color }}
                    onClick={() =>
                      setSelectedColor(color === selectedColor ? null : color)
                    }
                  />
                ))}
              </div>
            </>
          )}

          {hasGenders && (
            <>
              <h2 className="mb-3 mt-10 text-lg font-bold text-blue1">
                {`GÊNERO`.toUpperCase()}
              </h2>
              <div className="flex flex-col gap-2">
                {uniqueGenders.map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedGender === gender}
                      onChange={() =>
                        setSelectedGender(
                          gender === selectedGender ? null : gender,
                        )
                      }
                      className="mr-2"
                    />
                    {gender}
                  </label>
                ))}
              </div>
            </>
          )}

          {hasTypes && (
            <>
              <h2 className="mb-3 mt-10 text-lg font-bold text-blue1">
                {`TIPO`.toUpperCase()}
              </h2>
              <ol className="list-inside list-disc text-base text-gray5">
                {uniqueTypes.map((type) => (
                  <li key={type}>
                    <button
                      className={`cursor-pointer ${
                        type === selectedType ? "font-bold" : ""
                      }`}
                      onClick={() =>
                        setSelectedType(type === selectedType ? null : type)
                      }
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ol>
            </>
          )}
        </section>
      </aside>

      <section>
        <h1 className="mb-2 mt-10 text-2xl text-red2">
          {selectedCategory.name}
        </h1>
        <hr className="h-2" />
        <div className="col-span-3 flex flex-col flex-nowrap items-center justify-between md:flex-row">
          <div className=""></div>
          <div className="flex flex-nowrap items-center gap-3">
            <p className="text-nowrap text-xs font-bold text-gray3">
              ORDENAR POR
            </p>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <Select.Option value="price">Preço</Select.Option>
              <Select.Option value="name">Nome</Select.Option>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-9 lg:grid-cols-4">
          {sortedProducts.map((product: ProductI) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-span-3 mx-auto w-full pt-9">
          <Pagination
            total={paginatedData?.items ?? 0}
            perPage={perPage}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </section>
    </>
  );
}

export default Product;
