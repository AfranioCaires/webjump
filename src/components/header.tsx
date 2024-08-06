import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import MobileNav from "./navbarMobile";
import Navbar from "./navbar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import cart from "../assets/cart.svg";
import { useCategories } from "../context/categoriesContext";

function Header() {
  const { categories } = useCategories();

  const initialRoute = { path: "/", name: "Página inicial" };
  const finalRoute = { path: "/contato", name: "Contato" };

  const navItems = [
    initialRoute,
    ...categories.map((category) => ({
      path: `/produtos/${category.path}`,
      name: category.name,
    })),
    finalRoute,
  ];

  return (
    <>
      <header>
        <div className="bg-black1 text-sm">
          <div className="container mx-auto flex w-4/5 items-center py-3 text-white sm:justify-center md:justify-end">
            <Link to="/" className="font-bold underline hover:text-white/90">
              Acesse sua Conta
            </Link>
            <span>&nbsp;ou&nbsp;</span>
            <Link to="/" className="font-bold underline hover:text-white/90">
              Cadastre-se
            </Link>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="flex flex-wrap items-center justify-between">
            <MobileNav navItems={navItems} />
            <img src={logo} className="h-14 md:h-16" alt="WEBJUMP Logo" />
            <img
              src={cart}
              className="box-content p-2 md:hidden"
              width={27}
              height={18}
            />
            <div className="ml-auto hidden items-stretch md:flex">
              <Input className="md:w-72 lg:w-96" />
              <Button>BUSCAR</Button>
            </div>
          </div>
        </div>
        <Navbar navItems={navItems} />
      </header>
    </>
  );
}

export default Header;
