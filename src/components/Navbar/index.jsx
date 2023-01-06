import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "components";
import Button from "components/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle((prev) => !prev);
  const menuItems = [
    { content: "Home", to: "#home" },
    { content: "about", to: "#about" },
    { content: "support", to: "#support" },
    { content: "platforms", to: "#platforms" },
    { content: "pricing", to: "#pricing" },
  ];
  return (
    <nav className="fixed z-50 w-full bg-zinc-200 h-[80px] shadow-lg">
      <div className="px-16 flex justify-between items-center w-full h-full">
        <div className="text-3xl animate-wiggle font-bold sm:text-5xl">
          Brand.
        </div>
        <Menu menuItems={menuItems} />
        <div className="flex md:hidden" onClick={handleClick}>
          {!toggle ? (
            <MenuIcon className="w-5 cursor-pointer" />
          ) : (
            <XIcon className="w-5 cursor-pointer" />
          )}
        </div>
      </div>
      {toggle && <NavAbsMenu menuItems={menuItems} />}
    </nav>
  );
};
const Menu = ({ menuItems = [] }) => {
  return (
    <>
      <div className="hidden md:flex">
        <ul className="flex items-center ">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="gap-4 pr-2 hidden md:flex">
        <Button className="text-xl bg-transparent border-none text-black">
          Sign In
        </Button>
        <Button className="px-4 py-2 text-xl text-white bg-indigo-600 rounded">
          Sign Up
        </Button>
      </div>
    </>
  );
};

const NavAbsMenu = ({ menuItems = [] }) => {
  return (
    <div className="absolute w-full bg-zinc-200">
      <ul className="flex flex-col justify-center items-center divide-y divide-zinc-300 w-full">
        {menuItems.map((item, index) => (
          <li className="w-full text-center" key={index}>
            <Link to={item.to}>{item.content}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col my-2 gap-4 px-4">
        <Button className="text-xl bg-transparent border-none text-black">
          Sign In
        </Button>
        <Button className="px-4 py-2 text-xl text-white bg-indigo-600 rounded">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
