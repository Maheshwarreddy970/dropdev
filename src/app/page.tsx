"use client"

import NavtionBar from "./components/Navigetionbar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function Home() {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <NextUIProvider>
        <main className="">
          <NavtionBar></NavtionBar>
        </main>
      </NextUIProvider>
    </NextThemesProvider>

  );
}
