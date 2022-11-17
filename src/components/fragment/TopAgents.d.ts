import { FlexProps } from "@chakra-ui/react";

interface ITopAgentsData extends FlexProps {
  company: string;
  profit: number;
  sales: number;
  transaction: number;
}

export { ITopAgentsData };
