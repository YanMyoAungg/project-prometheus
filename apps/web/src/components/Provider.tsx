"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./ui/color-mode";

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
