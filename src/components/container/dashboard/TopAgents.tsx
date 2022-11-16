import { Box, Flex, Text } from "@chakra-ui/react";
import TopAgentsCard from "@components/fragment/TopAgentsCard";
import { boxShadow } from "@constant/variables";

function TopAgents() {
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
  ];

  return (
    <Box w="full" padding="19px 16px" borderRadius="20px" boxShadow={boxShadow}>
      <Text fontWeight="bold" color="#7a7a7a">
        Top 5 Agents
      </Text>
      <Flex flexDir="column" gap={4} marginTop="20px">
        {topAgentsData.map((data) => (
          <TopAgentsCard key={data.company} {...data} />
        ))}
      </Flex>
    </Box>
  );
}

export default TopAgents;
