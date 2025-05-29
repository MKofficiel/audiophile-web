import React, { useState } from "react";
import { Link } from "react-router";
import { MenuItems, NavLinks } from "../constants";
import MenuCard from "../composants/MenuCard";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-background flex items-center justify-center">
      <div className="relative container flex h-[90px] items-center justify-between max-md:justify-start max-md:gap-[42px] max-sm:justify-between">
        <div>
          <Link to="/">
            <img src="/icons/logo.svg" alt="logo" height={25} width={143} />
          </Link>
        </div>

        {/* HAMBURGER LOGO */}
        <button
          className="-order-1 hidden cursor-pointer max-md:block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src="/icons/icon-hamburger.svg" alt="" />
        </button>

        {/* MOBILE MENU  */}

        {isOpen && (
          <nav className="absolute top-full right-0 left-0 hidden w-full rounded-br-[7px] rounded-bl-[7px] bg-white pb-10 shadow-sm max-md:block max-md:h-[33.333vh] max-sm:h-[75vh]">
            {/* 
LOGIQUE */}

            <div className="max-sm:mp-[54px] mt-10 grid h-full w-full grid-cols-3 items-center justify-items-center gap-x-[10px] max-md:px-[39px] max-md:py-[56px] max-sm:grid-cols-1 max-sm:justify-between max-sm:gap-y-[64px] max-sm:px-[24px] max-sm:py-[32px]">
              {MenuItems.map((item) => (
                <MenuCard key={item.label} {...item} />
              ))}
            </div>
          </nav>
        )}
        {/* {VOIR SICEST BON} */}
        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex gap-[34px]">
            {NavLinks.map(({ label, path }) => (
              <Link key={label} to={path}>
                <li className="text-[13px] font-bold text-white uppercase">
                  {label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex max-md:flex-1 max-md:justify-end max-sm:flex-initial max-sm:justify-start">
          <img src="/icons/icon-cart.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
