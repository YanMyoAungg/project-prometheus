import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import {
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { FiMenu } from "react-icons/fi";
const PrimaryDrawer = () => {
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <DrawerRoot size={"xs"} placement={"start"}>
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
        </DrawerContent>
      </DrawerRoot>
    </ClientOnly>
  );
};

export default PrimaryDrawer;
