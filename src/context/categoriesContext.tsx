import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { client } from "../services/api/api";
import { Category } from "../services/api/interfaces/category";

interface CategoriesContextType {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined,
);

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client
      .get("api/V1/categories/list")
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching categories" + error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
