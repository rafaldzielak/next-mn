import Link from "next/link";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { fetchJson } from "../lib/api";
import { User } from "../pages/api/user";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchJson("/api/user")
      .then(setUser)
      .catch(() => {});
  }, []);

  const handleSignOut = () => fetchJson("/api/logout").then(() => setUser(undefined));

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
