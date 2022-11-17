import { Box, BoxProps, Image, Text } from "@chakra-ui/react";
import { klikooColor } from "@constant/variables";
import FormatService from "@services/common/format.service";
import { Url } from "url";

interface ITopProductCard extends BoxProps {
  name: string;
  imageUrl: string;
  price: number;
  transactions: number;
}

function TopProductCard({ name, imageUrl, price, transactions, ...props }: ITopProductCard) {
  const formatService = new FormatService();
  return (
    <Box {...props} border={`3px solid #989EFF`} padding="16px 11px" width="fit-content" borderRadius="12px" fontWeight="700" textAlign="center">
      <Image src={imageUrl} height="54px" display="block" marginX="auto" />

      <Box marginTop="6px">
        <Text color={klikooColor.primary} fontSize="18px">
          {name}
        </Text>
        <Text color="#7a7a7a">{formatService.currencyIDR(price)}</Text>
        <Text fontSize="14px">
          <Box as="span" fontSize="20px">
            {transactions}
          </Box>{" "}
          transactions
        </Text>
      </Box>
    </Box>
  );
}

export default TopProductCard;
