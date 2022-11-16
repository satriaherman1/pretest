import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowOutlinedIcon } from "@components/common/icons";
import { options, salesData } from "@components/container/dashboard/data";
import DashboardCard from "@components/fragment/DashboardCard";
import { boxShadow } from "@constant/variables";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import TopAgents from "@components/container/dashboard/TopAgents";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function DashboardMainContent() {
  return (
    <Box paddingY="20px" flexBasis="60%">
      <Heading as="h1" fontSize="30px" marginBottom={0}>
        Dashboard
      </Heading>
      <Text marginTop={2} color="#7A7A7A">
        Today’s date: Sun, 10 April 2022
      </Text>

      <Flex marginTop={37} gap="20px">
        <DashboardCard title="Profit" total={11500000} bottomText="0.3% compared to 7 days ago" bottomTextColor="#E94948" bottomIcon={<ArrowOutlinedIcon fill="#E94948" />} />
        <DashboardCard title="Sales" total={56000000} bottomText="0.3% compared to 7 days ago" bottomTextColor="#36D189" bottomIcon={<ArrowOutlinedIcon fill="#36D189" />} />
        <DashboardCard
          title="Transaction"
          total={
            <>
              1090{" "}
              <Box as="span" fontSize={14}>
                transactions
              </Box>
            </>
          }
          bottomText="same as 7 days ago"
          bottomTextColor="#FFDC7D"
          bottomIcon={<ArrowOutlinedIcon fill="#FFDC7D" />}
        />
      </Flex>

      <Flex marginTop="30px" gap="20px">
        <Box flexBasis="75%">
          <Box borderRadius="12px" boxShadow={boxShadow} padding="19px 16px" height="fit-content">
            <Heading as="h4" fontSize="20px" marginY={0}>
              Sales Chart
            </Heading>

            <Line data={salesData} options={options} id="salesChart" />
          </Box>
        </Box>

        <Box flexBasis="25%">
          <TopAgents />
        </Box>
      </Flex>
    </Box>
  );
}

export default DashboardMainContent;
