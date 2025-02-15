import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { theme } from "./theme";
import { Toaster } from "./components/ui/toaster";
import { lazy } from "react";

console.log(import.meta.env);

const UserResetPage = lazy(() => import("./pages/user-reset"));
const AdminLoginPage = lazy(() => import("./pages/admin-login"));

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
