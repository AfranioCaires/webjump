import { CategoriesProvider } from "./categoriesContext";

function Providers({ children }: { children: React.ReactNode }) {
  return <CategoriesProvider>{children}</CategoriesProvider>;
}

export default Providers;
