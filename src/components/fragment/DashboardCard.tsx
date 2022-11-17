import { Box, Text } from "@chakra-ui/react";
import { boxShadow } from "@constant/variables";
import FormatService from "@services/common/format.service";

interface IDashboardCardProps {
  title: string;
  total: number | any;
  bottomText: string;
  bottomTextColor: string;
  bottomIcon: any;
}

function DashboardCard({ title, total, bottomText, bottomTextColor, bottomIcon }: IDashboardCardProps) {
  const formatService = new FormatService();
  return (
    <Box padding="16px" borderRadius="20px" minW="250px" boxShadow={boxShadow}>
      <Text color="#7a7a7a" fontWeight="600" fontSize="16px" marginY={0}>
        {title}
      </Text>
      <Text fontWeight="600" fontSize="24px" marginY={0}>
        {typeof total == "number" ? `Rp ${formatService.currencyIDR(total)}` : total}
      </Text>
      <Text fontSize="14px" as="small" color={bottomTextColor} marginTop="2px" textAlign="right" display="flex" gap="4px" justifyContent="flex-end" alignItems="center" fontWeight="bold">
        {bottomIcon} {bottomText}
      </Text>
    </Box>
  );
}

export default DashboardCard;
