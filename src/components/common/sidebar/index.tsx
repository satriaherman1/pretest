import { Box, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { ChannelIcon, DashboardIcon, LogoutIcon, ProductIcon, TransactionIcon, WalletIcon } from "@components/common/icons";
import { useLocation } from "react-router-dom";
import "./style.css";

function Sidebar() {
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

  return (
    <Box>
      <Box paddingY="20px">
        <Heading textAlign="center" as="h1" color="#545DFF" fontSize="29px">
          SalesDash
        </Heading>
      </Box>

      <List paddingLeft={0} marginTop="20px">
        {navItem.map((item, key) => (
          <ListItem marginTop="15px" className={pathname == item.path ? "sidebar-active" : ""} key={item.path} position="relative" color={pathname == item.path ? "#545DFF" : "#7A7A7A"}>
            <Link display="flex" columnGap={12} href={item.path} textDecoration="none" color="unset" padding="10px 70px 10px 40px">
              {item.icon}
              <Text marginY={0}>{item.name}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
