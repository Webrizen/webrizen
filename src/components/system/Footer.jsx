import React from "react";
import Link from "next/link";
import Image from "next/image";
import Webrizen from "@/assets/Webrizen.png";
import { Instagram } from "lucide-react";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-indigo-600 dark:hover:text-indigo-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Services",
    items: [
      {
        id: 1,
        text: "Web Design",
        link: "/#services",
      },
      {
        id: 2,
        text: "Web Development",
        link: "/#services",
      },
      {
        id: 3,
        text: "Mobile App Development",
        link: "/#services",
      },
      {
        id: 4,
        text: "UI/UX Design",
        link: "/#services",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    items: [
      {
        id: 5,
        text: "SEO Optimization",
        link: "/#services",
      },
      {
        id: 6,
        text: "Graphic Design",
        link: "/#services",
      },
      {
        id: 7,
        text: "Content Writing",
        link: "/#services",
      },
      {
        id: 8,
        text: "E-commerce Solutions",
        link: "/#services",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      {
        id: 9,
        text: "About Us",
        link: "/about",
      },
      {
        id: 10,
        text: "Careers",
        link: "/careers",
      },
      {
        id: 11,
        text: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    items: [
      {
        id: 11,
        text: "Blog",
        link: "/blogs",
      },
      {
        id: 12,
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: 13,
        text: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        id: 14,
        text: "FAQs",
        link: "#faqs",
      },
      {
        id: 15,
        text: "Free Online Tools",
        link: "/free-online-tools",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-indigo-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-indigo-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-4xl relative space-y-8">
              <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-indigo-950 dark:text-white">
                Accelerate Your Digital Presence with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-indigo-400 via-30% to-blue-600">
                  Our Expert Services
                </span>
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                Elevate your online presence and engage your audience with our
                strategic digital marketing solutions.
              </p>
              <div className="flex md:justify-center whitespace-nowrap justify-center items-center flex-wrap mt-8 md:mb-0 mb-8 gap-4">
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
          </div>
        </div>
      </section>
      <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5  py-20 flex flex-col lg:flex-row gap-14">
          <div className="space-y-6 lg:w-96">
            <Link
              href="/"
              className="h-8 w-min flex gap-2 justify-start items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
            >
              <Image
                src={Webrizen}
                placeholder="blur"
                alt="Webrizen Logo"
                width={500}
                height={500}
                className="h-full w-auto"
              />
              <span>Webrizen</span>
            </Link>
            <p className="max-w-lg">
              Webrizen, a leading web development agency in Falakata, West
              Bengal, India. Crafting stunning websites for global clients.
              Expertise in responsive design, e-commerce, and custom solutions.
            </p>
            <div className="flex w-full gap-5">
              <a href="https://www.instagram.com/webrizen" aria-label="social link" rel="noreferer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="social link" rel="noreferer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a href="#" aria-label="social link" rel="noreferer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="https://github.com/Webrizen"
                aria-label="social link"
                rel="noreferer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
          <nav className="lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerBlocks.map((footerBlock) => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))}
          </nav>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-5">
          <div className="py-3 border-t border-t-gray-100 dark:border-t-gray-900 flex flex-col md:flex-row md:justify-between gap-6 md:items-center">
            <div className="max-w-md text-gray-700 dark:text-gray-300 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Join our news-letter
              </h2>
              <p>
                We provide latest news, tools and many more cool stuff weekly
                via our newsletter, make sure to Subscribe. It's free!
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <form
                action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                method="POST"
                className="w-full flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://webrizen.vercal.app/thanks"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="Newslatter Subscriber - New Request ✨"
                />
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="px-5 py-2.5 rounded-md outline-none flex-1 bg-gray-200 dark:bg-gray-800"
                />
                <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white hover:backdrop-blur-lg flex items-center justify-center rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center py-3 rounded-md">
            <p> © {new Date().getFullYear()} Webrizen. All right reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}
