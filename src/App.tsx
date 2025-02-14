import {
  Button,
  HStack,
  ChakraProvider,
  createSystem,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: "#EE0F0F",
      },
    },
  },
});

const system = createSystem(config);

const App = () => {
  return (
    <ChakraProvider value={system}>
      <HStack>
        <Button colorPalette="red">Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </ChakraProvider>
  );
};

export default App;
