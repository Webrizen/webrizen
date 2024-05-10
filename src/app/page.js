import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cloud, Lock, Server } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "The Power of Responsive Web Design",
    href: "#",
    description:
      "In today's digital landscape, responsiveness isn't just a feature; it's a necessity. Learn how responsive web design can elevate your online presence and enhance user experience.",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: { title: "Web Design", href: "#" },
    author: {
      name: "Jessica Bennett",
      role: "Lead Web Designer",
      href: "#",
      imageUrl: "https://placehold.co/500x500",
    },
  },
  {
    id: 3,
    title: "Strategic SEO Techniques for Digital Success",
    href: "#",
    description:
      "Unravel the mystery behind effective SEO strategies. From keyword research to on-page optimization, discover the tactics that can propel your website to the top of search engine rankings.",
    date: "April 5, 2024",
    datetime: "2024-04-05",
    category: { title: "SEO", href: "#" },
    author: {
      name: "David Peterson",
      role: "SEO Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const services = [
  {
    title: 'Web Design',
    description: 'Crafting visually stunning and user-friendly websites tailored to your brand, like strategic opening moves on the digital chessboard.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    title: 'Web Development',
    description: 'Building robust and scalable web applications with cutting-edge technologies, akin to carefully planning mid-game strategies.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating seamless online shopping experiences that drive conversions, much like executing tactical maneuvers in the heat of battle.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    title: 'SEO Optimization',
    description: 'Strategically positioning your website to dominate search engine results, playing the long game with calculated precision.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting mobile applications that move fluidly, much like a skilled player navigating the board with grace.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    title: 'Digital Marketing',
    description: 'Executing targeted campaigns that capture audience attention like a masterful checkmate, ensuring your brand emerges victorious.',
    imageUrl: 'https://placehold.co/600x400',
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
                href="#"
                className="font-semibold dark:text-indigo-300 text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                Digital Dominance with Webrizen{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <h1 className="text-4xl font-bold dark:text-slate-100 text-slate-900 sm:text-6xl">
              Make a move that creates a game.
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-slate-600">
              We engineer digital strategies akin to a grandmaster's meticulous
              planning on a chessboard. Our team, adept at every move, crafts
              solutions that anticipate your opponent's every move.
            </p>
            <div className="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0 mt-8 w-max mx-auto lg:mx-0">
              <div className="flex items-center -space-x-2">
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-slate-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-slate-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-slate-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-slate-950 object-cover"
                />
                <span className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-slate-950 bg-slate-200 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-center">
                  50+
                </span>
              </div>
              <span className="pl-2 text-slate-600 dark:text-slate-200">
                {" "}
                Trusted Developers{" "}
              </span>
            </div>
            <div class="flex md:justify-start whitespace-nowrap justify-center items-center flex-wrap mt-8 md:mb-0 mb-8 gap-4">
              <Link
                href="#"
                class="flex items-center h-12 px-6 bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white rounded-full  hover:backdrop-blur-lg"
              >
                Hire us Now
              </Link>
              <Link
                href="#"
                class="flex items-center h-12 px-6 rounded-full bg-slate-100 dark:bg-slate-900 text-purple-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/hero-3.png"
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
      <section className="py-16 dark:bg-[url('/bg-wave.svg')] bg-white bg-top bg-cover bg-no-repeat">
        <div className="container mx-auto">
          <div className="relative w-full">
          <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Services
          </h2>
            <img src="/arrow.svg" alt="arrow" className="absolute w-auto h-[420px] right-[360px] -bottom-48 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                className="bg-white dark:bg-gray-800 dark:hover:bg-[url('/hover.svg')] bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden border dark:border-rgba(225,225,225,0.1) border-[rgba(0,0,0,0.1)]"
                key={index}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={service.imageUrl}
                  alt={service.title}
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight dark:text-slate-100 text-slate-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 dark:text-slate-300 text-slate-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-slate-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 dark:text-slate-100 text-slate-900 group-hover:text-slate-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-slate-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold dark:text-slate-100 text-slate-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-slate-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
