import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { ArrowIcon, ChannelIcon, DashboardIcon, LogoutIcon, ProductIcon, TransactionIcon, WalletIcon } from "@components/common/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

function Sidebar(props: BoxProps) {
  const { pathname } = useLocation();

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

  const ChildNavList = ({ item }: any) => {
    const [isOpenChildNav, setIsOpenChildNav] = useState<boolean>(false);
    return (
      <>
        <Link
          as={item.child ? "button" : "a"}
          onClick={() => setIsOpenChildNav(!isOpenChildNav)}
          display="flex"
          columnGap={12}
          href={item.path}
          textDecoration="none"
          color="unset"
          padding="10px 70px 10px 40px"
        >
          {item.icon}
          <Text marginY={0}>{item.name}</Text>
          {item.child && (
            <Box as="button">
              <ArrowIcon transition=".3s" transform={isOpenChildNav ? "rotate(0deg)" : "rotate(-90deg)"} fill="#7a7a7a" />
            </Box>
          )}
        </Link>

        <List maxH={isOpenChildNav ? "700px" : 0} overflow="hidden" transition=".5s" h="fit-content">
          {item.child?.map((c: any) => (
            <ListItem key={c.name}>
              <Link paddingY="14px" paddingLeft="110px" display="block" marginX="auto">
                {c.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  return (
    <Box {...props} maxW="250px">
      <Box paddingY="20px">
        <Heading textAlign="center" as="h1" color="#545DFF" fontSize="29px">
          SalesDash
        </Heading>
      </Box>

      <List paddingLeft={0} marginTop="20px">
        {navItem.map((item, key) => (
          <ListItem marginTop="15px" className={pathname == item.path ? "sidebar-active" : ""} key={item.path} position="relative" color={pathname == item.path ? "#545DFF" : "#7A7A7A"}>
            {item.child ? (
              <ChildNavList item={item} />
            ) : (
              <Link display="flex" columnGap={12} href={item.path} textDecoration="none" color="unset" padding="10px 70px 10px 40px">
                {item.icon}
                <Text marginY={0}>{item.name}</Text>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
