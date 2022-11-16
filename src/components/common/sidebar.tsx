import { Box, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { DashboardIcon } from "@components/common/icons";
import { useLocation } from "react-router-dom";

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
      icon: <DashboardIcon />,
      path: "/balance",
    },
    {
      name: "Transaction",
      icon: <DashboardIcon />,
      path: "/transaction",
    },
    {
      name: "Product",
      icon: <DashboardIcon />,
      path: "/product",
    },
    {
      name: "Channel",
      icon: <DashboardIcon />,
      path: "/Channel",
    },

    {
      name: "Logout",
      icon: <DashboardIcon />,
      path: "/logout",
    },
  ];

  return (
    <Box>
      <Box>
        <Heading textAlign="center" as="h1" color="#545DFF" fontSize="29px">
          SalesDash
        </Heading>
      </Box>

      <List paddingLeft={0}>
        {navItem.map((item, key) => (
          <ListItem key={item.path} padding="20px 30px" color={pathname == item.path ? "#545DFF" : "#7A7A7A"}>
            <Link display="flex" columnGap={12}>
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
