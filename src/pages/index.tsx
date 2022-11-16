import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@components/common/sidebar";

function DashboardPage() {
  return (
    <Box className="pretest-pvg">
      <Flex>
        <Sidebar />
      </Flex>
    </Box>
  );
}

export default DashboardPage;
