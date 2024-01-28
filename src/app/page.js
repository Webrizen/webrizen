"use client";
import HeroImg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import AnimatedImage from "@/components/system/AnimatedImage";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'Websites Launched', value: '200+' },
  { id: 2, name: 'Projects Completed', value: '500+' },
  { id: 3, name: 'Satisfied Clients', value: '100+' },
];
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <motion.section
        className="min-h-screen w-full flex justify-center items-center relative"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f980ff] to-[#1100ff2d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] -z-50"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <motion.div
          className="container mx-auto grid grid-cols-2 h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full p-2 h-full flex justify-center flex-col gap-5"
            variants={textVariants}
          >
            <h1 className="text-6xl font-bold">Rise Online with Webrizen.</h1>
            <p className="text-base dark:text-slate-300 text-slate-900">Elevate your brand, captivate your audience. Webrizen — where innovation meets impact in the digital realm. Unleash the extraordinary online experience effortlessly.</p>
            <motion.div
              className="mt-2 flex justify-start items-center gap-2"
              variants={buttonVariants}
            >
              <Button className="w-min">Build My Website</Button>
              <Button className="w-min" variant="ghost">
                Our Products
              </Button>
            </motion.div>
          </motion.div>
          <AnimatedImage src={HeroImg} />
        </motion.div>
      </motion.section>
      <motion.div className="pb-12 sm:pb-24" ref={ref1}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-slate-950 dark:text-slate-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-200 sm:text-5xl">
                  {stat.value || 0}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
    </>
  );
}
