import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import TopProductCard from "@components/fragment/TopProductCard";
import { boxShadow, klikooColor } from "@constant/variables";

function TopProducts() {
  const [mediumScreen] = useMediaQuery(`(min-width: 768px)`);

  const topProductsCardData = [
    {
      name: "Maxim",
      price: 150000,
      transactions: 120,
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668654295/pretest/maxin-logo_m2ggc3.png",
    },
    {
      name: "Telkomsel",
      price: 25000,
      transactions: 98,
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668655458/pretest/telkom_emy2mu.png",
    },
    {
      name: "Three",
      price: 50000,
      transactions: 74,
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668655488/pretest/three_g5ejbh.png",
    },
    {
      name: "OVO",
      price: 100000,
      transactions: 68,
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668655490/pretest/ovo_oajdwp.png",
    },
    {
      name: "PLN Postpaid",
      price: 150000,
      transactions: 50,
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668655556/pretest/pln_cnb2cw.png",
    },
  ];
  return (
    <Box padding="16px" bg="white" boxShadow={boxShadow} borderRadius="20px" marginTop={4}>
      <Text color="#7a7a7a" fontWeight="bold">
        Top 5 Products
      </Text>

      <Flex flexDir={mediumScreen ? "row" : "row"} flexWrap="wrap" marginTop="20px" justifyContent="space-between" gap={2}>
        {topProductsCardData.map((data) => (
          <TopProductCard flexBasis={mediumScreen ? "19%" : "47%"} key={data.imageUrl} {...data} />
        ))}
      </Flex>
    </Box>
  );
}

export default TopProducts;
