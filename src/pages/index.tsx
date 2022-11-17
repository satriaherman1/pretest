import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Drawer from "@components/common/drawer/drawer";
import Sidebar from "@components/common/sidebar";
import DashboardBalance from "@components/container/dashboard/Balance";
import DashboardMainContent from "@components/container/dashboard/MainContent";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [mediumScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Box className="pretest-pvg">
      <Flex gap="20px" flexDir={mediumScreen ? "row" : "column"}>
        {mediumScreen ? <Sidebar /> : <Drawer />}

        <DashboardMainContent />
        {mediumScreen && <DashboardBalance />}
      </Flex>
    </Box>
  );
}

export default DashboardPage;
