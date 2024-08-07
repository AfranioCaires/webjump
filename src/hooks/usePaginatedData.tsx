import { useState, useEffect } from "react";
import axios from "axios";

export interface PaginationData {
  page: number;
  perPage: number;
}

export interface PaginationResponse<T> {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

export function usePaginatedData<T>(
  url: string,
  page: number,
  perPage: number,
) {
  const [data, setData] = useState<PaginationResponse<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(url, {
        params: {
          _page: page,
          _limit: perPage,
        },
      })
      .then((response) => {
        const totalItems = parseInt(response.headers["x-total-count"], 10);
        const totalPages = Math.ceil(totalItems / perPage);
        const paginationData: PaginationResponse<T> = {
          first: 1,
          prev: page > 1 ? page - 1 : null,
          next: page < totalPages ? page + 1 : null,
          last: totalPages,
          pages: totalPages,
          items: totalItems,
          data: response.data,
        };
        setData(paginationData);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, page, perPage]);

  return { data, loading, error };
}
