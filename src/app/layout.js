import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/system/Footer";
import { ClerkProvider } from '@clerk/nextjs';

const dM_Sans = DM_Sans({
  weights: ["100", "200", "300", "400", "500", "600", "800", "900", "1000"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Web Development Agency | Webrizen - Falakata, West Bengal, India",
    template:
      "%s | Web Development Agency | Webrizen - Falakata, West Bengal, India",
  },
  description: {
    default:
      "Webrizen, a leading web development agency in Falakata, West Bengal, India. Crafting stunning websites for global clients. Expertise in responsive design, e-commerce, and custom solutions.",
    template:
      "%s | Web Development Agency | Webrizen - Falakata, West Bengal, India",
  },
  applicationName: "Webrizen",
  generator: "Webrizen",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Web development",
    "website design",
    "responsive design",
    "e-commerce solutions",
    "custom web development",
    "Webrizen",
    "Falakata, West Bengal",
    "India",
    "global services.",
  ],
  authors: [
    {
      name: "Arshahdul Ahmed",
      url: "https://webrizen.com",
    },
  ],
  publisher: "Arshahdul Ahmed",
  metadataBase: new URL("https://webrizen.com"),
  openGraph: {
    title: "Webrizen",
    description:
      "Webrizen, a leading web development agency in Falakata, West Bengal, India. Crafting stunning websites for global clients. Expertise in responsive design, e-commerce, and custom solutions.",
    url: "https://webrizen.com",
    siteName: "Webrizen",
    images: [
      {
        url: "https://webrizen.com/logo.webp",
        width: 500,
        height: 500,
        alt: "Webrizen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.webp",
    },
  },
  manifest: "https://webrizen.com/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Webrizen",
    description:
      "Webrizen, a leading web development agency in Falakata, West Bengal, India. Crafting stunning websites for global clients. Expertise in responsive design, e-commerce, and custom solutions.",
    creator: "@Arshahdul_ahmed",
    images: ["https://webrizen.com/logo.webp"],
  },
  verification: {
    google: "ybDMkxh5rgTRuJgifNQE1gHV_n7OW1Wa_NGFbnanSp8",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["support@webrizen.com", "webrizen.com", "webrizen@gmail.com"],
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`!overflow-y-auto ${dM_Sans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
