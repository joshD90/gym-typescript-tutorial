import { FC, ReactNode } from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
  children: ReactNode;
};

const ActionButton: FC<Props> = ({ setSelectedPage, children }) => {
  return <AnchorLink className="rounded-md ">{children}</AnchorLink>;
};

export default ActionButton;
