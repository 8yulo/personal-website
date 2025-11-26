import Link from "next/link";
import Image from "next/image";
import socialNavLinks from "@/app/data/socialNavLinks";

export default function SocialLinksSection() {
  return (
    <nav className="inline-block">
      {socialNavLinks.map((link) => (
      <div key={link.title} className="inline-block">
        <Link
          href={link.ref}
          className="inline-block mr-[12px] opacity-40 hover:opacity-80 transition-opacity duration-200">
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
    </nav>
  );
}
