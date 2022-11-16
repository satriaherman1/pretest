import { Icon, IconProps } from "@chakra-ui/react";

interface IiconProps extends IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

function DashboardIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none">
      <path
        d="M12.1667 21.5V9.83333H21.5V21.5H12.1667ZM0.5 12.1667V0.5H9.83333V12.1667H0.5ZM7.5 9.83333V2.83333H2.83333V9.83333H7.5ZM0.5 21.5V14.5H9.83333V21.5H0.5ZM2.83333 19.1667H7.5V16.8333H2.83333V19.1667ZM14.5 19.1667H19.1667V12.1667H14.5V19.1667ZM12.1667 0.5H21.5V7.5H12.1667V0.5ZM14.5 2.83333V5.16667H19.1667V2.83333H14.5Z"
        fill={fill ? fill : "#545DFF"}
      />
    </Icon>
  );
}

function WalletIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="24px" height="22px" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 5.16667H22.5C22.8094 5.16667 23.1061 5.28958 23.3249 5.50838C23.5437 5.72717 23.6666 6.02391 23.6666 6.33333V20.3333C23.6666 20.6428 23.5437 20.9395 23.3249 21.1583C23.1061 21.3771 22.8094 21.5 22.5 21.5H1.49998C1.19056 21.5 0.893814 21.3771 0.675022 21.1583C0.456229 20.9395 0.333313 20.6428 0.333313 20.3333V1.66667C0.333313 1.35725 0.456229 1.0605 0.675022 0.841709C0.893814 0.622916 1.19056 0.5 1.49998 0.5H19V5.16667ZM2.66665 7.5V19.1667H21.3333V7.5H2.66665ZM2.66665 2.83333V5.16667H16.6666V2.83333H2.66665ZM15.5 12.1667H19V14.5H15.5V12.1667Z"
        fill={fill ?? "#7A7A7A"}
      />
    </Icon>
  );
}

function TransactionIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 23.6667C5.55648 23.6667 0.333313 18.4435 0.333313 12C0.333313 5.5565 5.55648 0.333328 12 0.333328C18.4435 0.333328 23.6666 5.5565 23.6666 12C23.6666 18.4435 18.4435 23.6667 12 23.6667ZM12 21.3333C14.4753 21.3333 16.8493 20.35 18.5996 18.5997C20.35 16.8493 21.3333 14.4753 21.3333 12C21.3333 9.52464 20.35 7.15067 18.5996 5.40033C16.8493 3.64999 14.4753 2.66666 12 2.66666C9.52463 2.66666 7.15066 3.64999 5.40032 5.40033C3.64998 7.15067 2.66665 9.52464 2.66665 12C2.66665 14.4753 3.64998 16.8493 5.40032 18.5997C7.15066 20.35 9.52463 21.3333 12 21.3333V21.3333ZM6.16665 13.1667H16.6666V15.5H12V19L6.16665 13.1667ZM12 8.49999V4.99999L17.8333 10.8333H7.33331V8.49999H12Z"
        fill={fill ?? "#7A7A7A"}
      />
    </Icon>
  );
}

function ProductIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon width="22px" height="24px" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3333 23.6667H1.66667C1.35725 23.6667 1.0605 23.5437 0.841709 23.325C0.622916 23.1062 0.5 22.8094 0.5 22.5V1.49999C0.5 1.19058 0.622916 0.893829 0.841709 0.675037C1.0605 0.456245 1.35725 0.333328 1.66667 0.333328H20.3333C20.6428 0.333328 20.9395 0.456245 21.1583 0.675037C21.3771 0.893829 21.5 1.19058 21.5 1.49999V22.5C21.5 22.8094 21.3771 23.1062 21.1583 23.325C20.9395 23.5437 20.6428 23.6667 20.3333 23.6667ZM19.1667 21.3333V2.66666H2.83333V21.3333H19.1667ZM7.5 4.99999V7.33333C7.5 8.26159 7.86875 9.15182 8.52513 9.8082C9.1815 10.4646 10.0717 10.8333 11 10.8333C11.9283 10.8333 12.8185 10.4646 13.4749 9.8082C14.1313 9.15182 14.5 8.26159 14.5 7.33333V4.99999H16.8333V7.33333C16.8333 8.88042 16.2188 10.3642 15.1248 11.4581C14.0308 12.5521 12.5471 13.1667 11 13.1667C9.4529 13.1667 7.96917 12.5521 6.87521 11.4581C5.78125 10.3642 5.16667 8.88042 5.16667 7.33333V4.99999H7.5Z"
        fill={fill ?? "#7A7A7A"}
      />
    </Icon>
  );
}

function ChannelIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="22px" height="24px" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 5.16667H22.5C22.8094 5.16667 23.1061 5.28958 23.3249 5.50838C23.5437 5.72717 23.6666 6.02391 23.6666 6.33333V20.3333C23.6666 20.6428 23.5437 20.9395 23.3249 21.1583C23.1061 21.3771 22.8094 21.5 22.5 21.5H1.49998C1.19056 21.5 0.893814 21.3771 0.675022 21.1583C0.456229 20.9395 0.333313 20.6428 0.333313 20.3333V1.66667C0.333313 1.35725 0.456229 1.0605 0.675022 0.841709C0.893814 0.622916 1.19056 0.5 1.49998 0.5H19V5.16667ZM2.66665 7.5V19.1667H21.3333V7.5H2.66665ZM2.66665 2.83333V5.16667H16.6666V2.83333H2.66665ZM15.5 12.1667H19V14.5H15.5V12.1667Z"
        fill={fill ?? "#7A7A7A"}
      />
    </Icon>
  );
}

function LogoutIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="23px" height="24px" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.83335 23.6667C1.52393 23.6667 1.22719 23.5437 1.0084 23.325C0.789604 23.1062 0.666687 22.8094 0.666687 22.5V1.49999C0.666687 1.19058 0.789604 0.893829 1.0084 0.675037C1.22719 0.456245 1.52393 0.333328 1.83335 0.333328H18.1667C18.4761 0.333328 18.7729 0.456245 18.9916 0.675037C19.2104 0.893829 19.3334 1.19058 19.3334 1.49999V4.99999H17V2.66666H3.00002V21.3333H17V19H19.3334V22.5C19.3334 22.8094 19.2104 23.1062 18.9916 23.325C18.7729 23.5437 18.4761 23.6667 18.1667 23.6667H1.83335ZM17 16.6667V13.1667H8.83335V10.8333H17V7.33333L22.8334 12L17 16.6667Z"
        fill={fill ?? "#7A7A7A"}
      />
    </Icon>
  );
}

function ArrowOutlinedIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="14px" height="14px" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.58999 11.004L0.981995 2.397L2.39599 0.983002L11.003 9.589V2.004H13.003V13.004H2.00299V11.004H9.58999Z" fill={fill ?? "#7A7A7A"} />
    </Icon>
  );
}

function ArrowIcon({ width, height, fill, ...props }: IiconProps) {
  return (
    <Icon {...props} width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99998 6.36735L13.775 0.592346L15.4247 2.24201L7.99998 9.66668L0.575317 2.24201L2.22498 0.592346L7.99998 6.36735Z" fill={fill ?? "#212121"} />
    </Icon>
  );
}

export { DashboardIcon, WalletIcon, TransactionIcon, ProductIcon, ChannelIcon, LogoutIcon, ArrowOutlinedIcon, ArrowIcon };
