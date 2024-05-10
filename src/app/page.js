import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative isolate bg-[url('/bg.svg')] bg-center bg-cover bg-no-repeat px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center overflow-hidden">
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
              <a href="#" className="font-semibold dark:text-indigo-300 text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Digital Dominance with Webrizen{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <h1 className="text-4xl font-bold dark:text-slate-100 text-gray-900 sm:text-6xl">
              Make a move that creates a game.
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-gray-600">
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
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                />
                <Image
                  src="/images/sidebiew.webp"
                  height={900}
                  width={1240}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                />
                <span className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 bg-gray-200 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  50+
                </span>
              </div>
              <span className="pl-2 text-gray-600 dark:text-gray-200">
                {" "}
                Trusted Developers{" "}
              </span>
            </div>
            <div class="flex md:justify-start whitespace-nowrap justify-center items-center flex-wrap mt-8 md:mb-0 mb-8 gap-4">
              <a
                href="#"
                class="flex items-center h-12 px-6 bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white rounded-full  hover:backdrop-blur-lg"
              >
                Hire us Now
              </a>
              <a
                href="#"
                class="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
              >
                Learn more
              </a>
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
      </div>
    </>
  );
}
