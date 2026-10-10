"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="flex flex-col">
      <Link
        href="/account/signin"
        className={`border-l-[3px] px-3 py-2 no-underline ${
          pathname === "/account/signin"
            ? "border-black font-semibold text-black"
            : "border-transparent text-red-600"
        }`}
      >
        Signin
      </Link>

      <Link
        href="/account/signup"
        className={`border-l-[3px] px-3 py-2 no-underline ${
          pathname === "/account/signup"
            ? "border-black font-semibold text-black"
            : "border-transparent text-red-600"
        }`}
      >
        Signup
      </Link>

      <Link
        href="/account/profile"
        className={`border-l-[3px] px-3 py-2 no-underline ${
          pathname === "/account/profile"
            ? "border-black font-semibold text-black"
            : "border-transparent text-red-600"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}