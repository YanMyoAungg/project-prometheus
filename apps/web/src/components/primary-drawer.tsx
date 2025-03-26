import { ClientOnly, IconButton } from "@chakra-ui/react";
import {
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { FiMenu } from "react-icons/fi";
import { CloseButton } from "./ui/close-button";
const PrimaryDrawer = () => {
  return (
    <ClientOnly>
      <DrawerRoot size={"xs"} placement={"end"}>
        <DrawerTrigger asChild>
          <IconButton variant="ghost" aria-label="Drawer">
            <FiMenu />
          </IconButton>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger asChild>
            <CloseButton size="sm" />
          </DrawerCloseTrigger>
        </DrawerContent>
      </DrawerRoot>
    </ClientOnly>
  );
};

export default PrimaryDrawer;
