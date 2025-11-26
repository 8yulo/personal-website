import { Lora, Merriweather, Mulish} from "next/font/google";

export const lora = Lora({
    weight: '400',
    subsets: ["latin"],
    variable: "--font-lora",
});

export const merriweather = Merriweather({
    weight: '400',
    subsets: ["latin"],
}); 

export const mulish = Mulish({
    weight: ['600','700'],
    subsets: ["latin"],
});
