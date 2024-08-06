import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

interface NavbarProps {
  navItems: { path: string; name: string }[];
}

function MobileNav({ navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="p-2 text-black focus:outline-none"
        >
          <img src={menu} width={27} height={18} alt="" />
        </button>
      )}
      {isOpen && (
        <div className="z-100 fixed inset-0 flex flex-col justify-between bg-white">
          <nav>
            <ul className="flex flex-col py-2">
              <li className="flex justify-end px-4 py-2">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-black focus:outline-none"
                >
                  <img src={close} width={27} height={18} alt="" />
                </button>
              </li>
              {navItems.map((item, index) => (
                <li key={index} className="px-4 py-2 font-semibold">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-red1"
                        : "text-black hover:text-red1"
                    }
                  >
                    {item.name.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
