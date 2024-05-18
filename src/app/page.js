import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroImg from "@/assets/images/hero-3.png";
import ProfileImage from "@/assets/images/sidebiew.webp";
import BeOne from "@/assets/images/beone.webp";
import Bemaccanada from "@/assets/images/bimaccanada.webp";
import brighttranslations from "@/assets/images/brighttranslations.webp";
import codecashflow from "@/assets/images/codecashflow.webp";
import emma from "@/assets/images/emma.webp";
import healthcarebiodiversity from "@/assets/images/healthcarebiodiversity.webp";
import mycasaforte from "@/assets/images/mycasaforte.webp";
import WebDev from "@/assets/images/web-dev.png";
import WebDesign from "@/assets/images/web-design.png";
import WebEcommerce from "@/assets/images/web-ecommerce.png";
import WebSeo from "@/assets/images/web-seo.png";
import MobileDev from "@/assets/images/mobile.png";
import Marketing from "@/assets/images/marketing.png";
import Slider from "@/components/system/Slider";

const metrics = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
    stat: "4.7 Stars",
    title: "43 Reviews",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    stat: "24min",
    title: "Avg. response rate",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
    stat: "+ 1k",
    title: "Clients",
  },
];

const services = [
  {
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand, like strategic opening moves on the digital chessboard.",
    imageUrl: WebDesign,
  },
  {
    title: "Web Development",
    description:
      "Building robust and scalable web applications with cutting-edge technologies, akin to carefully planning mid-game strategies.",
    imageUrl: WebDev,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Creating seamless online shopping experiences that drive conversions, much like executing tactical maneuvers in the heat of battle.",
    imageUrl: WebEcommerce,
  },
  {
    title: "SEO Optimization",
    description:
      "Strategically positioning your website to dominate search engine results, playing the long game with calculated precision.",
    imageUrl: WebSeo,
  },
  {
    title: "Mobile App Development",
    description:
      "Crafting mobile applications that move fluidly, much like a skilled player navigating the board with grace.",
    imageUrl: MobileDev,
  },
  {
    title: "Digital Marketing",
    description:
      "Executing targeted campaigns that capture audience attention like a masterful checkmate, ensuring your brand emerges victorious.",
    imageUrl: Marketing,
  },
];

const stats = [
  { id: 1, name: "Projects completed", value: "1500+" },
  { id: 2, name: "Happy clients", value: "500+" },
  { id: 3, name: "Years of experience", value: "10+" },
];

const pricing = [
  {
    title: "Rook's Reign",
    price: "450",
    description:
      "The Rook's Reign plan lays the groundwork for your digital empire. With a customized website design and essential features, this plan is perfect for startups and small businesses looking to establish their online presence.",
    features: [
      "Customized website design",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact form integration",
      "Responsive design",
      "1 month of post-launch support",
    ],
  },
  {
    title: "Knight's Valor",
    price: "750",
    description:
      "Embrace the valor of the Knight's Valor plan, where your digital journey gains momentum. With advanced features including blog integration and social media integration, this plan is ideal for businesses seeking to expand their online reach.",
    features: [
      "Customized website design",
      "Up to 10 pages",
      "Advanced SEO setup",
      "Contact form integration",
      "Blog integration",
      "Social media integration",
      "3 months of post-launch support",
    ],
    mostPopular: true,
  },
  {
    title: "Grandmaster's Legacy",
    price: "1200",
    description:
      "Ascend to the pinnacle of digital excellence with the Grandmaster's Legacy plan. Offering comprehensive features such as e-commerce functionality and advanced analytics setup, this plan empowers businesses to dominate the digital arena.",
    features: [
      "Customized website design",
      "Unlimited pages",
      "Comprehensive SEO setup",
      "Contact form integration",
      "E-commerce functionality",
      "Advanced analytics setup",
      "6 months of post-launch support",
    ],
  },
];

const techStack = [
  { name: "React", imageUrl: "/images/react.webp" },
  { name: "Node.js", imageUrl: "/images/node.webp" },
  { name: "Tailwind CSS", imageUrl: "/images/tailwind.webp" },
  { name: "Next.js", imageUrl: "/images/nextjs.svg" },
  { name: "Sanity", imageUrl: "/images/sanity.svg" },
  { name: "vercel", imageUrl: "/images/vercel.webp" },
  { name: "AWS", imageUrl: "/images/aws.webp" },
  { name: "Framer Motion", imageUrl: "/images/framer.webp" },
];

const faqs = [
  {
    question: "What is the turnaround time?",
    answer:
      "The turnaround time depends on the scope and complexity of the project. We provide estimated timelines during the initial consultation phase.",
  },
  {
    question: "How do you communicate?",
    answer:
      "We primarily communicate via email, but we are also available for scheduled calls or video conferences as needed.",
  },
  {
    question: "What is the process of working with you?",
    answer:
      "Our process involves initial consultation, project planning, design and development, client feedback, and final delivery. We keep our clients informed at every stage.",
  },
  {
    question: "What happens if I don't like the design?",
    answer:
      "We offer revisions based on your feedback to ensure the final design meets your expectations. Your satisfaction is our priority.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "Refunds are considered on a case-by-case basis. Please refer to our Terms of Service for more information.",
  },
  {
    question: "What is your Tech Stack?",
    answer:
      "Our tech stack includes modern technologies such as React, Node.js, Express, MongoDB, and more. We constantly update our tools to stay at the forefront of technology.",
  },
  {
    question: "Why no calls or meetings?",
    answer:
      "We believe in efficient communication that respects our clients' time. We use email as our primary communication channel to ensure clarity and documentation.",
  },
  {
    question:
      "What happens if I have to make some changes in the website after it is delivered?",
    answer:
      "We provide post-launch support to address any issues or changes you may have. Simply reach out to us, and we'll assist you promptly.",
  },
  {
    question:
      "Do you offer maintenance services after the website is launched?",
    answer:
      "Yes, we offer maintenance services to ensure your website remains up-to-date and secure. Our maintenance plans include regular updates, backups, and technical support.",
  },
  {
    question: "Can you help with website hosting and domain registration?",
    answer:
      "Absolutely! We can assist you with website hosting and domain registration. We work with reliable hosting providers and can recommend the best options based on your needs.",
  },
  {
    question: "Do you provide content creation services?",
    answer:
      "While we primarily focus on web development and design, we can recommend content creation specialists if needed. We can also provide guidance and best practices for content creation.",
  },
  {
    question: "Is SEO included in your services?",
    answer:
      "Yes, we offer SEO services to help improve your website's visibility on search engines. Our SEO strategies include keyword research, on-page optimization, and link building.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. We strive to make the payment process as convenient as possible for our clients.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate bg-[url('/bg.svg')] bg-center bg-cover bg-no-repeat px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto md:container grid md:grid-cols-2 grid-cols-1 gap-2 md:my-0 my-12">
          <div className="md:text-left text-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-slate-300 text-slate-600 border dark:border-[rgba(225,225,225,0.1)] border-[rgba(0,0,0,0.1)] backdrop-blur-3xl mb-8">
              where every move is strategic, every design a masterstroke.{" "}
              <Link
                href="/blogs"
                className="font-semibold dark:text-indigo-300 text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                Digital Dominance with Webrizen{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <h1 className="text-4xl font-bold bg-[url('/images/text-bg.gif')] bg-center bg-cover text-transparent bg-clip-text sm:text-6xl">
              Make a move that creates a game.
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-slate-600">
              We engineer digital strategies akin to a grandmaster's meticulous
              planning on a chessboard. Our team, adept at every move, crafts
              solutions that anticipate your opponent's every move.
            </p>
            <div className="max-w-[90%] mr-auto grid sm:grid-cols-3 divide-y divide-gray-100 dark:divide-gray-900 sm:divide-y-0 sm:gap-2 p-4 py-0 sm:py-4 text-left rounded-lg bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 shadow-sm shadow-gray-200/50 dark:shadow-transparent mt-8">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex items-center gap-x-4 py-4 sm:py-0"
                >
                  <span className="w-10 h-10 text-white bg-gradient-to-br from-indigo-700 to-slate-950 rounded-md flex items-center justify-center">
                    {metric.icon}
                  </span>
                  <div className="flex-1 flex flex-col text-lg">
                    <h4 className=" text-gray-700 dark:text-gray-300 font-semibold">
                      {metric.stat}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {metric.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex md:justify-start whitespace-nowrap justify-center items-center flex-wrap mt-8 md:mb-0 mb-8 gap-4">
              <Link
                href="/request-developers"
                className="flex items-center h-12 px-6 bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white rounded-full  hover:backdrop-blur-lg"
              >
                Hire us Now
              </Link>
              <Link
                href="/about"
                className="flex items-center h-12 px-6 rounded-full bg-slate-100 dark:bg-slate-900 text-purple-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={HeroImg}
              placeholder="blur"
              width={500}
              height={500}
              alt="Hero image"
              className="w-auto h-[500px] filter dark:invert object-cover"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto flex flex-row gap-10 items-center flex-wrap justify-center relative z-20">
          {techStack.map((tech, index) => (
            <Image
              key={index}
              width={500}
              height={500}
              src={tech.imageUrl}
              alt={tech.name}
              className="w-[100px] md:object-center object-contain h-auto filter dark:invert aspect-video lg:object-contain"
            />
          ))}
        </div>
      </section>
      <section className="py-16" id="services">
        <div className="container mx-auto">
          <div className="relative w-full">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Services
            </h2>
            <img
              src="/arrow.svg"
              alt="arrow"
              className="absolute w-auto h-[420px] right-[360px] -bottom-48 mx-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                className="bg-white card dark:bg-gray-800 dark:hover:bg-[url('/hover.svg')] bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden relative border dark:border-rgba(225,225,225,0.1) border-[rgba(0,0,0,0.1)]"
                key={index}
              >
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -bottom-1/2"></div>
                <Image
                  className="w-full h-auto object-contain border-b-4 border-[rgba(0,0,0,0.1)] dark:border-[rgba(225,225,225,0.1)]"
                  src={service.imageUrl || "https://placehold.co/600x400"}
                  alt={service.title}
                  width={600}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 dark:text-slate-300 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-slate-100 text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
          <div className="flex md:flex-1">
            <Image
              src="/images/hero-2.png"
              alt="working on housing"
              width={1300}
              height={900}
              className="w-full md:h-full object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-[54%] space-y-12 text-gray-700 dark:text-gray-300">
            <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
              Cultivating Digital Kings: Our Journey in Crafting Strategic
              Triumphs
            </h1>
            <p>
              At Webrizen, we are not mere developers and designers; we are
              strategic architects in the digital realm, orchestrating moves
              that lead to checkmate for our clients. Just as chess masters plan
              several steps ahead, we anticipate the digital landscape, crafting
              solutions that position our clients for victory. With each
              project, we execute with the precision of a grandmaster, turning
              challenges into opportunities and complexity into simplicity. Your
              journey with us is not just about building a website or an
              application; it's about crafting a winning strategy that ensures
              your brand emerges triumphant in the game of digital competition.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                  Our mission
                </h2>
                <p>
                  To empower businesses with strategic digital solutions,
                  leveraging our expertise to navigate the complexities of the
                  online world and secure their position as leaders in their
                  industries.
                </p>
              </div>
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                  Our vision
                </h2>
                <p>
                  To be the catalyst behind our clients' digital triumphs,
                  pioneering innovative strategies that redefine success in the
                  digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:px-0 px-3">
        <h2 className="text-center md:text-5xl text-3xl md:mb-20 mb-10 font-bold md:leading-8 dark:text-slate-100 text-gray-900">
          Trusted By People For Skills.
        </h2>
        <Slider />
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl/tight sm:text-5xl/tight font-bold text-gray-900 dark:text-white">
              Take a look at our amazing works
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Check out some of our recent projects showcasing our expertise in
              web development and design.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
              <img
                src="/images/spinflame-project-img.png"
                alt="SpinFlame Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 md:backdrop-blur-0 backdrop-blur-md bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                <h1 className="font-semibold text-white text-2xl">SpinFlame</h1>
                <p className="text-gray-300 line-clamp-2">
                  SpinFlame is a web application built for content creators to
                  host challenges, giveaways, and interactive events using spin
                  wheel games.
                </p>
                <div className="w-max">
                  <a
                    href="https://spinflame-user-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800"
                  >
                    View project
                    <span className="duration-300 ease-linear group-hover:pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
              <img
                src="/images/locknote-project-img.png"
                alt="Locknote Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute md:backdrop-blur-0 backdrop-blur-md inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                <h1 className="font-semibold text-white text-2xl">Locknote</h1>
                <p className="text-gray-300 line-clamp-2">
                  Locknote is a secure and easy way to share self-destructing
                  notes using Next.js and Firebase.
                </p>
                <div className="w-max">
                  <a
                    href="https://locknotes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800"
                  >
                    View project
                    <span className="duration-300 ease-linear group-hover:pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 dark:text-slate-100 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto container mt-20 grid md:grid-cols-7 grid-cols-2 md:gap-10 gap-10 filter dark:grayscale">
            <Image
              className="max-h-12 w-full object-contain"
              src={BeOne}
              alt="Transistor"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={Bemaccanada}
              alt="Reform"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={brighttranslations}
              alt="Tuple"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={emma}
              alt="SavvyCal"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={healthcarebiodiversity}
              alt="Statamic"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={codecashflow}
              alt="Statamic"
              width={158}
              placeholder="blur"
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain"
              src={mycasaforte}
              alt="Statamic"
              width={158}
              placeholder="blur"
              height={48}
            />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[url('/bg-steps.svg')] bg-center bg-cover bg-no-repeat">
        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      1
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Strategy Formation
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    Just as a chess master carefully analyzes the board before
                    making a move, we begin by understanding your business
                    goals, target audience, and competitive landscape. Through
                    collaborative sessions, we formulate a strategic plan that
                    serves as the foundation for all our subsequent actions.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      2
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Strategic Implementation
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    With the strategy in place, we move forward with precise
                    execution. Our team of digital artisans employs cutting-edge
                    technologies and innovative design principles to bring your
                    vision to life. Each move is meticulously calculated,
                    ensuring that every element aligns with your overarching
                    strategy.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      3
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Continuous Optimization
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    In the dynamic digital landscape, adaptation is key to
                    staying ahead of the competition. We continuously monitor
                    performance metrics, gather user feedback, and analyze
                    market trends. Like a chess player adjusting their strategy
                    mid-game, we make iterative improvements to optimize your
                    digital presence and maintain your competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col  space-y-12">
            <div className="flex gap-10 flex-col items-center">
              <div className="mx-auto max-w-3xl text-center space-y-8">
                <span className="border border-gray-200 dark:border-gray-800 px-3 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                  Pricing
                </span>
                <h1 className="text-3xl md:text-4xl xl:text-5xl text-gray-900 dark:text-white font-bold">
                  Affordable Pricing Plans
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Unlock the power of our strategic digital solutions with our
                flexible and transparent pricing plans. Choose the perfect plan
                to suit your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-3">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-5 sm:p-6 md:p-8 xl:p-10 border border-gray-300 dark:border-gray-800/80 md:hauto flex flex-col rounded-3xl relative"
                >
                  {plan.mostPopular && (
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-500 dark:bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl bg-[rgba(0,0,0,0.1)] rounded-full px-4 py-2 absolute -top-5 left-5">
                      Most Popular
                    </span>
                  )}
                  <span className="font-semibold text-2xl text-gray-800 dark:text-gray-200">
                    {plan.title}
                  </span>
                  <div className="mt-2 text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
                    ${plan.price}
                  </div>
                  <p className="mt-5 sm:mt-6 text-gray-700 dark:text-gray-300">
                    {plan.description}
                  </p>
                  <ul className="flex flex-col space-y-3 mt-5 sm:mt6 text-gray-600 dark:text-gray-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-x-3">
                        <span className="text-blue-600 dark:text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 sm:mt-6">
                    <button className="bg-gray-800 hover:bg-opacity-90 text-white transition-colors ease-leaner h-12 rounded-full px-6 w-full flex items-center gap-x-3 justify-center">
                      Get started{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              PageSpeed Insights by Google
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-400">
              Check out our website's performance metrics according to PageSpeed
              Insights.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative group">
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 text-white text-4xl font-bold">
                100
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                Performance
              </p>
            </div>
            <div className="relative group">
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-green-500 dark:bg-green-600 text-white text-4xl font-bold">
                97
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                Accessibility
              </p>
            </div>
            <div className="relative group">
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-yellow-500 dark:bg-yellow-600 text-white text-4xl font-bold">
                94
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                Best Practices
              </p>
            </div>
            <div className="relative group">
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-purple-500 dark:bg-purple-600 text-white text-4xl font-bold">
                95
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                SEO
              </p>
            </div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  First Contentful Paint
                </h3>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-600">
                  0.3 s
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Largest Contentful Paint
                </h3>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-600">
                  0.5 s
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Total Blocking Time
                </h3>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-600">
                  0 ms
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cumulative Layout Shift
                </h3>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-600">
                  0
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Speed Index
                </h3>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-600">
                  0.4 s
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  System
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Emulated Desktop with Lighthouse 12.0.0, Single page session,
                  Initial page load, Custom throttling, Using HeadlessChromium
                  124.0.6367.118 with lr
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10" id="faqs">
        <div className="container mx-auto relative">
          <div className="absolute right-0 top-0 left-0 mx-auto h-full w-full flex justify-center">
            <div className="w-36 h-36 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-indigo-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div>
          <div className="flex flex-col  space-y-16 px-0 md:px-20 py-8">
            <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
              <span className="rounded-lg px-2.5 py-1 text-lg w-max mx-auto font-semibold tracking-wide  bg-gradient-to-r from-cyan-400 to-green-500 inline-block text-transparent bg-clip-text">
                Let's answer some questions
              </span>
              <h1 className="text-5xl font-semibold text-blue-950 dark:text-white md:text-7xl leading-tight">
                FAQs
              </h1>
            </div>
            <div className="w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full grid md:grid-cols-2 gap-4 grid-cols-1"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="md:text-xl">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
