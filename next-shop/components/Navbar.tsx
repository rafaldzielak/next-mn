import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { fetchJson } from "../lib/api";
import { useUser } from "../hooks/useUser";

const Navbar: FC<PropsWithChildren> = () => {
  const user = useUser();

  const handleSignOut = () => fetchJson("/api/logout");
  // .then(() => setUser(undefined));

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
              <button onClick={handleSignOut}>Sign out</button>
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
