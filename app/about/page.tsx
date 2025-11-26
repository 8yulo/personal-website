import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  return (
    <div className={`${lora.className} mx-auto max-w-[940px] px-8 md:px-16 lg:px-0 py-[32px] leading-[40px] opacity-0 animate-fade-in`}>
      {/* px-8 md:px-16 lg:px-32 */}
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
          href="mailto:connect@janelle.dev"
          className="transition-colors duration-200 hover:text-[#91a7ad]"
          >
            connect@janelle.dev</a>
        </strong>
      </p>
    </div>
  );
}