// components/TopNav.tsx
"use client";

import {
  Box,
  ClientOnly,
  Flex,
  IconButton,
  Separator,
  Skeleton,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { ColorModeButton } from "./ui/color-mode";

import PrimaryDrawer from "./primary-drawer";

const TopNav = () => {
  return (
    <>
      <Box
        _dark={{ bg: "black" }}
        _light={{ bg: "white" }}
        mx={4}
        pos={"sticky"}
        top={0}
        zIndex={10}
      >
        <Flex justify="space-between" align="center" h="60px">
          <PrimaryDrawer />
          <Flex>
            <ColorModeButton />
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
              <IconButton variant="ghost" aria-label="Search">
                <FiSearch />
              </IconButton>
            </ClientOnly>
          </Flex>
        </Flex>
        <Separator />
      </Box>
    </>
  );
};

export default TopNav;
