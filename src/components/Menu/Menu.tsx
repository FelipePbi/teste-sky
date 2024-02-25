import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./Menu.scss";
import { useMemo } from "react";

export interface IMenu {
  defaultActiveKey: string;
  tabs: {
    eventKey: string;
    title: string;
    content: React.ReactNode;
  }[];
}

function Menu({ defaultActiveKey, tabs }: IMenu) {
  const contentTabs = useMemo(
    () =>
      tabs.map(({ content, ...defaultProps }) => (
        <Tab key={defaultProps.title} {...defaultProps}>
          {content}
        </Tab>
      )),
    [tabs]
  );

  return (
    <Tabs defaultActiveKey={defaultActiveKey} className="menu-tabs" justify variant="underline">
      {contentTabs}
    </Tabs>
  );
}

export default Menu;
