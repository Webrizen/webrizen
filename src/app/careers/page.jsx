import React from "react";
import Link from "next/link";
const jobs = [
  {
    id: 1,
    title: "Senior Web Developer",
    href: "#",
    description:
      "We are seeking an experienced Senior Web Developer to join our dynamic team. The ideal candidate should have a strong background in front-end and back-end development, with proficiency in HTML, CSS, JavaScript, and modern frameworks such as React or Angular. You will be responsible for building and maintaining web applications that deliver exceptional user experiences. If you are passionate about pushing the boundaries of web technology and thrive in a collaborative environment, we want to hear from you!",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: { title: "Web Development", href: "#" },
    author: {
      name: "John Doe",
      role: "Head of Engineering",
      href: "#",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    href: "#",
    description:
      "We are looking for a talented Digital Marketing Specialist to join our growing team. The ideal candidate should have a strong understanding of digital marketing strategies, including SEO, SEM, social media marketing, and content marketing. You will be responsible for developing and implementing digital campaigns to drive traffic, engagement, and conversions. If you are creative, analytical, and passionate about leveraging digital channels to achieve business goals, we want to hear from you!",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Jane Smith",
      role: "Marketing Director",
      href: "#",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    id: 3,
    title: "UX/UI Designer",
    href: "#",
    description:
      "We are seeking a creative and detail-oriented UX/UI Designer to join our design team. The ideal candidate should have a strong portfolio showcasing their expertise in user interface design, user experience research, and prototyping. You will collaborate closely with cross-functional teams to create intuitive and visually appealing designs that enhance user satisfaction. If you have a passion for user-centered design and a keen eye for aesthetics, we want to hear from you!",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: { title: "Design", href: "#" },
    author: {
      name: "Emily Johnson",
      role: "Lead Designer",
      href: "#",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  },
];

export const metadata = {
  title: 'Join Our Team - Careers at Webrizen',
  description: 'Explore exciting career opportunities at Webrizen and join our dynamic team of professionals. We are hiring talented individuals who are passionate about technology and innovation.',
  publisher: 'Webrizen',
  category: 'Careers',
};

export default function page() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/bg-career.svg')] bg-center bg-cover bg-no-repeat">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Join Our Talented Team
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We're always on the lookout for passionate and skilled
                individuals to join our growing agency. If you're ready to
                create amazing digital experiences, we want to hear from you.
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight dark:text-slate-100 text-gray-900 sm:text-4xl">
              Explore Our Open Positions
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Browse our current job openings and find the perfect fit for your
              skills and experience.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={job.datetime} className="text-gray-500">
                    {job.date}
                  </time>
                  <a
                    href={job.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {job.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 dark:text-slate-100 text-gray-900 group-hover:text-gray-600">
                    <a href={job.href}>
                      <span className="absolute inset-0" />
                      {job.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                    {job.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={job.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-slate-100">
                      <a href={job.author.href}>
                        <span className="absolute inset-0" />
                        {job.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{job.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
