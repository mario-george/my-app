import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";

import Layout from "@/components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Places",
  description: "MERN Fulltack website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" ">
      <body className={inter.className}>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <Layout>{children}</Layout>
        </Theme>
      </body>
    </html>
  );
}
