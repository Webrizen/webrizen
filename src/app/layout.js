import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Webrizen — Websites That Convert",
  description:
    "Webrizen is a modern web agency crafting high-performance websites, landing pages, and e-commerce platforms using Next.js, Tailwind, and modern tech stacks.",
  keywords:
    "Webrizen, Web Agency, Website Development, Next.js, Tailwind CSS, E-commerce, SEO, Landing Pages, Web Design",
  openGraph: {
    title: "Webrizen — Websites That Convert",
    description: "Custom websites. Blazing fast. SEO ready. Built to perform.",
    url: "https://webrizen.dev",
    siteName: "Webrizen",
    images: [
      {
        url: "https://webrizen.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webrizen Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webrizen — Websites That Convert",
    description:
      "Webrizen builds high-performance websites and digital experiences using cutting-edge technologies.",
    images: ["https://webrizen.dev/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
