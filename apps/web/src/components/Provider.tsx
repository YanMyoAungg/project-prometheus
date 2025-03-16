"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function Provider(props: { children }) {
  console.log(props, props.children);

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
