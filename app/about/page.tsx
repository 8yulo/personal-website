import Link from "next/link";
import Image from "next/image";
import { Lora, Mulish } from "next/font/google";
import socialNavLinks from "@/app/data/socialNavLinks";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  return (
    <div className={`${lora.className} mx-auto max-w-[940px] px-8 md:px-16 lg:px-32 py-8 mb-[18px] leading-[40px] opacity-0 animate-fade-in`}>
      <p className="mb-6">
        I'm a developer based in Santa Barbara, CA who's highly interested in
        people being brought together by technology. Initially, I started out 
        by teaching myself how to 3D model and create environments on the Roblox
        platform, but realized learning how to program is what tied my creations 
        together. Since then, my creations have been played millions of times.
      </p>
      <p className="mb-6">
        Currently, I study <strong>statistics and data science</strong> at the 
        University of California, Santa Barbara. As part of my interests in how 
        people interact with tech and AI, I've been conducting research for UC 
        Santa Barbara&apos;s{" "} <strong>Human-AI Experience Lab (HAX)</strong>, 
        under the direction of Dr. Misha Sra. Read more about our research {" "}
        <strong>
          <a
            href="https://sites.cs.ucsb.edu/~sra/"
            className="transition-colors duration-200 hover:text-[#91a7ad]"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </strong>
      </p>
      <p className="mb-6">
        Outside of tech, I highly enjoy baking, weightlifting, going for runs,
        meeting new people, and exchanging ideas – if you do any of these
        things, let&apos;s connect :)
      </p>

      <p>
        Get in touch ― {" "}
        <strong>
          <a 
          href="mailto:contact@janelle.dev"
          className="transition-colors duration-200 hover:text-[#91a7ad] pb-36"
          >
            contact@janelle.dev</a>
        </strong>
      </p>
        <h2 className="font-mulish text-[18px] pt-8 leading-6 font-light tracking-[2.5px] uppercase text-[#a8a8a8] mb-3">
        socials
      </h2>
      <nav className="w-full text-left uppercase tracking-[1.5px] font-semibold">
          <div className="inline-block">
            {socialNavLinks.map((link) => (
              <div key={link.title} className="inline-block">
                <Link
                  href={link.ref}
                  className="inline-block pr-4 opacity-40 hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src={link.src}
                    alt={link.title}
                    width={25}
                    height={25}
                    className="inline-block"
                  />
                </Link>
              </div>
              ))}
          </div>
        </nav>
    </div>
  );
}