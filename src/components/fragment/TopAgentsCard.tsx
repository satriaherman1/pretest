import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ITopAgentsData } from "@components/fragment/TopAgents";
import { klikooColor } from "@constant/variables";
import FormatService from "@services/common/format.service";

function TopAgentsCard({ company, profit, sales, transaction, ...props }: ITopAgentsData) {
  const formatService = new FormatService();
  return (
    <Flex gap={3} {...props}>
      <Image src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668614504/pretest/userpic_1_p5crbq.png" width="35px" height="35px" />

      <Box w="full">
        <Text fontSize="14px" color={klikooColor.primary} fontWeight="bold">
          {company}
        </Text>
        <Flex justifyContent="space-between" w="full">
          <Box fontSize="14px" color="#7a7a7a">
            <Text>Profit</Text>
            <Text>Sales</Text>
            <Text>Transaction</Text>
          </Box>
          <Box fontSize="14px" fontWeight="bold">
            <Text>Rp {formatService.currencyIDR(profit)}</Text>
            <Text>Rp Rp {formatService.currencyIDR(sales)}</Text>
            <Text>{transaction} transaction</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default TopAgentsCard;
