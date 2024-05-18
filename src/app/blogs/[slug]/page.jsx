import { fetchSinglePost } from "@/utils/fetchSinglePost";
import GetImage from "@/components/system/GetImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CustomDateFormatter from "@/components/system/CustomDateFormatter";
import BlogBodyRenderer from "@/components/system/BlogBodyRenderer";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit("max").auto("format")}
            className="my-4"
          />
        );
      },
    },
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-semibold my-4">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-semibold my-4">{children}</h4>,
      normal: ({ children }) => <p className="my-2">{children}</p>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">{children}</blockquote>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal ml-8 my-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="my-2">{children}</li>,
      number: ({ children }) => <li className="my-2">{children}</li>,
    },
  };

export default async function Page({ params }) {
  const post = await fetchSinglePost(params.slug);
  console.log(post);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="relative w-full">
        <GetImage
          source={post.mainImage.asset._ref}
          title={post.title}
          height={600}
          width={1920}
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl space-y-2 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-7">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="flex items-center space-x-2">
                <GetImage
                  source={post.author.image.asset._ref}
                  title={post.title}
                  className="h-8 w-8 rounded-full"
                  height={32}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                />
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <span>·</span>
              <span className="text-sm font-medium">
                Posted <CustomDateFormatter publishedAt={post.publishedAt} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1fr_300px] lg:gap-12 lg:px-8 lg:py-20">
          <article className="w-full prose prose-lg">
          <PortableText value={post.body} components={ptComponents} />
          </article>
          <div className="space-y-6">
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Related Posts</h3>
              <div className="mt-4 space-y-4">
                <Link className="group flex items-center space-x-4" href="#">
                  <img
                    alt="Related Post Thumbnail"
                    className="h-20 w-20 rounded-md object-cover"
                    height={60}
                    src="https://placehold.co/600x400"
                    style={{
                      aspectRatio: "80/60",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      Designing for Accessibility: A Comprehensive Guide
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      May 10, 2024
                    </p>
                  </div>
                </Link>
                <Link className="group flex items-center space-x-4" href="#">
                  <img
                    alt="Related Post Thumbnail"
                    className="h-20 w-20 rounded-md object-cover"
                    height={60}
                    src="https://placehold.co/600x400"
                    style={{
                      aspectRatio: "80/60",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      Mastering CSS Grid: A Step-by-Step Guide
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      April 28, 2024
                    </p>
                  </div>
                </Link>
                <Link className="group flex items-center space-x-4" href="#">
                  <img
                    alt="Related Post Thumbnail"
                    className="h-20 w-20 rounded-md object-cover"
                    height={60}
                    src="https://placehold.co/600x400"
                    style={{
                      aspectRatio: "80/60",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      The Future of Web Development: Trends to Watch
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      April 15, 2024
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Categories</h3>
              <div className="mt-4 space-y-2">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug}
                    className="inline-flex items-center space-x-2 rounded-md bg-gray-100 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    href={`/category/${category.title}`}
                  >
                    <TagIcon className="h-4 w-4" />
                    <span>{category.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
