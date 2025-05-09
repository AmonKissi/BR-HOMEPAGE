import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build and Run 🎈",
  openGraph: {
    title: "Build and Run 🎈",
    description:
      "BRSTORE - Build your business website",
    images: [
      {
        url: "https://www.brstore.us/img/favicon/favicon.ico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRSTORE - Build your business website",
    description:
      "BRSTORE - Build your business website",
    images: ["https://www.brstore.us/img/favicon/favicon.ico"],
    creator: "@brstoreus",
  },
  metadataBase: new URL("https://brstore.us"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
