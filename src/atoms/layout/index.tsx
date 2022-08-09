import React from "react";
import { Layout as AntLayout } from "antd";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <AntLayout>
      {children}
    </AntLayout>
  );
};

export default Layout;
