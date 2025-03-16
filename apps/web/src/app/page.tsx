"use client";

import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";
export default function Home() {
  const { setTheme, theme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div>Hello Word!</div>
      <Button onClick={() => handleTheme()}>Click</Button>
      <div>Testing</div>
    </>
  );
}
