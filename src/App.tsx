import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { theme } from "./theme";
import { UserResetPage } from "./pages/user-reset";
import { AdminLoginPage } from "./pages/admin-login";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <ChakraProvider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserResetPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ChakraProvider>
  );
};

export default App;
