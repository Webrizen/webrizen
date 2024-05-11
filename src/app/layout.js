import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/system/Footer";

const dM_Sans = DM_Sans({
  weights: ['100', '200', '300', '400', '500', '600', '800', '900', '1000'],
  subsets: ['latin']
})

export const metadata = {
  title: "Web Development Agency | Webrizen - Falakata, West Bengal, India",
  description: "Webrizen, a leading web development agency in Falakata, West Bengal, India. Crafting stunning websites for global clients. Expertise in responsive design, e-commerce, and custom solutions.",
  keywords: "Web development, website design, responsive design, e-commerce solutions, custom web development, Webrizen, Falakata, West Bengal, India, global services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dM_Sans.className}>
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
  );
}
