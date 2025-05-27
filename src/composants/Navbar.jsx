import { Link } from "react-router";
import { MenuItems, NavLinks } from "../constants";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between bg-amber-700 max-md:justify-start max-md:gap-[42px] max-md:px-[42px] max-sm:justify-between max-sm:px-[24px]">
      <div className="block md:hidden">
        <img src="/icons/icon-hamburger.svg" alt="" />
      </div>
      <div>
        <Link to="/">
          <img src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>

      {/* MOBILE MENU */}

      <div className="absolute top-full left-0 hidden w-full justify-between max-md:flex max-md:flex-row max-md:items-center max-md:gap-[10px] max-md:px-[42px] max-md:py-[100px] max-sm:h-[85vh] max-sm:flex-col max-sm:gap-[68px] max-sm:px-[24px] max-sm:py-[72px]">
        {MenuItems.map((menu) => (
          <Menu key={menu.label} {...menu} />
        ))}
      </div>

      {/* DESKTOP NAV */}

      <ul className="flex items-center max-md:hidden">
        {NavLinks.map(({ label, path }) => (
          <Link key={label} to={path}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>

      <div className="max-md:flex max-md:flex-1 max-md:justify-end max-sm:flex-initial">
        <img src="/icons/icon-cart.svg" alt="icon-cart" />
      </div>
    </nav>
  );
};

export default Navbar;
