import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Morning Context",
  description: "Context is everything. Only read stories that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="The Morning Context"
        />
        <meta
          property="og:description"
          content="Context is everything. Only read stories that matter."
        />
        <meta property="og:url" content="https://github.com/didyouwin07/tmc" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
