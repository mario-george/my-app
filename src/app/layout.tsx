import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@radix-ui/themes/styles.css";

import Layout from "@/components/shared/Layout";

import { NextUIProvider } from "@nextui-org/react";

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
        <NextUIProvider>
          <Layout>{children}</Layout>
        </NextUIProvider>
      </body>
    </html>
  );
}
