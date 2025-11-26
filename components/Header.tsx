"use client";

import siteMetadata from "@/app/data/siteMetadata";
import headerNavLinks from "@/app/data/headerNavLinks";
import Link from "./Link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  return (
    <header className="py-8">
      {/*md: px-8 md:px-16 lg:auto */}
      <div className="mx-auto max-w-[940px] px-8 md:px-16 lg:px-0 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/site_profile.png"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"/>
          </div>    
            {/*<h2 className="ml-6 text-[14px] ml:px-24  tracking-[1.5px] uppercase">
              </h2>*/} 
         </Link>
        </div>

        <nav className="flex items-center space-x-8 text-sm tracking-[1px]">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="uppercase transition-colors duration-200 hover:text-[#91a7ad]"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;