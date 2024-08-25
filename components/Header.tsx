import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";
import { FaRegHeart } from "react-icons/fa6";

function Header() {
  return (
    <header className="fixed w-full z-40 top-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/0 via-black/40 dark:from-gray-200/0 to-black dark:via-gray-900/25 dark:to-gray-900">
      <Link className="mr-10" href="/">
        <Image
          src="/logo.svg"
          alt="Arcadia Logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain invert dark:invert w-18 lg:w-24 xl:w-28"
        />
      </Link>

      <div className="flex  items-center space-x-2">
        <Link href={"/fav"}>
          <FaRegHeart className="w-6 h-6 mr-2 text-white cursor-pointer" />
        </Link>
        <GenreDropDown />
        <SearchInput />
        {/* <ThemeToggler /> */}
      </div>
    </header>
  );
}

export default Header;
