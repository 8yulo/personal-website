"use client";

import siteMetadata from "@/app/data/siteMetadata";
import headerNavLinks from "@/app/data/headerNavLinks";
import Link from "./Link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {

    return (
    <header className="flex items-center justify-between py-8 px-4 sm:px-6 lg:px-0">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/images/site_profile.png"
            alt="Profile"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      </div>
      <nav className="flex items-center space-x-6 text-sm tracking-[1px]">
          {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="uppercase transition-colors duration-200 ease-in-out hover:text-[#91a7ad]"
          >
            {link.title}
          </Link>
          ))}
      </nav>
    </header>
  );
}

export default Header;