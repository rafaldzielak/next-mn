import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  const user = { name: "Alice" };
  return (
    <nav className='px-2 py01'>
      <ul className='flex gap-2'>
        <li className='text-lg font-extrabold'>
          <Link href='/'>
            <a>Next Shop</a>
          </Link>
        </li>
        <li role='separator' className='flex-1'></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button>Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href='/sign-in'>
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
