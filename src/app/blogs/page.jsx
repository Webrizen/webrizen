import React from "react";
import { fetchPosts, query } from "@/utils/fetchPosts";
import GetImage from "@/components/system/GetImage";
import DateFormatter from "@/components/system/DateFormater";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  const posts = await fetchPosts();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white capitalize">
            Our most recent Articles
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            perferendis eos amet eum repudiandae aspernatur mollitia quos
            consectetur voluptatibus pariatur
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-lg">
          {posts.map((post, index) => (
            <Link
              href={`/blogs/${post.slug.current}`}
              key={index}
              className="flex p-px flex-col bg-gray-100 dark:bg-gray-900 group border border-gray-200 dark:border-gray-800 rounded-lg"
            >
              <div className="flex rounded-[7px] bg-gray-300 dark:bg-gray-700">
                <div className="w-full h-full rounded-lg border border-slate-300 overflow-hidden">
                  <GetImage
                    source={post.mainImage.asset._ref}
                    title={post.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col p-5 relative space-y-4">
                <div className="flex flex-row gap-2 text-xs justify-start items-center dark:text-slate-400 text-slate-600">
                  <span>{post.categories[0].title}</span>
                  <span>·</span>
                  <span>
                    <DateFormatter serverDate={post.publishedAt} />
                  </span>
                  <span>·</span>
                  <span>by {post.author.name}</span>
                </div>
                <h1 className="text-xl/tight font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  {post.title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
          <div className="sm:col-span-2 lg:col-span-1 p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col space-y-6 relative">
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>
            <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-5 mx-auto max-w-2xl">
              <h1 className="font-bold text-gray-900 dark:text-white text-3xl">
                Join other{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400">
                  600 Amazing
                </span>{" "}
                developers
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, rem eius dicta
              </p>
              <form
                action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                method="POST"
                className="w-full flex flex-col sm:items-center sm:flex-row lg:flex-col gap-y-3 gap-x-4"
              >
                <input
                  type="email"
                  className="py-3 px-5 rounded-lg text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 outline-none w-full placeholder:text-gray-600 dark:placeholder:text-gray-300"
                  placeholder="johndoe@gmail.com"
                  required
                />
                <div className="flex justify-center w-full sm:w-max lg:w-full">
                  <Button className="bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] w-full !text-white rounded hover:backdrop-blur-lg">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="px-6 py-3 border rounded-lg border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default page;
