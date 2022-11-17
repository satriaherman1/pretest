import { Box, Button, Heading } from "@chakra-ui/react";
import { MoreIcon } from "@components/common/icons";
import { boxShadow, klikooColor } from "@constant/variables";
import FormatService from "@services/common/format.service";

function BalanceCard() {
  const formatService = new FormatService();
  return (
    <Box padding="16px 20px" borderRadius="14px" bg="white" boxShadow={boxShadow} marginTop="20px" position="relative">
      <Box as="button" padding="9px" position="absolute" top="7px" right="10px">
        <MoreIcon />
      </Box>
      <Heading as="h5" fontSize="16px" color="#7a7a7a" textAlign="center">
        Total balance
      </Heading>

      <Heading as="h2" fontSize="24px" textAlign="center" marginTop="26px">
        Rp {formatService.currencyIDR(1580000000)}
      </Heading>

      <Button w="full" backgroundColor={klikooColor.primary} colorScheme="purple" fontWeight="bold" marginTop="15px">
        Top Up
      </Button>
    </Box>
  );
}

export default BalanceCard;
