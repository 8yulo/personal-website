import socialNavLinks from "@/app/data/socialNavLinks";
import Link from "./Link";
import Image from "next/image";
import siteMetadata from "@/app/data/siteMetadata";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] border-t border-[#ddd] py-[29px]">
      
       <nav className="w-full text-center uppercase tracking-[1.5px] font-semibold">
          <div className="inline-block">
          
          {socialNavLinks.map((link) => (
            <div key={link.title} className="inline-block">
              <Link
                href={link.ref}
                className="inline-block mx-[12px] opacity-40 hover:opacity-80 transition-opacity duration-200">
                <Image
                  src={link.src}
                  alt={link.title}
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </Link>
            </div>
          ))} 

          </div>
        </nav>


      <div className="mx-auto max-w-3xl px-4">
        <div className="flex justify-center space-x-2 text-[#5d5d5d] tracking-[1.5px] pt-6 uppercase text-[10px] font-muli">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>

        <div className="mb-2 flex justify-center space-x-4 text-[#5d5d5d] tracking-[1.5px] uppercase text-[8px] font-muli">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Nextjs and Tailwind.
          </Link>
        </div>
      </div>
    </footer>
  );
}
