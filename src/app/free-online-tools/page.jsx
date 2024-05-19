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
  {
    id: 2,
    title: "Instagram Posts Downloader",
    description:
      "Download Instagram posts and save them to your device for later viewing.",
    slug: "instagram-posts-downloader",
  },
  {
    id: 3,
    title: "Send Private Note",
    description:
      "Send encrypted private notes that self-destruct after being read, ensuring confidentiality.",
    slug: "send-private-note",
  },
  {
    id: 4,
    title: "Code Formatter",
    description:
      "Format your messy code easily with our online code formatter tool.",
    slug: "code-formatter",
  },
  {
    id: 5,
    title: "Color Palette Generator",
    description:
      "Generate beautiful color palettes for your design projects with just a few clicks.",
    slug: "color-palette-generator",
  },
  {
    id: 6,
    title: "Image Compressor",
    description:
      "Compress large image files without compromising quality for faster loading times.",
    slug: "image-compressor",
  },
  {
    id: 7,
    title: "Favicon Generator",
    description:
      "Create custom favicons for your website to improve branding and recognition.",
    slug: "favicon-generator",
  },
  {
    id: 8,
    title: "Idea Generator",
    description:
      "Get inspired with new ideas and concepts for your projects or creative endeavors.",
    slug: "idea-generator",
  },
  {
    id: 9,
    title: "EMI Calculator",
    description:
      "Calculate your Equated Monthly Installments (EMI) easily with our online calculator.",
    slug: "emi-calculator",
  },
  {
    id: 10,
    title: "Stock, Mutual Fund & Interest Calculator",
    description:
      "Plan your investments with our comprehensive calculator for stocks, mutual funds, and interest rates.",
    slug: "investment-calculator",
  },
];

const page = () => {
  return (
    <section className="py-20 bg-[url('/bg-steps.svg')] bg-right-top bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-xl">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800 dark:text-gray-100">
              Free Tools
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              Empower Your Website with Our Suite of Free Online Tools
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
