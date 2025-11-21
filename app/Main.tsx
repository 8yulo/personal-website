import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={`${lora.className} w-[600px] mb-[18px] leading-[32px]`}>
      <p className="mb-4">
       Coming soon!
      </p>
    </div>
  );
}
