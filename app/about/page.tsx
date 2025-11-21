import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  return (
    <div className={`${lora.className} w-[600px] mb-[18px] leading-[32px]`}>
      <p className="mb-4">
        I'm a developer based in Santa Barbara, CA who's highly interested in
        people brought together by technology. Initially, I started out by
        teaching myself how to 3D model and create environments on the Roblox
        platform, but realized learning how to program is what tied my
        creations together. Since then, my creations have been played millions
        of times.
      </p>

      <p className="mb-4">
        Currently, I study <strong>statistics</strong> and{" "}
        <strong>data science</strong> at the University of California, Santa
        Barbara. As part of my interests in how people interact with tech and
        AI, I've been conducting research for UC Santa Barbara&apos;s{" "}
        <strong>Human-AI Experience Lab (HAX)</strong>, under the direction of
        Dr. Misha Sra.{" "}
        <strong>
          <a
            href="https://your-research-link-here"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Read more about our research here.
          </a>
        </strong>
      </p>

      <p className="mb-4">
        Outside of tech, I highly enjoy baking, weightlifting, going for runs,
        meeting new people, and exchanging ideas – if you do any of these
        things, let&apos;s connect :)
      </p>

      <p>
        Reach out ―{" "}
        <strong>
          <a href="mailto:connect@janelle.dev">connect@janelle.dev</a>
        </strong>
      </p>
    </div>
  );
}