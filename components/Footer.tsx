import socialNavLinks from "@/app/data/socialNavLinks";
import Link from "./Link";
import Image from "next/image";
import siteMetadata from "@/app/data/siteMetadata";
import SocialLinks from "./SocialLinksSection";


export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] tracking-[1.5px] text-center border-t border-[#ddd] py-[29px]">
      <SocialLinks />
      
       


      <div className="mx-auto max-w-3xl px-4">
        <div className="flex justify-center space-x-2 text-[#5d5d5d] pt-6 uppercase text-[10px] font-muli">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>

        <div className="mb-2 flex justify-center space-x-4 text-[#5d5d5d] uppercase text-[8px] font-muli">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Nextjs and Tailwind.
          </Link>
        </div>
      </div>
    </footer>
  );
}
