import Image from "next/image";
import HeroImg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import AnimatedImage from "@/components/system/AnimatedImage";

export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-2 h-full">
          <div className="w-full p-2 h-full flex justify-center flex-col gap-5">
            <h1 className="text-6xl font-bold">Rise Online with Webrizen.</h1>
            <p className="text-base dark:text-slate-300 text-slate-900">Elevate your brand, captivate your audience. Webrizen — where innovation meets impact in the digital realm. Unleash the extraordinary online experience effortlessly.</p>
            <div className="mt-2 flex justify-start items-center gap-2">
            <Button className="w-min">Build My Website</Button>
            <Button className="w-min" variant="ghost">Our Products</Button>
            </div>
          </div>
          <AnimatedImage src={HeroImg} />
        </div>
      </section>
    </>
  );
}
