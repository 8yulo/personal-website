import Link from "next/link";
import { Lora, Mulish} from "next/font/google";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinksSection";
import siteMetadata from "@/app/data/siteMetadata";


const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <section className="bg-white">
      <div className="w-full bg-[#fafafa] py-[120px] px-3 text-center">
        <div className="mx-auto max-w-[728px] md:max-w-[940px] px-4 text-left animate-fade-in-up">
          <h1 className={`${lora.className} text-[#333] text-4xl md:text-[56px] mb-[20px]`}>
            Janelle Yulo
          </h1>
          <h2 className={`${lora.className} text-[#5e747a] text-left text-[20px] font-normal leading-[20px] normal-case mb-[20px]`}>
            Game developer and statistics student at UC Santa Barbara
          </h2>
          
      <div className="w-full text-left uppercase tracking-[1.5px] font-semibold mb-[36px]">
          <SocialLinks />
      </div>

              
            <a
              href="/about"
              className="font-mulish text-white font-weight-[700] uppercase button-secondary-hover tracking-[1px] bg-[linear-gradient(135deg,#91a7ad,#83bbbb)] rounded-[12px] h-[46px] px-[24px] py-[12px] text-[14px] font-bold leading-[22px] inline-flex items-center justify-center mr-[12px]"
            >
              About Me
            </a>

            <a
              href="#project-top"
              className="font-mulish text-[#788e94] font-weight-[700] uppercase button-secondary-hover tracking-[1px] bg-transparent border-2 border-[#91a7ad] rounded-[12px] h-[46px] px-[24px] py-[12px] text-[12px] font-bold leading-[22px] inline-flex items-center justify-center"
            >
              Browse Work ↓
            </a>
      </div>
    </div>
    </section>
  );
}
