import React from "react";
import { Row, Col } from "antd";

interface Props {
  children?: React.ReactNode;
  style?: any;
}

const ContentWrapper: React.FC<Props> = (props) => {
  return (
    <Row style={typeof props.style == "undefined" ? {} : props.style}>
      <Col span={1}></Col>
      <Col span={22}>{props.children}</Col>
      <Col span={1}></Col>
    </Row>
  );
};

export default ContentWrapper;
