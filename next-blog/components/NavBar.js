import Link from "next/link";
import React from "react";

const NavBar = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
