import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@components/common/sidebar";
import DashboardBalance from "@components/container/dashboard/Balance";
import DashboardMainContent from "@components/container/dashboard/MainContent";

function DashboardPage() {
  return (
    <Box className="pretest-pvg">
      <Flex gap="50px">
        <Sidebar />
        <DashboardMainContent />
        <DashboardBalance />
      </Flex>
    </Box>
  );
}

export default DashboardPage;
