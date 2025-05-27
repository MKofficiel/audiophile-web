import { Link } from "react-router";
import { MenuItems, NavLinks } from "../constants";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between bg-amber-700 max-md:justify-start max-md:gap-[42px] max-sm:justify-between max-sm:px-[24px]">
      <div className="block md:hidden">
        <img src="/icons/icon-hamburger.svg" alt="" />
      </div>
      <div>
        <Link to="/">
          <img src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>

      {/* MOBILE MENU */}

      <div className="absolute top-full left-0 hidden w-full items-center justify-between bg-blue-500 max-md:flex max-md:flex-row max-md:gap-[10px] max-md:px-[40px] max-md:py-[56px] max-sm:flex-col max-sm:gap-[23px] max-sm:px-[24px] max-sm:py-[32px]">
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
        <img src="/icons/icon-cart.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
