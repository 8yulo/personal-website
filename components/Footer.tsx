import socialNavLinks from "@/app/data/socialNavLinks";
import Link from "./Link";
import siteMetadata from "@/app/data/siteMetadata";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] border-t border-[#ddd] pb-[29px]">
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
