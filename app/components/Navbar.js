import React, { use } from "react";
import Link from "next/link";
import { UserButton, auth, useAuth } from "@clerk/nextjs";

const Navbar = async () => {
  console.log(auth())
  const { userId } =  auth();
  console.log(userId);
  const isAuth = !!userId;

  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <div className="flex gap-10">
          {!isAuth ? (
            <>
              <Link href="/sign-in">
                <li>Login</li>
              </Link>
              <Link href="/sign-up">
                <li>Registro</li>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Perfil</li>
              </Link>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
