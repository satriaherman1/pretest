import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowIcon } from "@components/common/icons";
import { klikooColor } from "@constant/variables";

function DashboardBalance() {
  return (
    <Box backgroundColor={klikooColor.secondary} width="100%">
      <Flex marginX="auto" justifyContent="center" alignItems="center" columnGap={2} paddingY="20px">
        <Image rounded="full" src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668608335/pretest/userpic_fnvvnb.png" height="40px" width="40px" />
        <Box>
          <Heading as="h6" fontSize="16px" marginY={0}>
            Budi Budiman
          </Heading>
          <Text marginY={0} color="#7A7A7A" fontSize={14}>
            Owner at PT Suka Maju
          </Text>
        </Box>

        <Button background="none" outline="none" size="xs">
          <ArrowIcon />
        </Button>
      </Flex>
    </Box>
  );
}

export default DashboardBalance;
