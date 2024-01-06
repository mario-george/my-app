"use client";
import { store } from "@/components/GlobalRedux/store";
import { Provider } from "react-redux";
import React from "react";
import { Theme } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";

import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >        <NextUIProvider>

        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>        </NextUIProvider>

      </Theme>
    </>
  );
}
