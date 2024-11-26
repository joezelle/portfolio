"use client";
import Link from "next/link";

import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className=" shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between   items-center px-6 py-5">
        <div className="text-2xl font-bold text-white">
          <Link href="/">JOEL ILETI</Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
