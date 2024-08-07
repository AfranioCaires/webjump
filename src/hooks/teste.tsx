import { useState } from "react";
import { usePaginatedData } from "./usePaginatedData";
import { Product } from "../services/api/interfaces/product";
import Pagination from "../components/ui/pagination";

const Teste = () => {
  const [page, setPage] = useState(1);
  const perPage = 3;
  const { data, loading, error } = usePaginatedData<Product>(
    "http://localhost:8888/api/V1/categories/3",
    page,
    perPage,
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <ul>
        {data?.data.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
      <Pagination
        total={data?.items || 0}
        perPage={perPage}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Teste;
