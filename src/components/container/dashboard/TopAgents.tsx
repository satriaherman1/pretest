import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import TopAgentsCard from "@components/fragment/TopAgentsCard";
import { boxShadow } from "@constant/variables";

function TopAgents() {
  const [largeScreen] = useMediaQuery(`(min-width: 1024px)`);
  const [extraLargeScreen] = useMediaQuery(`(min-width: 1600px)`);

  const topAgentsData = [
    {
      company: "PT Suka Maju Jakarta",
      profit: 3700000,
      sales: 7230000,
      transaction: 43,
    },
    {
      company: "Susi Susanti",
      profit: 3700000,
      sales: 7230000,
      transaction: 43,
    },
    {
      company: "Toko Pulsa III Depok",
      profit: 3700000,
      sales: 7230000,
      transaction: 43,
    },
    {
      company: "Anton Antoman",
      profit: 3700000,
      sales: 7230000,
      transaction: 43,
    },
    {
      company: "PT Suka Maju Bogor",
      profit: 3700000,
      sales: 7230000,
      transaction: 43,
    },
  ];

  return (
    <Box w="full" padding="19px 16px" borderRadius="20px" boxShadow={boxShadow}>
      <Text fontWeight="bold" color="#7a7a7a">
        Top 5 Agents
      </Text>
      <Flex flexWrap="wrap" flexDir={extraLargeScreen ? "column" : largeScreen ? "row" : "column"} gap="12px" marginTop="20px">
        {topAgentsData.map((data) => (
          <TopAgentsCard minW={largeScreen ? "250px" : "unset"} flexBasis="32%" key={data.company} {...data} />
        ))}
      </Flex>
    </Box>
  );
}

export default TopAgents;
