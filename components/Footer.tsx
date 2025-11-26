import socialNavLinks from "@/app/data/socialNavLinks";
import Link from "./Link";
import Image from "next/image";
import siteMetadata from "@/app/data/siteMetadata";
import SocialLinks from "./SocialLinksSection";


export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] tracking-[1.5px] text-center py-[24px]">
    {/*border-t border-[#ddd]*/}
      <div className="mx-auto max-w-3xl pb-[20px]">
        <SocialLinks />
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center space-x-2 text-[#5d5d5d] uppercase text-[10px] font-muli">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="flex justify-center text-[#5d5d5d] uppercase text-[8px] font-muli">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Nextjs and Tailwind.
          </Link>
        </div>
      </div>
    </footer>
  );
}
