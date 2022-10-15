import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { useUser } from "../hooks/user/useUser";
import { useSignOut } from "../hooks/user/useSignOut";

const Navbar: FC<PropsWithChildren> = () => {
  const user = useUser();

  const signOut = useSignOut();

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
            <li>
              <Link href='/cart'>
                <a>Cart</a>
              </Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign out</button>
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
