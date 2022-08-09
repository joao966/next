import React from "react";
import { Layout } from "antd";

interface IContent {
  children?: React.ReactNode;
  style?: any;
}

const Content: React.FC<IContent> = (props) => {
  const { Content: AntContent } = Layout;

  return (
    <AntContent
      style={{
        margin: "85px 0 0 0px",
        padding: "35px 0 0 0",
      }}
    >
      {props.children}
    </AntContent>
  );
};

export default Content;
