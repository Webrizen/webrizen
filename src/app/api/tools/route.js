export function GET() {
  const tools = [
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

  return Response.json({ tools });
}
