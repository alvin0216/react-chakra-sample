import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Toaster } from "../ui/toaster";
import type { FC, ReactNode } from "react";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider value={theme}>
      {children}
      <Toaster />
    </ChakraProvider>
  );
};
