import { Inter } from "next/font/google";
import ShadowIcon from "@/components/ShadowIcon";
import GradientText from "@/components/GradientText";
import GradientShopify from "@/components/GradientShopify";
import AnimatedAnchor from "@/components/AnimatedAnchor";
import AnimatedSlideAnchor from "@/components/AnimatedSlideAnchor";
import CustomSelector from "@/components/CustomSelector";

const inter = Inter({ subsets: ["latin"] });

const items = {
  ALL: "모든 타입",
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};
const selectItems = Object.entries(items).map((e) => ({
  key: e[0],
  label: e[1],
}));

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      {/* <ShadowIcon /> */}
      {/* <GradientText /> */}
      {/* <GradientShopify /> */}
      {/* <AnimatedAnchor /> */}
      {/* <AnimatedSlideAnchor /> */}
      <div className="w-32">
        <CustomSelector
          items={selectItems}
          onSelect={() => {}}
          initialItem={selectItems[0]}
        />
      </div>
    </main>
  );
}
