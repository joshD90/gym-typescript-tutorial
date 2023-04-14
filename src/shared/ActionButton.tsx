import { FC, ReactNode } from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
  children: ReactNode;
};

const ActionButton: FC<Props> = ({ setSelectedPage, children }) => {
  return (
    <AnchorLink
      className="hover:background-primary-500 rounded-md bg-secondary-500 px-10 py-2 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
