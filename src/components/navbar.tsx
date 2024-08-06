import { NavLink } from "react-router-dom";

interface NavbarProps {
  navItems: { path: string; name: string }[];
}

const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <nav className="hidden bg-red1 p-4 md:block">
      <div className="container mx-auto">
        <ul className="flex flex-wrap items-center justify-between font-extrabold leading-5 text-white lg:justify-start lg:gap-24">
          {navItems.map((item) => (
            <li
              className="decoration-2 underline-offset-2 hover:underline hover:decoration-white/20"
              key={crypto.randomUUID()}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "underline decoration-white/50" : ""
                }
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
