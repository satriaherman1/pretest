import { Box, Button, Flex, FlexProps, Heading, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import { ChannelIcon, DashboardIcon, LogoutIcon, ProductIcon, TransactionIcon, WalletIcon } from "@components/common/icons";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { boxShadow, klikooColor } from "@constant/variables";
import BalanceCard from "@components/fragment/BalanceCard";

function Drawer(props: FlexProps) {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const { pathname } = useLocation();

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [isShadow, setIsShadow] = useState<boolean>(false);

  const checkWindowScroll = (scroll: any) => {
    setScrollTop(scroll);
    if (window.scrollY > 40) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkWindowScroll);

    return () => {
      window.removeEventListener("scroll", checkWindowScroll);
    };
  }, [scrollTop]);

  const navItem = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      name: "Balance",
      icon: <WalletIcon />,
      path: "/balance",
    },
    {
      name: "Transaction",
      icon: <TransactionIcon />,
      path: "/transaction",
    },
    {
      name: "Product",
      icon: <ProductIcon />,
      path: "/product",
    },
    {
      name: "Channel",
      icon: <ChannelIcon />,
      path: "/channel",
      child: [
        {
          name: "Agent",
          path: "/channel/agent",
        },
        {
          name: "Balance",
          path: "/channel/balance",
        },
        {
          name: "Transaction",
          path: "/channel/transaction",
        },
      ],
    },

    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "/logout",
    },
  ];
  return (
    <Flex {...props} position="fixed" top="0" left={0} bg="white" justifyContent="space-between" w="full" padding="12px 20px" boxShadow={isShadow ? boxShadow : "none"}>
      <Box as="button" onClick={() => setIsOpenDrawer(true)}>
        <HamburgerIcon />
      </Box>
      <Box as="button" background="transparent">
        <Image rounded="full" src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1668608335/pretest/userpic_fnvvnb.png" height="40px" width="40px" />
      </Box>
      <Box position="fixed" top={0} left={isOpenDrawer ? "0vw" : "-100vw"} w="100vw" h="100vh" bg="white" zIndex={999} transition="0.3s">
        <Flex justifyContent="space-between" padding="20px">
          <Heading as="h1" color="#545DFF" fontSize="29px">
            SalesDash
          </Heading>
          <Box as="button" onClick={() => setIsOpenDrawer(false)}>
            <CloseIcon />
          </Box>
        </Flex>

        <List paddingLeft={0}>
          {navItem.map((nav) => (
            <ListItem className={pathname == nav.path ? "drawer-active" : ""} key={nav.path} position="relative" color={pathname == nav.path ? "#545DFF" : "#7A7A7A"}>
              <Link display="flex" columnGap={12} href={nav.path} textDecoration="none" color="unset" padding="25px">
                {nav.icon}
                <Text marginY={0}>{nav.name}</Text>
              </Link>
            </ListItem>
          ))}
        </List>

        <Flex paddingX="20px" bgColor={klikooColor.secondary} position="absolute" height="35vh" bottom={0} width="100%" flexDir="column" justifyContent="center">
          <BalanceCard />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Drawer;
