import { Box, Flex } from "@chakra-ui/react";
import "@styles/globals.css";
import Sidebar from "@components/common/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "@pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
