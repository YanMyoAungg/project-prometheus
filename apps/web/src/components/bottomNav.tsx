// components/BottomNav.tsx
"use client";

import { Box, Flex, IconButton, Separator } from "@chakra-ui/react";
import { FiHome, FiBell, FiUser } from "react-icons/fi";

const BottomNav = () => {
  return (
    <>
      {/* Fixed Bottom Navigation */}
      <Box
        pos={"sticky"}
        bottom={0}
        _dark={{ bg: "black" }}
        _light={{ bg: "white" }}
      >
        <Separator />
        <Flex justify="space-around" align="center" h="60px">
          <IconButton variant="ghost" aria-label="Home">
            <FiHome />
          </IconButton>
          <IconButton variant="ghost" aria-label="Notifications">
            <FiBell />
          </IconButton>
          <IconButton variant="ghost" aria-label="Profile">
            <FiUser />
          </IconButton>
        </Flex>
      </Box>
    </>
  );
};

export default BottomNav;
