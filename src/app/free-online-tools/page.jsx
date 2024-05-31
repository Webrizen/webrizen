import Link from "next/link";

export const metadata = {
  title: "Free Online Tools | Your Website Enhancement Suite",
  description:
    "Explore our collection of free online tools designed to elevate your website's functionality and user experience. From converting YouTube videos to MP3, downloading Instagram posts, to generating color palettes and calculating EMI, we have everything you need to enhance your online presence.",
    openGraph: {
      title: "Free Online Tools | Your Website Enhancement Suite",
      description: "Explore our collection of free online tools designed to elevate your website's functionality and user experience. From converting YouTube videos to MP3, downloading Instagram posts, to generating color palettes and calculating EMI, we have everything you need to enhance your online presence.",
    },
};

const FeatureItem = ({ title, description, slug }) => {
  return (
    <div className="space-y-4 bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] hover:backdrop-blur-xl transition-all p-4 h-full rounded">
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </p>
      <Link
        href={`/free-online-tools/${slug}`}
        className="text-sky-700 dark:text-sky-500 flex items-center gap-x-3 w-max"
      >
        Live preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

const features = [
  {
    id: 1,
    title: "YouTube to MP3 Converter",
    description:
      "Easily convert YouTube videos to MP3 audio files for offline listening.",
    slug: "youtube-to-mp3-converter",
  },
];

const page = () => {
  return (
    <section className="py-20 bg-[url('/bg-steps.svg')] bg-right-top bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-6xl">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800 dark:text-gray-100">
              Free Tools
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-6xl leading-tight">
            Streamline your workflow, boost productivity, and simplify your daily tasks.
            </h1>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Explore our collection of free online tools designed to elevate your
            website's functionality and user experience. From converting YouTube
            videos to MP3, downloading Instagram posts, to generating color
            palettes and calculating EMI, we have everything you need to enhance
            your online presence.
          </p>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
          <div className="w-full lg:items-center grid sm:grid-cols-4 gap-4">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
