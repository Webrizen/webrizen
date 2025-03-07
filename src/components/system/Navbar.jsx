"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Webrizen from "@/assets/Webrizen.png";
import { UserButton } from "@clerk/nextjs";
import { fetchServiceLinks } from "@/utils/fetchServices";

const links = [
  {
    title: "Products",
    href: "/products",
    description: "Explore our range of innovative products.",
  },
  {
    title: "Services",
    href: "/services",
    description: "Discover the services we offer to boost your business.",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Access free tools, guides, and blogs to enhance your skills.",
  },
  {
    title: "FAQs",
    href: "/#faqs",
    description: "Find answers to frequently asked questions.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us for inquiries and support.",
  },
  {
    title: "Let's Talk",
    href: "/schedule-meetings",
    description: "Schedule a meeting with our team.",
  },
];

const Navbar = () => {

  const skeletonCards = Array(4).fill(null);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchNavData = async () => {
      const services = await fetchServiceLinks();
      console.log(services);
      setData(services);
    };

    fetchNavData();
  }, []);


  return (
    <header className="p-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl z-50 sticky top-0">
      <div className="md:container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="h-10 w-auto flex gap-2 justify-start mr-8 items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
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
        <nav
         className={`lg:flex hidden md:border-l md:border-slate-500 md:px-3 lg:flex-row flex-col flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center`}
         >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100/50 to-transparent p-4 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <PiIcon className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Why Webrizen?
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            We don't just build websites — we craft digital
                            empires. Your ideas, our code — a match made in
                            HTML.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          MetaMafia
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automated AI metadata for Next.js — because SEO should
                          work for you, not the other way around.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          PrepBhakt
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          AI-powered quiz platform — because practice makes
                          perfect, and AI makes it faster.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Templatizen
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          High-quality Next.js templates by Webrizen — speed up
                          your build, without compromising on design.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {data?.length > 0
                      ? data.map((service, index) => (
                          <NavigationMenuLink asChild key={index}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))
                      : skeletonCards.map((_, index) => (
                          <li
                            key={index}
                            className="animate-pulse bg-gray-200 rounded-md p-4 h-24"
                          />
                        ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/cheat-sheets"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Cheat Sheets
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Quick, snappy guides for coding, freelancing, and
                          running your own agency—because who has time to read a
                          whole textbook?
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/ebooks-gudies"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Ebooks & Guides
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Download expert-written ebooks to master freelancing
                          and web development—no boring stuff, just straight-up
                          value.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/blogs"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Blogs
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Join our free online newslatter to get daily blogs
                          update because we believe knowledge should be shared,
                          not hoarded.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/free-online-tools"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Free Online Tools
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          We provide a range of free online tools which will
                          help you be productive on day to day basis.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/#faqs"
            className="lg:inline-flex lg:w-auto px-5 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="lg:inline-flex lg:w-auto px-5 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Contact
          </Link>
        </nav>
        <div className="w-full flex justify-end items-center gap-2">
          <Button
            asChild
            className="animate-shimmerx h-10 items-center justify-center rounded-full w-min whitespace-nowrap border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <Link
              href="/schedule-meetings"
              className="size-full flex justify-center items-center text-center"
            >
              Let's talk
            </Link>
          </Button>
          <UserButton />
          <Sheet>
            <SheetTrigger className="w-10 h-10 flex md:hidden justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-black border-l-slate-100/30">
              <SheetHeader className="w-full text-left">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore our curated links to boost your journey with us.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col space-y-3 overflow-y-auto h-full pb-20">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors bg-slate-50 dark:bg-[rgba(225,225,225,0.05)] hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      {link.title}
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
