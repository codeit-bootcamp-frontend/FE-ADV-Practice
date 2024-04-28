import { Inter } from "next/font/google";
import ShadowIcon from "@/components/ShadowIcon";
import GradientText from "@/components/GradientText";
import GradientShopify from "@/components/GradientShopify";
import AnimatedAnchor from "@/components/AnimatedAnchor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      {/* <ShadowIcon /> */}
      {/* <GradientText /> */}
      {/* <GradientShopify /> */}
      <AnimatedAnchor />
    </main>
  );
}
